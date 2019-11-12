<?php
/**
 * Profiler plugin for Craft CMS 3.x
 *
 * MoodHwb Profiler
 *
 * @link      github.com/pricea1
 * @copyright Copyright (c) 2019 Andrew Price
 */

namespace moodhwb\profiler;

use moodhwb\profiler\services\Question as QuestionService;
use moodhwb\profiler\services\Goal as GoalService;
use moodhwb\profiler\services\StuffILike as StuffILikeService;
use moodhwb\profiler\variables\ProfilerVariable;

use Craft;
use craft\base\Plugin;
use craft\services\Plugins;
use craft\events\PluginEvent;
use craft\web\UrlManager;
use craft\web\twig\variables\CraftVariable;
use craft\web\twig\variables\Cp;

use craft\events\RegisterComponentTypesEvent;
use craft\events\RegisterUrlRulesEvent;
use craft\events\RegisterCpNavItemsEvent;

use yii\base\Event;

/**
 * Class Profiler
 *
 * @author    Andrew Price
 * @package   Profiler
 * @since     2.0.0
 *
 * @property  QuestionService $question
 * @property  GoalService $goal
 * @property  StuffILikeService $stuffILike
 */
class Profiler extends Plugin
{
    // Static Properties
    // =========================================================================

    /**
     * @var Profiler
     */
    public static $plugin;

    // Public Properties
    // =========================================================================

    /**
     * @var string
     */
    public $schemaVersion = '2.0.0';
    public $hasCpSection = true;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();
        self::$plugin = $this;

        Craft::setAlias('@moodhwb/profiler', $this->getBasePath());

        Event::on(
            UrlManager::class,
            UrlManager::EVENT_REGISTER_SITE_URL_RULES,
            function (RegisterUrlRulesEvent $event) {
                $event->rules['siteActionTrigger1'] = 'profiler/question';
                $event->rules['siteActionTrigger2'] = 'profiler/stuff-i-like';
                $event->rules['siteActionTrigger3'] = 'profiler/goal';
            }
        );

        Event::on(
            UrlManager::class,
            UrlManager::EVENT_REGISTER_CP_URL_RULES,
            function (RegisterUrlRulesEvent $event) {
                $event->rules['cpActionTrigger1'] = 'profiler/question/do-something';
                $event->rules['cpActionTrigger2'] = 'profiler/stuff-i-like/do-something';
                $event->rules['cpActionTrigger3'] = 'profiler/goal/do-something';
            }
        );

        Event::on(
            Cp::class,
            Cp::EVENT_REGISTER_CP_NAV_ITEMS,
            function(RegisterCpNavItemsEvent $event) {
                $event->navItems[] = [
                    'url' => 'profiler',
                    'label' => 'User Profiles',
                    'icon' => '@moodhwb/profiler/assetbundles/indexcpsection/dist/img/Index-icon.svg',
                ];
            }
        );
        
        Event::on(
            CraftVariable::class,
            CraftVariable::EVENT_INIT,
            function (Event $event) {
                /** @var CraftVariable $variable */
                $variable = $event->sender;
                $variable->set('profiler', ProfilerVariable::class);
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

        // Register service
        $this->setComponents([
            'questionService' => QuestionService::class,
        ]);

        Craft::info(
            Craft::t(
                'profiler',
                '{name} plugin loaded',
                ['name' => $this->name]
            ),
            __METHOD__
        );
    }

    // Protected Methods
    // =========================================================================

}
