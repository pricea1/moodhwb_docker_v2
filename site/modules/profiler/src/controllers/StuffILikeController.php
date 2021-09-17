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
use craft\elements\Category;

use yii\helpers\ArrayHelper;

/**
 * @author    Andrew Price
 * @package   Profiler
 * @since     2.0.0
 */
class StuffILikeController extends Controller
{
    public $enableCsrfValidation = false;
    
    // Protected Properties
    // =========================================================================

    /**
     * @var    bool|array Allows anonymous access to this controller's actions.
     *         The actions must be in 'kebab-case'
     * @access protected
     */
    protected $allowAnonymous = ['send-notifications'];

    private function groupedLinks()
    {
        $currentUser = Craft::$app->getUser()->getIdentity();
        
        $stuffILike = Profiler::$plugin->stuffILikeService->getAllStuffILike($currentUser->id);
        
        $stuffILikeModels = [];

        foreach ($stuffILike as $stuff){
            $model = new StuffILikeModel();
            $model->id = $stuff->id;
            $model->userId = $stuff->userId;
            $model->title = $stuff->title;
            $model->url = $stuff->url;
            $model->category = $stuff->category;
            $model->userCategory = $stuff->userCategory;

            $presetCategory = Category::findOne($stuff->category);
            if ($presetCategory){
                $model->categoryTitle = $presetCategory->title;
            } else {
                $model->categoryTitle = $stuff->userCategory;
            }    
            $stuffILikeModels[] = $model;
        }

        $returnStuffILike = ArrayHelper::index($stuffILikeModels, null, function($item){
            return $item->userCategory? $item['userCategory'] : $item['category'];
        });
        return $returnStuffILike;
    }

    private function returnData($model)
    {

        if (Craft::$app->getRequest()->isAjax){
            return $this->asJson($model);            
        } else {
            return $this->redirect('profile/stuff-i-like');
        }
    }

    public function actionSendNotifications()
    {
        /*
        $channelName = 'moodhwb_goals';
        $recipient = 'ExponentPushToken[HCRvUrORBk_0Jhv3TXKsSt]';
        // You can quickly bootup an expo instance
        $expo = \ExponentPhpSDK\Expo::normalSetup();
        
        // Subscribe the recipient to the server
        $expo->subscribe($channelName, $recipient);
        
        // Build the notification data
        $notification = ['title'=> 'MoodHwb push', 'body' => 'Hello World2!', 'channelId' => 'moodhwb_goals'];
        
        // Notify an interest with a notification
        $expo->notify($channelName, $notification);
        return $this->asJson(array($recipient, $notification));
        */
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

        $id = $request->post('id');
        if (isset($id)){
           $model->id = $id;
        }
        $model->title = $request->post('title');
        $model->url = $request->post('url');

        $category = $request->post('category');
        if (isset($category)){
            $model->category = $category;
        }

        $userCategory = $request->post('userCategory');
        if (isset($userCategory)){
            $model->category = 0;
            $model->userCategory = $userCategory;
        }

        $mixedCategory = $request->post('mixedCategory');
        if (isset($mixedCategory)){
            $isPresetCategory = Category::findOne($mixedCategory);
            if ($isPresetCategory){
                $model->category = $mixedCategory;
            } else {
                $model->category = 0;
                $model->userCategory = $mixedCategory;
            }
        }

        // Add http if not included
        if (!is_numeric(str_replace([' ','(',')','-'], "", $model->url)) && $model->url && preg_match("#https?://#",  $model->url) === 0) {
             $model->url = 'http://'. $model->url;
        }

        $newStuffILike = Profiler::$plugin->stuffILikeService->addStuffILike($model);

        $model->id = $newStuffILike->id;

        Craft::$app->session->setNotice(Craft::t('site','Stuff I Like saved.'));

        if ($request->post('returnSingleItem')) {
            return $this->returnData($newStuffILike);
        } else {
            $stuffILike = $this->groupedLinks();
            return $this->returnData($stuffILike);    
        }
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

        $stuffILike = $this->groupedLinks();
        return $this->returnData($stuffILike);

    }

    public function actionGetStuffILike($returnRawData = false)
    {   

        $returnStuffILike = $this->groupedLinks();

        $categories = Category::find()
                                ->siteId("*")
                                ->group('stuffILikeType')
                                ->orderBy('lft')
                                ->all();



        $returnCats = array();
        $catLookup = array();

        foreach ($returnStuffILike as $key=>$category){
            $catLookup[$key] = Array("id" => $key, "title" => $key);
        }

        foreach( $categories as $key => $category){
            $returnCats[] = $category;
            if (Craft::$app->language == $category->language){
                $catLookup[$category->id] = Array("id" => $category->id, "title"=>$category->title);
            }
        }
        
        ArrayHelper::multisort($catLookup, ['title'], [SORT_ASC], SORT_STRING | SORT_FLAG_CASE);
        ArrayHelper::multisort($returnStuffILike, function($item){
            if ($item[0]->category == 0 && !$item[0]->categoryTitle){
                // Uncategorised so want to go at end of list
                return "ZZZZZZZ";
            }
            return $item[0]->categoryTitle;
        }, [SORT_ASC], SORT_STRING | SORT_FLAG_CASE);
        
        $stuffILikeData = array('userStuffILike' => $returnStuffILike, 'categories' => $returnCats, 'categoryLookup' => $catLookup);

        if ($returnRawData) {
            return $stuffILikeData;
        } else {
            return $this->returnData($stuffILikeData);
        }
    }

}
