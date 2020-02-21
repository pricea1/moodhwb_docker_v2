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
class GoalTracker extends Model
{
    // Public Properties
    // =========================================================================

    /**
     * @var string
     */
    public $id;
    public $userId;
    public $goalId;
    public $weekId;
    public $date;
    public $status;


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
            ['goalId', 'number'],
            ['weekId', 'number'],
            ['date', 'date'],
            ['status', ['todo','done','skipped']]
        ];
    }
}
