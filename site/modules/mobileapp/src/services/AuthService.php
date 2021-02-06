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

use Lcobucci\JWT\Signer\Key\InMemory;
use Lcobucci\JWT\Configuration;
use Lcobucci\JWT\Token;
use Lcobucci\JWT\Parser;

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
    private $config;
    private $jwtSecretKey;

    public function init() {
        $this->jwtSecretKey = InMemory::plainText("G_qk8bFqGL43UU_TMAeH");
        $this->config = Configuration::forSymmetricSigner(
            // You may use any HMAC variations (256, 384, and 512)
            new Sha256(),
            // replace the value below with a key of your own!
            InMemory::base64Encoded($jwtSecretKey)
            // You may also override the JOSE encoder/decoder if needed by providing extra arguments here
        );
    }

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

        $signer = new Sha256();
        $now   = new DateTimeImmutable();

        error_reporting(0);

        $token = $config->builder()
                    ->issuedBy($host) // Configures the issuer (iss claim)
                    ->permittedFor($host) // Configures the audience (aud claim)
                    ->identifiedBy('4f1g23a12aa') // Configures the id (jti claim), replicating as a header item
                    ->issuedAt($now) // Configures the time that the token was issue (iat claim)
                    ->canOnlyBeUsedAfter($now->modify('+1 minute'))
                    ->expiresAt($now->modify('+1 hour')) // Configures the expiration time of the token (exp claim)
                    ->withClaim('email', $user->username) // Configures a new claim, called "uid"
                    ->getToken($config->signer(), $config->signingKey());
        print_r($token);
        return $token->toString();
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
        if ($accessToken) {
            return $accessToken;
        }
        return null;
    }

    /*
    * @return mixed
    */
    public function parseAndVerifyJWT($accessToken)
    {
        $token = $this->parseJWT($accessToken);
        return $token;

        if ($token && $this->verifyJWT($token)) {
            return $token;
        }
        return null;
    }
    /*
    * @return mixed
    */
    public function parseJWT($accessToken)
    {
        if (count(explode('.', $accessToken)) === 3) {
            return $config->parser()->parse($accessToken);
        }
        return null;
    }

    /*
    * @return mixed
    */
    public function verifyJWT(Token $token)
    {
        // Attempt to verify the token
        return  $config->validator()->validate($token, ...$config->validationConstraints());
    }

     /*
    * @return mixed
    */
    public function getUserByJWT(Token $token)
    {
        if ($this->verifyJWT($token)) {
            // Derive the username from the subject in the token
            $email = $token->getClaim('email', '');
            $userName = $token->getClaim('sub', '');
            // Look for the user with email
            $user = Craft::$app->users->getUserByUsernameOrEmail($email ?: $userName);
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
