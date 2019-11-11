<?php
/**
 * moduleactions module for Craft CMS 3.x
 *
 * Moodhwb module actions
 *
 * @link      LemonCog.com
 * @copyright Copyright (c) 2019 Andrew Price
 */

namespace modules\moduleactions\variables;

use modules\moduleactions\Moduleactions;

use Craft;

/**
 * moduleactions Variable
 *
 * Craft allows modules to provide their own template variables, accessible from
 * the {{ craft }} global variable (e.g. {{ craft.moduleactions }}).
 *
 * https://craftcms.com/docs/plugins/variables
 *
 * @author    Andrew Price
 * @package   Moduleactions
 * @since     1
 */
class ModuleactionsVariable
{
    // Public Methods
    // =========================================================================

    /**
     * Whatever you want to output to a Twig template can go into a Variable method.
     * You can have as many variable functions as you want.  From any Twig template,
     * call it like this:
     *
     *     {{ craft.moduleactions.exampleVariable }}
     *
     * Or, if your variable requires parameters from Twig:
     *
     *     {{ craft.moduleactions.exampleVariable(twigValue) }}
     *
     * @param null $optional
     * @return string
     */


    $currentUser = Craft::$app->getUser()->getIdentity();
        
    return ModueleActions::getInstance()->userLoginService->updateLastViewed( );

    public function getModuleBookmarks()
    {

        $currentUser = Craft::$app->getUser()->getIdentity();
        return Modueleactions::getInstance()->getAllBookmarks($currentUser->id);
    }

    public function getMostRecentModuleBookmark()
    {

        $currentUser = Craft::$app->getUser()->getIdentity();

        return Modueleactions::getInstance()->getMostRecentBookmark($currentUser->id);
    }

    public function getAllModuleStatus()
    {
        $currentUser = Craft::$app->getUser()->getIdentity();
        return Modueleactions::getInstance()->getAllStatus($currentUser->id);
    }
}
