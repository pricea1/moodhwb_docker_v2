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

use Craft;
use craft\web\Controller;

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

    // Public Methods
    // =========================================================================

    /**
     * @return mixed
     */
    public function actionAddGoal()
    {
        $request = Craft::$app->getRequest();
        $currentUser = Craft::$app->getUser()->getIdentity();

        $model = new GoalModel();

        $model->userId = $currentUser->id;
        $model->activity = $request->post('activity');
        $model->timesPerWeek = $request->post('timesPerWeek');

        $newGoal = Profiler::$plugin->goalService->addGoal($model);
        Craft::$app->session->setNotice(Craft::t('site','Goal saved.'));

        return $this->returnData($newGoal);
    }

    public function actionDeleteGoal()
    {
        $goalId = Craft::$app->getRequest()->getQueryParam('goalId');
        $model = $this->getGoalModel($goalId);

        $delGoal =  Profiler::$plugin->goalService->deleteGoal($model);
 
        return $this->returnData($delGoal);
    }

    public function actionDoneActivity()
    {
       
        $goalId = Craft::$app->getRequest()->getQueryParam('goalId');
        $model = $this->getGoalModel($goalId);
        
        $savedGoal = Profiler::$plugin->goalService->doneActivity($model);

        return $this->returnData($savedGoal);
    }

    public function actionResetActivity()
    {
        $goalId = Craft::$app->getRequest()->getQueryParam('goalId');
        $model = $this->getGoalModel($goalId);

        $goal = Profiler::$plugin->goalService->resetGoal($model);

        return $this->returnData($goal);
    }
}
