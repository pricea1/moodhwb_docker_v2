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

    public $enableCsrfValidation = false;
    
    // Protected Properties
    // =========================================================================

    /**
     * @var    bool|array Allows anonymous access to this controller's actions.
     *         The actions must be in 'kebab-case'
     * @access protected
     */
    protected $allowAnonymous = ['send-notifications','generate-next-goals'];

    private function generateWeeklyGoalInstances($goal, $startDate = 'now'){
 
        $byDays = json_decode($goal->weeklyDays);
        
        $start = new \DateTime($startDate);

        $untilDate = new \DateTime($startDate);
        $untilDate->modify('+1 week');

        $weekId = $this->getWeekId();

        Profiler::$plugin->goalService->deleteFutureGoalInstances($goal, $start);

        $rrule = new \RRule\RRule([
            'freq' => 'weekly',
            'byday' => $byDays,
            'dtstart' => $start->format('Y-m-d'),
            'until' => $untilDate
        ]);

        $goalInstances = array();
        
        foreach ($rrule as $occurrence) {
            $dateStr = $occurrence->format('Y-m-d');

            $goalInstance = new GoalTrackerModel();
            $goalInstance->userId = $goal->userId;
            $goalInstance->goalId = $goal->id;
            $goalInstance->weekId = $this->getWeekId($dateStr);
            $goalInstance->date = $dateStr;
            if ($goal->thumbnailUri){
                $goalInstance->thumbnailUri = $goal->thumbnailUri;
            }

            $newGoalInstance = Profiler::$plugin->goalService->createGoalInstance($goalInstance);            
            $goalInstances[] = $newGoalInstance;
        }

        return $goalInstances;

    }

    private function generateOnceGoalInstances($goal, $startDate = 'now'){
        $start = new \DateTime($startDate);

        $untilDate = new \DateTime($startDate);
        $untilDate->modify('+1 week');       

        $weekId = $this->getWeekId();
        Profiler::$plugin->goalService->deleteFutureGoalInstances($goal, $start);

        if ($goal->repeatWeekly){
            if ($startDate === 'now') {
                $dtStart = $goal->onceDate;
            } else {
                $dtStart = $start->format('Y-m-d');
            }

            $dateOnce = new \DateTime($goal->onceDate);
            // Need days of week in MO, TU etc format
            $dayOfWeek = substr($dateOnce->format('D'), 0, 2);


            $rrule = new \RRule\RRule([
                'freq' => 'weekly',
                'interval' => 1,
                'byday' => $dayOfWeek,
                'dtstart' => $dtStart,
                'until' => $untilDate
            ]);

            $goalInstances = array();

            foreach ($rrule as $occurrence) {
                $goalInstance = new GoalTrackerModel();
                $goalInstance->userId = $goal->userId;
                $goalInstance->goalId = $goal->id;
                $goalInstance->date = $occurrence->format('Y-m-d');
                $goalInstance->weekId = $this->getWeekId($goalInstance->date);
                $goalInstance->thumbnailUri = $goal->thumbnailUri;
                
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
            $goalInstance->thumbnailUri = $goal->thumbnailUri;

            $newGoalInstance = Profiler::$plugin->goalService->createGoalInstance($goalInstance);            
            return array($newGoalInstance);
    
        }
    }
    

    private function generateGoalInstances($goal, $startDate = 'now'){
        // Generate instance for this week

        if ($goal->type==="weekly"){
            return $this->generateWeeklyGoalInstances($goal, $startDate);
        } else {
            return $this->generateOnceGoalInstances($goal, $startDate);
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

    private function getDate($date = "now"){

        $now = new \DateTime($date);
        return $now->format('Y-m-d');

    }

    // Public Methods
    // =========================================================================

    public function actionGetGoal(){
        $currentUser = Craft::$app->getUser()->getIdentity();
        $request = Craft::$app->getRequest();
        $goal = Profiler::$plugin->goalService->getGoal($currentUser->id, $request->post("goalId"));
       
        return $this->returnData($goal);
    }

    public function actionGetGoalsForWeek($returnRawData = false)
    {

        $currentUser = Craft::$app->getUser()->getIdentity();
        $weekId = $this->getWeekId();

        $goalInstances = Profiler::$plugin->goalService->getAllGoalsForWeek($currentUser->id, $weekId);

        if ($returnRawData) {
            return $goalInstances;
        } else {
            return $this->returnData($goalInstances);
        }

        
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
            $weeklyDays = $request->post('weeklyDays');
            if (is_array($weeklyDays)){
                $model->weeklyDays = '["' .implode('","', $request->post('weeklyDays')) .'"]';

            } else {
                $model->weeklyDays = $request->post('weeklyDays');
            }
        } else {
            $model->onceDate = $request->post('onceDate');
        }

        if ( $request->post('thumbnailUri') ){
            $model->thumbnailUri = $request->post('thumbnailUri');
        }

        if (!$model->title || !$model->weeklyDays){
            return;
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
        
        $id = $request->post('id');
        $status = $request->post('status');

        if (!$id){
            $id = $request->getQueryParam('id');
            $status = $request->getQueryParam('status');
        }

        $goalInstance->id = $id;
        $goalInstance->status = $status;

        Profiler::$plugin->goalService->updateGoalStatus($goalInstance);

        $weekId = $this->getWeekId();

        $goals = Profiler::$plugin->goalService->getAllGoalsForWeek($currentUser->id, $weekId);

        return $this->returnData($goals);

    }

    public function actionSendNotifications()
    {
        $goalsForToday = Profiler::$plugin->goalService->getAllToDoGoalsForDay($this->getDate());
        
        $notifications = Array();

        foreach ($goalsForToday as $userGoals) {
            $notifications[] = Profiler::$plugin->goalService->sendNotifications($userGoals);
        }
       
        return $this->asJson($notifications);
    }


    public function actionGenerateNextGoals()
    {
        //To be run on Sundays for following weeks goals
        $goalsToRepeat =  Profiler::$plugin->goalService->getAllRepeatWeeklyGoals();
        
        $startDate = new \DateTime('tomorrow');

        $repeats = Array($startDate->format('Y-m-d'));

        foreach ($goalsToRepeat as $goal) {
            $repeats[] = $this->generateGoalInstances($goal, $startDate->format('Y-m-d'));
        }

        return $this->asJson($repeats);
    }
    
}
