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

use Craft;
use craft\controllers\UsersController;
use craft\elements\User;

use moodhwb\mobileapp\MobileApp;
use moodhwb\mobileapp\models\UserNotificationTokensModel;

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
    public $enableCsrfValidation = false;
    protected $allowAnonymous = ['get-csrf','login','logout', 'sendTestMail'];


    private function setNotificationToken($remove = false) {
        $request = Craft::$app->getRequest();
        $currentUser =  Craft::$app->getUser()->getIdentity();

        if (!$request->post('notificationToken') || $request->post('notificationToken') == "undefined"){
            return;
        }
        
        $model = new UserNotificationTokensModel();
        $model->userId = $currentUser->id;
        $model->notificationTokens = $request->post('notificationToken');

        if ($remove){
            return MobileApp::$plugin->authService->removeUserNotificationTokens($model);
        } else {
            return MobileApp::$plugin->authService->addUserNotificationTokens($model);
        }

    }


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
        //$tmp = MobileApp::$plugin->authService->getJwtToken($currentUser);
        
        $this->setNotificationToken();

        return $userLogin;
    }

    public function actionSignout() {
        
        $request = Craft::$app->getRequest();

        $this->setNotificationToken(true);

        $userLogin = parent::actionLogout();
        return $userLogin;
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

         $return = [];
    
         if (Craft::$app->config->general->enableCsrfProtection)
        {
            $return['csrfTokenName'] = Craft::$app->request->csrfParam;
            $return['csrfTokenValue'] = Craft::$app->request->csrfToken;
        }

        // $return['loggedin'] = craft()->userSession->isLoggedIn();

        return $this->asJson($return);
   
    }

    public function actionSendTestMail()
    {   
        $html = "TESTING";
        $subject = "Auto test";
        $mail="andrew@lemoncog.com";

        $transport = Craft::$app->getSystemSettings()->getEmailSettings();

        $sendMail = Craft::$app
            ->getMailer()
            ->compose()
            ->setTo($mail)
            ->setSubject($subject)
            ->setHtmlBody($html)
            ->send();

        return  $this->asJson($transport);
    }

}
