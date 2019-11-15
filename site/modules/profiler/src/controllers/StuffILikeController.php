<?php
/**
 * Profiler plugin for Craft CMS 3.x
 *
 * MoodHwb Profiler
 *
 * @link      github.com/pricea1
 * @copyright Copyright (c) 2019 Andrew Price
 */

namespace moodhwb\profiler\controllers;

use moodhwb\profiler\Profiler;
use moodhwb\profiler\models\StuffILike as StuffILikeModel;

use Craft;
use craft\web\Controller;

/**
 * @author    Andrew Price
 * @package   Profiler
 * @since     2.0.0
 */
class StuffILikeController extends Controller
{

    // Protected Properties
    // =========================================================================

    /**
     * @var    bool|array Allows anonymous access to this controller's actions.
     *         The actions must be in 'kebab-case'
     * @access protected
     */
    protected $allowAnonymous = [];

    private function returnData($model)
    {

        if (Craft::$app->getRequest()->isAjax){
            return $this->asJson($model);            
        } else {
            return $this->redirect('profile/stuff-i-like');
        }
    }

    // Public Methods
    // =========================================================================

    /**
     * @return mixed
     */
    public function actionAddStuffILike()
    {

    	$currentUser = Craft::$app->getUser()->getIdentity();
        $request = Craft::$app->getRequest();

        $model = new StuffILikeModel();

        $model->userId = $currentUser->id;
        $model->title = $request->post('title');
        $model->url = $request->post('url');

        // Add http if not included
        if ($model->url && preg_match("#https?://#",  $model->url) === 0) {
             $model->url = 'http://'. $model->url;
        }

        $newStuffILike = Profiler::$plugin->stuffILikeService->addStuffILike($model);

        $model->id = $newStuffILike->id;

        Craft::$app->session->setNotice(Craft::t('site','Stuff I Like saved.'));

        return $this->returnData($model);
    }

    public function actionDeleteStuffILike()
    {

    	$currentUser = Craft::$app->getUser()->getIdentity();
        $request = Craft::$app->getRequest();

        $stuffILikeId = $request->getQueryParam('stuffILikeId');

        $model = new StuffILikeModel();
        $model->userId = $currentUser->id;
        $model->id = $stuffILikeId;

        $delStuffILike = Profiler::$plugin->stuffILikeService->deleteStuffILike($model);

        return $this->returnData($delStuffILike);

    }
}
