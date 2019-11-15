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

use Craft;
use craft\base\Component;

/**
 * @author    Andrew Price
 * @package   Profiler
 * @since     2.0.0
 */
class Goal extends Component
{
    /*
    * Helper to format weekId: Yr-weekNo e.g 201532
    */
    private function getWeekId(){

        $now = new \DateTime('now');
        return $now->format('YW');

    }

    private function resetGoalAndSave(GoalRecord $goalRecord){

        $goalRecord->timesCompleted = 0;
        $goalRecord->status = 'todo';
        $goalRecord->weekId = $this->getWeekId();

        $goalRecord->save();
    
        return $goalRecord;
    }

    // Public Methods
    // =========================================================================

    /*
     * @return mixed
     */

    public function addGoal(GoalModel $goalModel)
    {

        $goalRecord = new GoalRecord();

        $goalRecord->userId = $goalModel->userId;
        $goalRecord->activity = $goalModel->activity;
    	$goalRecord->timesPerWeek = $goalModel->timesPerWeek;
        
        return $this->resetGoalAndSave($goalRecord);

    }

    public function deleteGoal($goalModel)
    {  
        $goal = GoalRecord::find()
                    ->where(['userId' => $goalModel->userId, 'id' => $goalModel->id])
                    ->one();

        $goal->delete();

        $goal->status = "deleted";

        return $goal;
    }

    public function getAllGoalsForWeek($userId){

        $weekId = $this->getWeekId();

        $goalList = GoalRecord::find()
                    ->where(['userId' => $userId])
                    ->all();
        
        foreach ($goalList as &$goal){
            // Check if new week
            if ($goal->weekId != $weekId){
                $this->resetGoalAndSave($goal);
            }
        }       

        return $goalList;
    }

    public function doneActivity($goalModel)
    {  
        $goal = GoalRecord::find()
                    ->where(['userId' => $goalModel->userId, 'id' => $goalModel->id])
                    ->one();

        $goal->timesCompleted = $goal->timesCompleted + 1;

        if ($goal->timesCompleted >= $goal->timesPerWeek){
            $goal->status = 'completed';
        }

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
