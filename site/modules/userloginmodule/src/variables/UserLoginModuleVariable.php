<?php
/**
 * UserLogin module for Craft CMS 3.x
 *
 * MoodHwb specific login tasks
 *
 * @link      www.lemoncog.com
 * @copyright Copyright (c) 2019 Andrew Price
 */

namespace modules\userloginmodule\variables;

use modules\userloginmodule\UserLoginModule;

use Craft;

/**
 * UserLogin Variable
 *
 * Craft allows modules to provide their own template variables, accessible from
 * the {{ craft }} global variable (e.g. {{ craft.userLoginModule }}).
 *
 * https://craftcms.com/docs/plugins/variables
 *
 * @author    Andrew Price
 * @package   UserLoginModule
 * @since     1.0.0
 */
class UserLoginModuleVariable
{
    // Public Methods
    // =========================================================================

    /**
     * Whatever you want to output to a Twig template can go into a Variable method.
     * You can have as many variable functions as you want.  From any Twig template,
     * call it like this:
     *
     *     {{ craft.userLoginModule.exampleVariable }}
     *
     * Or, if your variable requires parameters from Twig:
     *
     *     {{ craft.userLoginModule.exampleVariable(twigValue) }}
     *
     * @param null $optional
     * @return string
     */

    public function getLastViewedDate()
    {
        $currentUser = Craft::$app->getUser()->getIdentity();
        
        return UserLoginModule::getInstance()->userLoginService->updateLastViewed( );
    }

    public function getUserStatus() {
        $currentUser = Craft::$app->getUser()->getIdentity();
        if (!$currentUser){
            return;
        }

        $now = new \DateTime('NOW');

        $timeSinceLastLogin = date_diff($now, $currentUser->lastLoginDate);
        $hasAnsweredQuestions = $currentUser->getFieldValue('hasAnsweredQuestions') == "true";

        if(!$hasAnsweredQuestions){
            return "unansweredQuestions";
        }

        if ($timeSinceLastLogin->days == 0 && $timeSinceLastLogin->h < 12 ){
            return 'lessThan12Hours';
        }

        if ($timeSinceLastLogin->days < 7 ){
            return 'within1Week';
        }

        return 'moreThan1Week';

    }
}
