<?php
/**
 * mobileapp module for Craft CMS 3.x
 *
 * Moodhwb module actions
 *
 * @link      LemonCog.com
 * @copyright Copyright (c) 2019 Andrew Price
 */

namespace moodhwb\mobileapp\services;

use moodhwb\mobileapp\MobileApp;
use moodhwb\mobileapp\models\UserNotificationTokensModel;
use moodhwb\mobileapp\records\UserNotificationTokensRecord;

use Craft;
use craft\base\Component;
use craft\helpers\StringHelper;

use \Firebase\JWT\JWT;

/**
 * mobileapp Service
 *
 * All of your module’s business logic should go in services, including saving data,
 * retrieving data, etc. They provide APIs that your controllers, template variables,
 * and other modules can interact with.
 *
 * https://craftcms.com/docs/plugins/services
 *
 * @author    Andrew Price
 * @package   mobileapp
 * @since     1
 */
class AuthService extends Component
{
    private $jwtSecretKey = "G_qk8bFqGL43UU_TMAeH";
    private $signingAlg = "HS256";

    // Public Methods
    // =========================================================================

    /**
     * This function can literally be anything you want, and you can have as many service
     * functions as you want
     *
     * From any other plugin/module file, call it like this:
     *
     *     Moduleactions::$instance->moduleactionsService->exampleService()
     *
     * @return mixed
     */
    public function getJwtToken($user){
        $host = Craft::$app->request->getHostInfo();
        
        $payload = array(
            "iss" => $host,
            "aud" => array("username"=>$user->username)
        );

        $jwt = JWT::encode($payload, $this->jwtSecretKey, $this->signingAlg);
        return $jwt;
    } 

    /*
     * @return mixed
     */
    public function getJWTFromRequest()
    {     
        // Look for an access token in the settings
        $accessToken = Craft::$app->request->headers->get('authorization') ?: Craft::$app->request->headers->get('x-access-token');
        // If "Bearer " is present, strip it to get the token.
        if (StringHelper::startsWith($accessToken, 'Bearer ')) {
            $accessToken = StringHelper::substr($accessToken, 7);
        }

        // If we find one, and it looks like a JWT...
        if ($accessToken && $accessToken !== "null") {
            return $accessToken;
        }
        return null;
    }

    /*
    * @return mixed
    */
    public function parseAndVerifyJWT($jwt)
    {   
        if ($jwt){
            try {
                $decoded = JWT::decode($jwt, $this->jwtSecretKey, array($this->signingAlg));
                return $decoded;    
            } catch(\Exception $e) {
                return null;
            }
        }
    }

     /*
    * @return mixed
    */
    public function getUserByJWT($token)
    {
        if ($token) {
            // Derive the username from the subject in the token
            $userName = $token->aud->username;
            // Look for the user
            $user = Craft::$app->users->getUserByUsernameOrEmail($userName);
            return $user;
        }
        return null;
    }

    public function addUserNotificationTokens(UserNotificationTokensModel $notificationTokenModel)
    {
        $userNotificationTokensRecord = UserNotificationTokensRecord::find()
            ->where(['userId' => $notificationTokenModel->userId])
            ->one();

        if (!$userNotificationTokensRecord) {
            $userNotificationTokensRecord = new UserNotificationTokensRecord();
            $userNotificationTokensRecord->userId = $notificationTokenModel->userId;
            $userNotificationTokensRecord->notificationTokens = Array($notificationTokenModel->notificationTokens);
        } else {
            $notificationTokens = json_decode($userNotificationTokensRecord->notificationTokens);
            
            if (!is_array($notificationTokens)) {
                $notificationTokens = array();
            }

            if (in_array($notificationTokenModel->notificationTokens, $notificationTokens)) {
                return;
            }
            
            $notificationTokens[] = $notificationTokenModel->notificationTokens;
            $userNotificationTokensRecord->notificationTokens = json_encode($notificationTokens);
        }

        return $userNotificationTokensRecord->save();
    }

    public function removeUserNotificationTokens(UserNotificationTokensModel $notificationTokenModel)
    {
        $userNotificationTokensRecord = UserNotificationTokensRecord::find()
            ->where(['userId' => $notificationTokenModel->userId])
            ->one();

        if ($userNotificationTokensRecord) {
            $notificationTokens = json_decode($userNotificationTokensRecord->notificationTokens);
            if (($key = array_search($notificationTokenModel->notificationTokens, $notificationTokens)) !== false) {
                unset($notificationTokens[$key]);
            }
            $userNotificationTokensRecord->notificationTokens = $notificationTokens;
        }

        return $userNotificationTokensRecord->save();

    }
}