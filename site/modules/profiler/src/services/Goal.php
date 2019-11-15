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
}
