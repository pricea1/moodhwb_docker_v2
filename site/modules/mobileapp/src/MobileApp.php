<?php
/**
 * MobileApp plugin for Craft CMS 3.x
 *
 * Interface for MoodHwb App
 *
 * @link      www.github.com/pricea1
 * @copyright Copyright (c) 2019 Andrew Price
 */

namespace \moodhwb\mobileapp;

use moodhwb\mobileapp\services\AuthService as AuthService;
use edenspiekermann\craftjwtauth\CraftJwtAuth;

use Craft;
use craft\base\Plugin;
use craft\services\Plugins;
use craft\events\PluginEvent;
use craft\web\Application;
use craft\web\UrlManager;
use craft\events\RegisterUrlRulesEvent;

use yii\base\Event;

/**
 * Class MobileApp
 *
 * @author    Andrew Price
 * @package   MobileApp
 * @since     1.0.0
 *
 */
class MobileApp extends Plugin
{
    // Static Properties
    // =========================================================================

    /**
     * @var MobileApp
     */
    public static $plugin;

    // Public Properties
    // =========================================================================

    /**
     * @var string
     */
    public $schemaVersion = '1.0.0';

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();
        self::$plugin = $this;

        Craft::setAlias('@moodhwb/mobileapp', $this->getBasePath());

        Event::on(
            UrlManager::class,
            UrlManager::EVENT_REGISTER_SITE_URL_RULES,
            function (RegisterUrlRulesEvent $event) {
                $event->rules['siteActionTrigger1'] = 'mobileapp/auth';
            }
        );

        Event::on(
            Plugins::class,
            Plugins::EVENT_AFTER_INSTALL_PLUGIN,
            function (PluginEvent $event) {
                if ($event->plugin === $this) {
                }
            }
        );

        Craft::$app->on(Application::EVENT_INIT, function (Event $event) {

            $token = self::$plugin->authService->parseAndVerifyJWT(self::$plugin->authService->getJWTFromRequest());
            $currentUser =  Craft::$app->getUser();

            // If the token passes verification...
            if (!$currentUser->id && $token) {
                // Look for the user
                   
                $user = self::$plugin->authService->getUserByJWT($token);
 
                // Attempt to login as the user we have found or created
                if ($user->id) {
                    Craft::$app->user->loginByUserId($user->id);
                }
            }
        });

        // Register service
        $this->setComponents([
            'authService' => AuthService::class,
        ]);

        Craft::info(
            Craft::t(
                'mobileapp',
                '{name} plugin loaded',
                ['name' => $this->name]
            ),
            __METHOD__
        );
    }

    // Protected Methods
    // =========================================================================

}
