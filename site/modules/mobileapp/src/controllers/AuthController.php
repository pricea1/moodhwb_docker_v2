<?php
/**
 * MobileApp plugin for Craft CMS 3.x
 *
 * Interface for MoodHwb App
 *
 * @link      www.github.com/pricea1
 * @copyright Copyright (c) 2019 Andrew Price
 */

namespace moodhwb\mobileapp\controllers;

use moodhwb\mobileapp\MobileApp;

use Craft;
use craft\controllers\UsersController;
use craft\elements\User;

/**
 * @author    Andrew Price
 * @package   MobileApp
 * @since     1.0.0
 */
class AuthController extends UsersController
{

    // Protected Properties
    // =========================================================================

    /**
     * @var    bool|array Allows anonymous access to this controller's actions.
     *         The actions must be in 'kebab-case'
     * @access protected
     */
    protected $allowAnonymous = ['get-csrf','login','logout'];


    // Public Methods
    // =========================================================================

    public function actionLogin(){

        $userLogin = parent::actionLogin();
        if (array_key_exists("error", $userLogin->data)){
            return $userLogin;
        }

        $currentUser =  Craft::$app->getUser()->getIdentity();

        $userLogin->data["jwtToken"] = MobileApp::$plugin->authService->getJwtToken($currentUser);

        return $userLogin;
    }

    /**
     * @return mixed
     */
    public function actionGetCsrf(){
        // Logout if still logged in from previous session
        Craft::$app->getUser()->logout(false);

        if (Craft::$app->config->general->enableCsrfProtection)
        {
            $return['csrfTokenName'] = Craft::$app->request->csrfParam;
            $return['csrfTokenValue'] = Craft::$app->request->csrfToken;
        }

        // $return['loggedin'] = craft()->userSession->isLoggedIn();

        return $this->asJson($return);
   
    }

}
