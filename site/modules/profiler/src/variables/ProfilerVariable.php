<?php
/**
 * Profiler plugin for Craft CMS 3.x
 *
 * MoodHwb Profiler
 *
 * @link      github.com/pricea1
 * @copyright Copyright (c) 2019 Andrew Price
 */

namespace moodhwb\profiler\variables;

use moodhwb\profiler\Profiler;
use yii\helpers\ArrayHelper;

use Craft;

/**
 * @author    Andrew Price
 * @package   Profiler
 * @since     2.0.0
 */
class ProfilerVariable
{
    // Public Methods
    // =========================================================================

    /**
     * @param null $optional
     * @return array
     */
    public function getMoodDateList(){

        $currentUser = Craft::$app->getUser()->getIdentity();

        $endDate = new \DateTime();
        $interval = new \DateInterval('P1M');
        $period = new \DatePeriod($currentUser->dateCreated, $interval, $endDate);

        $dateList = [];

        foreach ($period as $dt){
            $currentYear = $dt->format('Y');
            if (!array_key_exists($currentYear, $dateList)){
                $dateList[$currentYear] = [];
            }

            array_push($dateList[$currentYear], [
                    'num' => $dt->format('m'),
                    'text' => $dt->format('M')
                ]);

        }

        return $dateList;
    }

    public function getAllGoals(){

        $currentUser = Craft::$app->getUser()->getIdentity();
        return Profiler::$plugin->goalController->actionGetGoalsForWeek(true);
    }
    
    public function getAllStuffILike(){
        $currentUser = Craft::$app->getUser()->getIdentity();

 //       $stuffILike = Profiler::$plugin->stuffILikeService->getAllStuffILike($currentUser->id);
        return Profiler::$plugin->stuffILikeController->actionGetStuffILike($currentUser->id);
        // $groupedLinks = ArrayHelper::index($stuffILike, null, 'category');
        // return $groupedLinks;
    }

    public function getOneStuffILike($id){
        $currentUser = Craft::$app->getUser()->getIdentity();
        return Profiler::$plugin->stuffILikeService->getOneStuffILike($currentUser->id, $id );
    }

    public function getSummaryMoodScore(){
        $currentUser = Craft::$app->getUser()->getIdentity();
        if (!$currentUser){
            return;
        }
        
        $summary = Profiler::$plugin->questionService->getSummaryOfMoodScores($currentUser->id);

        return $summary;
    }
}
