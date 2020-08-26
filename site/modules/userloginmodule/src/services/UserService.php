<?php
/**
 * UserLogin module for Craft CMS 3.x
 *
 * MoodHwb specific login tasks
 *
 * @link      www.lemoncog.com
 * @copyright Copyright (c) 2019 Andrew Price
 */

namespace modules\userloginmodule\services;

use modules\userloginmodule\UserLoginModule;

use Craft;
use craft\base\Component;
use craft\helpers\DateTimeHelper;

/**
 * UserService Service
 *
 * All of your module’s business logic should go in services, including saving data,
 * retrieving data, etc. They provide APIs that your controllers, template variables,
 * and other modules can interact with.
 *
 * https://craftcms.com/docs/plugins/services
 *
 * @author    Andrew Price
 * @package   UserLoginModule
 * @since     1.0.0
 */
class UserService extends Component
{
    // Public Methods
    // =========================================================================

     /*
    * Registers a page view and returns last page view data object
    * @return Craft/DateTime object of last view time 
    */
	public function updateLastViewed(){

        $user = Craft::$app->getUser()->getIdentity();
        $dashboardLastViewed = $user->dashboardLastViewed;
        
        $user->setFieldValue("dashboardLastViewed", DateTimeHelper::currentTimestamp() );
        Craft::$app->getElements()->saveElement($user, false);
   
        return $dashboardLastViewed->getTimestamp();

    }

}
