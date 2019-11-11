<?php
/**
 * moduleactions module for Craft CMS 3.x
 *
 * Moodhwb module actions
 *
 * @link      LemonCog.com
 * @copyright Copyright (c) 2019 Andrew Price
 */

namespace modules\moduleactions\controllers;

use modules\moduleactions\Moduleactions;

use Craft;
use craft\web\Controller;

/**
 * Default Controller
 *
 * Generally speaking, controllers are the middlemen between the front end of
 * the CP/website and your module’s services. They contain action methods which
 * handle individual tasks.
 *
 * A common pattern used throughout Craft involves a controller action gathering
 * post data, saving it on a model, passing the model off to a service, and then
 * responding to the request appropriately depending on the service method’s response.
 *
 * Action methods begin with the prefix “action”, followed by a description of what
 * the method does (for example, actionSaveIngredient()).
 *
 * https://craftcms.com/docs/plugins/controllers
 *
 * @author    Andrew Price
 * @package   Moduleactions
 * @since     1
 */
class DefaultController extends Controller
{

    // Protected Properties
    // =========================================================================

    /**
     * @var    bool|array Allows anonymous access to this controller's actions.
     *         The actions must be in 'kebab-case'
     * @access protected
     */
    protected $allowAnonymous = ['index', 'get-recommended-modules'];

    // Public Methods
    // =========================================================================

    /**
     * Handle a request going to our module's index action URL,
     * e.g.: actions/moduleactions/default
     *
     * @return mixed
     */
    public function actionIndex()
    {
        $result = 'Welcome to the DefaultController actionIndex() method';

        return $result;
    }

    /**
     * Handle a request going to our module's actionDoSomething URL,
     * e.g.: actions/moduleactions/default/do-something
     *
     * @return mixed
     */
    public function actionGetRecommendedModules()
    {
        $categories = ['difficulty', 'reason', 'symptom','strengths','help'];
        $userSelectedIds = array();
        $otherSelectedIds = array();

        $currentUser =  Craft::$app->getUser()->getIdentity();

        foreach ($categories as $cat){
            $userSelectedIds = array_merge($userSelectedIds, $currentUser[$cat]->ids() );
            $hereForCat = "hereForOther" .$cat;
        }

        
        $recommendedIds["hereForSelf"] =  Moduleactions::$instance->moduleactionsService->getSubmodulesByCatId($currentUser->id, $userSelectedIds );
        $recommendedIds["hereForOther"] = Moduleactions::$instance->moduleactionsService->getSubmodulesByCatId($currentUser->id, $otherSelectedIds );

        return $this->asJson($recommendedIds);

    }
}
