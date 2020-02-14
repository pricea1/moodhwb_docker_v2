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
        $request = Craft::$app->getRequest();

        $userLogin = parent::actionLogin();
        if (array_key_exists("error", $userLogin->data)){
            return $userLogin;
        }

        $currentUser =  Craft::$app->getUser()->getIdentity();

        $userLogin->data["jwtToken"] = MobileApp::$plugin->authService->getJwtToken($currentUser);
        
        $notificationTokens = json_decode($currentUser->getFieldValue('notificationTokens'));
        
        if (!isset($notificationTokens)) {
            $notificationTokens = array();
        }

        $deviceNotificationToken = $request->post('notificationToken');
return array('error' => $notificationTokens);
        if (!array_key_exists($deviceNotificationToken, $notificationTokens)){
            $notificationTokens[]= $$deviceNotificationToken;
//            array_push($notificationTokens, $deviceNotificationToken);
            $currentUser->setFieldValue("notificationTokens", json_encode($notificationTokens));
            Craft::$app->getElements()->saveElement($currentUser);

        }

        return $userLogin;
    }

    public function actionSignout() {
        
        $request = Craft::$app->getRequest();
        $deviceNotificationToken = $request->post('notificationToken');

        $currentUser =  Craft::$app->getUser()->getIdentity();

        $notificationTokens = json_decode($currentUser->getFieldValue('notificationTokens'));
        // TODO Test that notification tokens are being removed
        // Remove device from user notifications
        if (($key = array_search($deviceNotificationToken, $notificationTokens)) !== false) {
            unset($notificationTokens[$key]);
            $currentUser->setFieldValue("notificationTokens", json_encode($notificationTokens));
            Craft::$app->getElements()->saveElement($currentUser);
        }

        $userLogin = parent::actionLogout();
        return $currentUser->getFieldValue("notificationTokens");
    }

    public function actionChangePassword(){
    
        $currentUser =  Craft::$app->getUser()->getIdentity();
        $request = Craft::$app->getRequest();

        $currentPassword = $request->post('currentPassword');
        $newPassword = $request->post('newPassword');

        $currentUserVerified = parent::actionVerifyPassword($currentPassword);

        
        if (array_key_exists("error", $currentUserVerified->data)){
            return $currentUserVerified->data;
        }

        $currentUser->newPassword = $newPassword;
        $currentUser->setScenario(User::SCENARIO_PASSWORD);
        
        if (!Craft::$app->getElements()->saveElement($currentUser)) {
            $errors = $currentUser->getErrors('newPassword');
            return $this->asErrorJson(implode(', ', $errors));
        }
        
        return $this->asJson(['success' => true]);
        
        
    }

    /**
     * @return mixed
     */
    public function actionGetCsrf(){
        // Logout if still logged in from previous session
     //   Craft::$app->getUser()->logout(false);

        if (Craft::$app->config->general->enableCsrfProtection)
        {
            $return['csrfTokenName'] = Craft::$app->request->csrfParam;
            $return['csrfTokenValue'] = Craft::$app->request->csrfToken;
        }

        // $return['loggedin'] = craft()->userSession->isLoggedIn();

        return $this->asJson($return);
   
    }

}
