<?php
/**
 * moduleactions module for Craft CMS 3.x
 *
 * Moodhwb module actions
 *
 * @link      LemonCog.com
 * @copyright Copyright (c) 2019 Andrew Price
 */

namespace \moodhwb\mobileapp\models;
use moodhwb\mobileapp\MobileApp;

use Craft;
use craft\base\Model;


/**
 * ModuleactionsModel Model
 *
 * Models are containers for data. Just about every time information is passed
 * between services, controllers, and templates in Craft, it’s passed via a model.
 *
 * https://craftcms.com/docs/plugins/models
 *
 * @author    Andrew Price
 * @package   MobileApp
 * @since     1
 */
class UserNotificationTokensModel extends Model
{
    // Public Properties
    // =========================================================================

    /**
     * Some model attribute
     *
     * @var string
     */
    public $userId;
    public $notificationTokens;

    // Public Methods
    // =========================================================================

    /**
     * Returns the validation rules for attributes.
     *
     * Validation rules are used by [[validate()]] to check if attribute values are valid.
     * Child classes may override this method to declare different validation rules.
     *
     * More info: http://www.yiiframework.com/doc-2.0/guide-input-validation.html
     *
     * @return array
     */
    public function rules()
    {
        return [
            ['userId', 'number'],
            ['notificationTokens', 'string']
        ];
    }
}
