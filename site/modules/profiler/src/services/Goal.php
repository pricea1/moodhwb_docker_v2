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

use moodhwb\mobileapp\records\UserNotificationTokensRecord;

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

    public function deleteFutureGoalInstances($goalModel, $start) {
        GoalTrackerRecord::deleteAll(
            'userId="' .$goalModel->userId . '" AND ' .
            'goalId="' .$goalModel->id . '" AND ' .
            'date BETWEEN "2021-06-17" AND "9999-99-99"'
        );
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

    public function getAllToDoGoalsForDay($date) {
        $goalTablename = GoalRecord::tableName();
        $goalTrackerTablename = GoalTrackerRecord::tableName();

        $joinCondition = $goalTrackerTablename .'.goalId=' .$goalTablename .'.id';

        $todoList = GoalTrackerRecord::find()
                    ->select([$goalTrackerTablename.'.*', $goalTablename.'.type',$goalTablename.'.title',  ])
                    ->innerJoin($goalTablename, $joinCondition)
                    ->where([$goalTablename.'.setReminder' => 1])
                    ->andWhere([$goalTrackerTablename.'.status' => 'todo', $goalTrackerTablename.'.date' => $date])
                    ->asArray()
                    ->all();

        $groupedTodoList = ArrayHelper::index($todoList, null, 'userId');
    
        return $groupedTodoList;
    }

    public function getAllRepeatWeeklyGoals() {
        $goals = GoalRecord::find()
                ->where(['repeatWeekly' => 1])
                ->all();

        return $goals;
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

    public function sendNotifications($goalList = [])
    {   
        $title = "Your MoodHwb goals";
        $body = "Here are your goals for today\n";
        $userId = $goalList[0]['userId'];
        $channelName = "moodhwb_goals_" .$userId;

        $expo = \ExponentPhpSDK\Expo::normalSetup();

        $userNotificationTokensRecord = UserNotificationTokensRecord::findOne(['userId' => $userId]);

        // Subscribe the recipient to the server
        $notificationTokens = json_decode($userNotificationTokensRecord->notificationTokens);
        foreach($notificationTokens as $notificationToken) {
            $expo->subscribe($channelName, $notificationToken);
        }
        
        foreach($goalList as $goal) {
            $body = $body . "• " .$goal['title'] ."\n";
        }

        // Build the notification data
        $notification = ['title' => $title, 'body' => $body];
        
        // Notify an interest with a notification        
        return $expo->notify([$channelName], $notification);
    }
}
