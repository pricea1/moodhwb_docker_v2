<?php
/**
 * Profiler plugin for Craft CMS 3.x
 *
 * MoodHwb Profiler
 *
 * @link      github.com/pricea1
 * @copyright Copyright (c) 2019 Andrew Price
 */

namespace moodhwb\profiler\services;

use moodhwb\profiler\Profiler;
use moodhwb\profiler\records\Goal as GoalRecord;
use moodhwb\profiler\models\Goal as GoalModel;
use moodhwb\profiler\records\GoalTracker as GoalTrackerRecord;
use moodhwb\profiler\models\GoalTracker as GoalTrackerModel;

use Craft;
use craft\base\Component;
use yii\helpers\ArrayHelper;

/**
 * @author    Andrew Price
 * @package   Profiler
 * @since     2.0.0
 */
class Goal extends Component
{
    
    public function createGoalInstance(GoalTrackerModel $goalTrackerModel){

        $goalTrackerRecord = new GoalTrackerRecord();
        $goalTrackerRecord->userId = $goalTrackerModel->userId;
        $goalTrackerRecord->goalId = $goalTrackerModel->goalId;
        $goalTrackerRecord->weekId = $goalTrackerModel->weekId;
        $goalTrackerRecord->date = $goalTrackerModel->date;
        if ($goalTrackerModel->thumbnailUri){
            $goalTrackerRecord->thumbnailUri = $goalTrackerModel->thumbnailUri;
        }
        
        //nb default status defined in DB
        $goalTrackerRecord->save();
    
        return $goalTrackerRecord;
    }

    public function deleteWeekGoalInstances($goalModel, $weekId) {
        GoalTrackerRecord::deleteAll(['userId' => $goalModel->userId, 'goalId' => $goalModel->id, 'weekId' => $weekId]);
    }

    // Public Methods
    // =========================================================================

    /*
     * @return mixed
     */

    public function addGoal(GoalModel $goalModel)
    {

        if ($goalModel->id){
            $goalRecord = GoalRecord::findOne(['id' => $goalModel->id, 'userId' => $goalModel->userId]);
        } else {
            $goalRecord = new GoalRecord();
            $goalRecord->userId = $goalModel->userId;
        }

        $goalRecord->title = $goalModel->title;
        $goalRecord->setReminder = $goalModel->setReminder;
        $goalRecord->type = $goalModel->type;
        $goalRecord->repeatWeekly = $goalModel->repeatWeekly;
        $goalRecord->thumbnailUri = $goalModel->thumbnailUri;

        if ($goalModel->type === "weekly") {
            $goalRecord->weeklyDays = $goalModel->weeklyDays;
        } else {

            $goalRecord->onceDate = $goalModel->onceDate;
        }
        
        $goalRecord->save();
        return $goalRecord;
    }

    public function deleteGoal($goalModel, $weekId)
    {  
        $goal = GoalRecord::find()
                    ->where(['userId' => $goalModel->userId, 'id' => $goalModel->id])
                    ->one();

        $goal->delete();

        GoalTrackerRecord::deleteAll(['userId' => $goalModel->userId, 'goalId' => $goalModel->id]);

    //    $goal->status = "deleted";

        return $this->getAllGoalsForWeek($goalModel->userId, $weekId);
    }

    public function getGoal($userId, $goalId){
        $goal = GoalRecord::find()
                ->where(['userId' => $userId, 'id' => $goalId])
                ->one();

        return $goal;
    }

    public function getAllGoalsForWeek($userId, $weekId = ''){
        $goalTablename = GoalRecord::tableName();
        $goalTrackerTablename = GoalTrackerRecord::tableName();

        $joinCondition = $goalTrackerTablename .'.goalId=' .$goalTablename .'.id';

        $goalList = GoalTrackerRecord::find()
                    ->select([$goalTrackerTablename.'.*', $goalTablename.'.type',$goalTablename.'.title',  ])
                    ->innerJoin($goalTablename, $joinCondition)
                    ->where([$goalTrackerTablename.'.userId' => $userId, 'weekId' => $weekId])
                    ->andWhere(['!=', 'status', 'skipped'])
                    ->asArray()
                    ->all();

        $groupedGoals = ArrayHelper::index($goalList, null, 'date');
    
        return $groupedGoals;
    }

    public function updateGoalStatus($goalModel)
    {  
        $goal = GoalTrackerRecord::find()
                    ->where(['userId' => $goalModel->userId, 'id' => $goalModel->id])
                    ->one();

        $goal->status = $goalModel->status;

        $goal->save();

        return $goal;
    }

    public function resetGoal($goalModel)
    {
        $goal = GoalRecord::find()
                ->where(['userId' => $goalModel->userId, 'id' => $goalModel->id])
                ->one();

        return $this->resetGoalAndSave($goal);

    }
}
