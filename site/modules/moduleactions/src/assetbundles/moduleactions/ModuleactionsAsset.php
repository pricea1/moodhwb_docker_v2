<?php
/**
 * moduleactions module for Craft CMS 3.x
 *
 * Moodhwb module actions
 *
 * @link      LemonCog.com
 * @copyright Copyright (c) 2019 Andrew Price
 */

namespace modules\moduleactions\assetbundles\Moduleactions;

use Craft;
use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

/**
 * ModuleactionsAsset AssetBundle
 *
 * AssetBundle represents a collection of asset files, such as CSS, JS, images.
 *
 * Each asset bundle has a unique name that globally identifies it among all asset bundles used in an application.
 * The name is the [fully qualified class name](http://php.net/manual/en/language.namespaces.rules.php)
 * of the class representing it.
 *
 * An asset bundle can depend on other asset bundles. When registering an asset bundle
 * with a view, all its dependent asset bundles will be automatically registered.
 *
 * http://www.yiiframework.com/doc-2.0/guide-structure-assets.html
 *
 * @author    Andrew Price
 * @package   Moduleactions
 * @since     1
 */
class ModuleactionsAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    /**
     * Initializes the bundle.
     */
    public function init()
    {
        // define the path that your publishable resources live
        $this->sourcePath = "@modules/moduleactions/assetbundles/moduleactions/dist";

        // define the dependencies
        $this->depends = [
            CpAsset::class,
        ];

        // define the relative path to CSS/JS files that should be registered with the page
        // when this asset bundle is registered
        $this->js = [
            'js/Moduleactions.js',
        ];

        $this->css = [
            'css/Moduleactions.css',
        ];

        parent::init();
    }
}
