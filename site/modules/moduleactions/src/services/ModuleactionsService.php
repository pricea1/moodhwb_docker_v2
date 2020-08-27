<?php
/**
 * moduleactions module for Craft CMS 3.x
 *
 * Moodhwb module actions
 *
 * @link      LemonCog.com
 * @copyright Copyright (c) 2019 Andrew Price
 */

namespace modules\moduleactions\services;

use modules\moduleactions\Moduleactions;
use modules\moduleactions\models\ModuleactionsModel;
use modules\moduleactions\records\ModuleactionsRecord;

use Craft;
use craft\base\Component;
use craft\elements\Category;
use craft\elements\Entry;

/**
 * ModuleactionsService Service
 *
 * All of your module’s business logic should go in services, including saving data,
 * retrieving data, etc. They provide APIs that your controllers, template variables,
 * and other modules can interact with.
 *
 * https://craftcms.com/docs/plugins/services
 *
 * @author    Andrew Price
 * @package   Moduleactions
 * @since     1
 */
class ModuleactionsService extends Component
{
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
    public function getSubmodulesByCatId($userId, $categoryIds){

        if (count ($categoryIds) == 0){
            return [];
        }

        // Get categories
        $cats = Category::find()
                ->id($categoryIds)
                ->all();

        // Get entries matching categories
        $entries = Entry::find()
                    ->relatedTo($cats)
                    ->all();

         return \yii\helpers\ArrayHelper::getColumn($entries, 'id');

    }   

    public function getStatus($userId, $submoduleId)
    {

        $submoduleRecord = ModuleactionsRecord::find()
                    ->where(['userId' => $userId, 'submoduleId' => $submoduleId])
                    ->one();

        return $submoduleRecord;

    }
    
    public function saveStatus(ModuleactionsModel $submoduleModel)
    {   

        $submoduleRecord = $this->getStatus($submoduleModel->userId, $submoduleModel->submoduleId);

        if (!$submoduleRecord){
            $submoduleRecord = new ModuleactionsRecord();
            $submoduleRecord->userId = $submoduleModel->userId;
            $submoduleRecord->submoduleId = $submoduleModel->submoduleId;
        }

        $submoduleRecord->dateUpdated = '';
    	$submoduleRecord->status = $submoduleModel->status;
    	        
        $submoduleRecord->save();
        return $submoduleRecord;
    }
    
    public function saveModuleViewed($moduleId, $userId) {
        
    	$model = new ModuleactionsModel();


    	$model->userId = $userId;
    	$model->submoduleId = $moduleId;
    	$model->status = 'viewed';

        $saveStatus = $this->saveStatus($model);
    }

    public function getLastViewedModule($userId) {
        $submoduleRecord = new  ModuleactionsRecord();

        $lastViewed = $submoduleRecord->find()
                ->where(['userId' => $userId, 'status'=>'viewed'])
                ->orderBy('dateUpdated DESC')
                ->one();
        
        return $lastViewed;
    }

/*
    public function getAllBookmarks($userId){
        $submoduleRecord = new ModuleActions_SubmoduleViewRecord();

        $criteria = $submoduleRecord->dbCriteria;
        $criteria->addCondition("userId = " . $userId);
        $criteria->addCondition("status = 'current'");

        return $submoduleRecord->findAll($criteria);        
    }

    public function getMostRecentBookmark($userId){

        $submoduleRecord = new ModuleActions_SubmoduleViewRecord();

        $criteria = $submoduleRecord->dbCriteria;
        $criteria->addCondition("userId = " . $userId);
        $criteria->addCondition("status = 'viewed'");
        $criteria->order = "dateUpdated DESC";

        return $submoduleRecord->find($criteria);        

    }
*/
}
