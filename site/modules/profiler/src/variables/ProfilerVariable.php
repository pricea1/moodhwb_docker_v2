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
}
