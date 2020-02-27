<?php
/**
 * Profiler plugin for Craft CMS 3.x
 *
 * MoodHwb Profiler
 *
 * @link      github.com/pricea1
 * @copyright Copyright (c) 2019 Andrew Price
 */

namespace moodhwb\profiler\controllers;

use moodhwb\profiler\Profiler;
use moodhwb\profiler\models\Goal as GoalModel;
use moodhwb\profiler\models\GoalTracker as GoalTrackerModel;

use Craft;
use craft\web\Controller;
use RRule\RRule;

/**
 * @author    Andrew Price
 * @package   Profiler
 * @since     2.0.0
 */
class GoalController extends Controller
{

    // Protected Properties
    // =========================================================================

    /**
     * @var    bool|array Allows anonymous access to this controller's actions.
     *         The actions must be in 'kebab-case'
     * @access protected
     */
    protected $allowAnonymous = [];

    private function generateWeeklyGoalInstances($goal){
 
        $byDays = json_decode($goal->weeklyDays);

        $untilDate = new \DateTime('now');
        $untilDate->modify('monday next week');

        $weekId = $this->getWeekId();

        $rrule = new \RRule\RRule([
            'freq' => 'weekly',
            'byday' => $byDays,
            'until' => $untilDate
        ]);

        $goalInstances = array();

        foreach ($rrule as $occurrence) {

            $goalInstance = new GoalTrackerModel();
            $goalInstance->userId = $goal->userId;
            $goalInstance->goalId = $goal->id;
            $goalInstance->weekId = $weekId;
            $goalInstance->date = $occurrence->format('Y-m-d');

            $newGoalInstance = Profiler::$plugin->goalService->createGoalInstance($goalInstance);            
            $goalInstances[] = $newGoalInstance;
        }

        return $goalInstances;

    }

    private function generateOnceGoalInstances($goal){
        $untilDate = new \DateTime('now');
        $untilDate->modify('monday 3 week');       

        if ($goal->repeatWeekly){

            $rrule = new \RRule\RRule([
                'freq' => 'weekly',
                'interval' => 1,
                'dtstart' => $goal->onceDate,
                'until' => $untilDate
            ]);

            $goalInstances = array();

            foreach ($rrule as $occurrence) {
                $goalInstance = new GoalTrackerModel();
                $goalInstance->userId = $goal->userId;
                $goalInstance->goalId = $goal->id;
                $goalInstance->date = $occurrence->format('Y-m-d');
                $goalInstance->weekId = $this->getWeekId($goalInstance->date);
    
                $newGoalInstance = Profiler::$plugin->goalService->createGoalInstance($goalInstance);            
                $goalInstances[] = $newGoalInstance;
            }
    
            return $goalInstances;
        } else {
            $goalInstance = new GoalTrackerModel();
            $goalInstance->userId = $goal->userId;
            $goalInstance->goalId = $goal->id;

            $goalInstance->date = $goal->onceDate;
            $goalInstance->weekId = $this->getWeekId($goal->onceDate);

            $newGoalInstance = Profiler::$plugin->goalService->createGoalInstance($goalInstance);            
            return array($newGoalInstance);
    
        }
    }
    

    private function generateGoalInstances($goal){
        // Generate instance for this week

        if ($goal->type==="weekly"){
            return $this->generateWeeklyGoalInstances($goal);
        } else {
            return $this->generateOnceGoalInstances($goal);
        }

    }

    private function getGoalModel($goalId)
    {
        $currentUser = Craft::$app->getUser()->getIdentity();

        $model = new GoalModel();

        $model->userId = $currentUser->id;
        $model->id = $goalId;

        return $model;
    }

    private function returnData($model)
    {

        if (Craft::$app->getRequest()->isAjax){
            return $this->asJson($model);            
        } else {
            return $this->redirect('profile/goals');
        }
    }

    /*
    * Helper to format weekId: Yr-weekNo e.g 201532
    */
    private function getWeekId($date = "now"){

        $now = new \DateTime($date);
        return $now->format('YW');

    }

    // Public Methods
    // =========================================================================

    public function actionGetGoal(){
        $currentUser = Craft::$app->getUser()->getIdentity();
        $request = Craft::$app->getRequest();
        $goal = Profiler::$plugin->goalService->getGoal($currentUser->id, $request->post("goalId"));
       
        return $this->returnData($goal);
    }

    public function actionGetGoalsForWeek()
    {

        $currentUser = Craft::$app->getUser()->getIdentity();
        $weekId = $this->getWeekId();

        $goalInstances = Profiler::$plugin->goalService->getAllGoalsForWeek($currentUser->id, $weekId);

        return $this->returnData($goalInstances);
    }

    /**
     * @return mixed
     */
    public function actionAddGoal()
    {

        $request = Craft::$app->getRequest();
        $currentUser = Craft::$app->getUser()->getIdentity();

        $model = new GoalModel();

        $model->userId = $currentUser->id;

        $id = $request->post('id');
        if (isset($id)){
           $model->id = $id;
        }

        $model->title = $request->post('title');
        $model->setReminder = $request->post('setReminder') === "true";
        
        $model->type = $request->post('type');
        $model->repeatWeekly = $request->post('repeatWeekly') === "true";

        if ($model->type === "weekly") {
            $model->weeklyDays = $request->post('weeklyDays');
        } else {
            $model->onceDate = $request->post('onceDate');
        }

        $newGoal = Profiler::$plugin->goalService->addGoal($model);
        Craft::$app->session->setNotice(Craft::t('site','Goal saved.'));
        
        $newGoals = $this->generateGoalInstances($newGoal);

        $weekId = $this->getWeekId();

        $goals = Profiler::$plugin->goalService->getAllGoalsForWeek($currentUser->id, $weekId);

        return $this->returnData($goals);
    }

    public function actionDeleteGoal()
    {
        $goalId = Craft::$app->getRequest()->getQueryParam('goalId');
        $model = $this->getGoalModel($goalId);

        $weekId = $this->getWeekId();

        $delGoal =  Profiler::$plugin->goalService->deleteGoal($model, $weekId);
 
        return $this->returnData($delGoal);
    }

    public function actionUpdateGoalStatus()
    {
        $request = Craft::$app->getRequest();
        $currentUser = Craft::$app->getUser()->getIdentity();

        $goalInstance = new GoalTrackerModel();
        $goalInstance->userId = $currentUser->id;
        $goalInstance->id = $request->post('id');
        $goalInstance->status = $request->post('status');

        Profiler::$plugin->goalService->updateGoalStatus($goalInstance);

        $weekId = $this->getWeekId();

        $goals = Profiler::$plugin->goalService->getAllGoalsForWeek($currentUser->id, $weekId);

        return $this->returnData($goals);

    }
}
