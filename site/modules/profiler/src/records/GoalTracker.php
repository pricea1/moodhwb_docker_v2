<?php
/**
 * Profiler plugin for Craft CMS 3.x
 *
 * MoodHwb Profiler
 *
 * @link      github.com/pricea1
 * @copyright Copyright (c) 2019 Andrew Price
 */

namespace moodhwb\profiler\records;

use moodhwb\profiler\Profiler;

use Craft;
use craft\db\ActiveRecord;

/**
 * @author    Andrew Price
 * @package   Profiler
 * @since     2.0.0
 */
class GoalTracker extends ActiveRecord
{
    // Public Static Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%profiler_goaltracker}}';
    }
}
