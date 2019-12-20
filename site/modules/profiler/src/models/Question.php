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
class Question extends Model
{
    // Public Properties
    // =========================================================================

    /**
     * @var string
     */
    public $userId;
    public $questionId;
    public $value;
    public $textValue;
    public $hereFor;
    public $period;
    public $dateAnswered;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['userId' => 'number'],
            ['questionId' => 'String'],
            ['value' => 'number'],
            ['textValue' => 'string'],
            ['hereFor' => 'string'],
            ['period', [1,2,3]],
            ['dateAnswered' => 'date']
        ];
    }
}
