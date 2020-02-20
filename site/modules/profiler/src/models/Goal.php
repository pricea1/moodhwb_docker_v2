<?php
/**
 * Profiler plugin for Craft CMS 3.x
 *
 * MoodHwb Profiler
 *
 * @link      github.com/pricea1
 * @copyright Copyright (c) 2019 Andrew Price
 */

namespace moodhwb\profiler\models;

use moodhwb\profiler\Profiler;

use Craft;
use craft\base\Model;

/**
 * @author    Andrew Price
 * @package   Profiler
 * @since     2.0.0
 */
class Goal extends Model
{
    // Public Properties
    // =========================================================================

    /**
     * @var string
     */
    public $id;
    public $userId;
    public $title;
    public $type;
    public $setReminder;
    public $onceRepeatWeekly;
    public $onceDate;
    public $weeklyDays;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['id','number'],
			['userId', 'number'],
			['title', 'string'],
            ['type', ['once','weekly']],
            ['setReminder', 'boolean'],
            ['onceRepeatWeekly', 'boolean'],
            ['onceDate', 'date'],
            ['weeklyDays', 'string']
        ];
    }
}
