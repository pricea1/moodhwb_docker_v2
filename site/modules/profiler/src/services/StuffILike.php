<?php
/**
 * Profiler plugin for Craft CMS 3.x
 *
 * MoodHwb Profiler
 *
 * @link      github.com/pricea1
 * @copyright Copyright (c) 2019 Andrew Price
 */

namespace moodhwb\profiler\services;

use moodhwb\profiler\Profiler;
use moodhwb\profiler\records\StuffILike as StuffILikeRecord;
use moodhwb\profiler\models\StuffILike as StuffILikeModel;

use Craft;
use craft\base\Component;

/**
 * @author    Andrew Price
 * @package   Profiler
 * @since     2.0.0
 */
class StuffILike extends Component
{
    // Public Methods
    // =========================================================================

    /*
     * @return mixed
     */
    function getAllStuffILike($userId){

        $usersStuffILike = StuffILikeRecord::find()
                    ->where(['userId' => $userId])
                    ->all();
        
        return $usersStuffILike;
    }

    function getOneStuffILike($userId, $stuffILikeId){
        return StuffILikeRecord::findOne(['id' => $stuffILikeId, 'userId' => $userId]);
    }

    public function addStuffILike(StuffILikeModel $stuffILikeModel)
    {
        // CHeck if title/url already exists for user
        $existingRecord = StuffILikeRecord::findOne(['title' => $stuffILikeModel->title, 'url' => $stuffILikeModel->url, 'userId' => $stuffILikeModel->userId]);
        if ($existingRecord) {
            return $existingRecord;
        }

        if ($stuffILikeModel->id && $stuffILikeModel->id !== "placeholder" ){
            $stuffILikeRecord = StuffILikeRecord::findOne(['id' => $stuffILikeModel->id, 'userId' => $stuffILikeModel->userId]);
        } else {
            $stuffILikeRecord = new StuffILikeRecord();
            $stuffILikeRecord->userId = $stuffILikeModel->userId;
        }

        $stuffILikeRecord->title = $stuffILikeModel->title;
        $stuffILikeRecord->url = $stuffILikeModel->url;
        $stuffILikeRecord->category = $stuffILikeModel->category;
        $stuffILikeRecord->userCategory = $stuffILikeModel->userCategory;

        $stuffILikeRecord->save();

        return $stuffILikeRecord;
    }

    public function deleteStuffILike(StuffILikeModel $stuffILikeModel)
    {  
        $goal = StuffILikeRecord::find()
                    ->where(['userId' => $stuffILikeModel->userId, 'id' => $stuffILikeModel->id])
                    ->one();

        $goal->delete();

        return $goal;
    }
}
