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
class StuffILike extends Model
{
    // Public Properties
    // =========================================================================

    /**
     * @var string
     */
    public $id;
    public $userId;
    public $title;
    public $url;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['id', 'number'],
            ['userId', 'number'],
            ['title', 'string'],
            ['url', 'string'],
        ];
    }
}
