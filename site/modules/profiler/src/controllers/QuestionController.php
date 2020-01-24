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
use moodhwb\profiler\models\Question as QuestionModel;

use Craft;
use craft\web\Controller;
use craft\elements\Category;

/**
 * @author    Andrew Price
 * @package   Profiler
 * @since     2.0.0
 */
class QuestionController extends Controller
{

    // Protected Properties
    // =========================================================================

    /**
     * @var    bool|array Allows anonymous access to this controller's actions.
     *         The actions must be in 'kebab-case'
     * @access protected
     */
    protected $allowAnonymous = [];

    private function getCatIdsFromArray($cat){
        return $cat->id;
    }

    // Public Methods
    // =========================================================================

/**
     * API to save individual Question
     * 
     * @param Array $question 
     * @return JSON
     */
    public function actionSaveQuestion( $question = null, $returnJson = true )
    {
        //$this->requireAjaxRequest();
        
        if (!is_array($question)){
            $question = Craft::$app->getRequest()->post();
        }

    	$currentUser = Craft::$app->getUser()->getIdentity();

        // Allow current users here for setting to be overridden by request
        // Useful for app which should only record here for self regardless of what the user has selected on web
        if (array_key_exists('hereFor',$question)){
            $hereFor = $question['hereFor'];
        } else {
            $hereFor = $currentUser->hereFor->value;
        }
        
        if (array_key_exists('dateAnswered', $question)){
            $questionDate = $question['dateAnswered'];
        } else {
            if (array_key_exists('profileQuestionTimestamp', $question)){
                $questionHour = date('G', $question['profileQuestionTimestamp']);
                $questionDate = date('Y-m-d',  $question['profileQuestionTimestamp']);
            }else {
                $questionHour = date('G');
                $questionDate = date('Y-m-d');
            }
        }


        $period = 1;

        if (array_key_exists("period", $question)){
            $period = $question['period'];
        } else {
            if ($questionHour >= 12){
                $period = 2;
            }
            if ($questionHour >= 17){
                $period = 3;
            }
        }


        switch ($question['profileQuestionType']){

            case "question":
                $model = new QuestionModel();

                $model->userId = $currentUser->id;
                $model->questionId = $question['profileQuestionId'];
                $model->value = $question['profileQuestionAnswer'];
                $model->hereFor = $hereFor;
                $model->period = $period;
                $model->dateAnswered = $questionDate;

                Profiler::$plugin->questionService->saveQuestion($model);
                Craft::$app->session->setNotice(Craft::t('site','Question results saved.'));

   //             if ($returnJson){
                    $returnVal = $model;            
     //           }

            break;
            
            case "category":
                // Update related categories
                $field = Craft::$app->fields->getFieldByHandle($question['profileQuestionId']);

                if (array_key_exists('profileQuestionCategories', $question)){
                    if (is_array($question['profileQuestionCategories'])){
                        $relations = $question['profileQuestionCategories'];
                    } else {

                        if ($question['profileQuestionCategories'] != ""){
                           $relations = explode(",", $question['profileQuestionCategories']);
                        } else {
                            $relations = Array();
                        }
                    }

                } else {
                    $relations = Array();
                }
           


                Craft::$app->relations->saveRelations($field , $currentUser, $relations);

//                if ($returnJson){
                    $returnVal = ["relations" => $relations];            
  //              }
            break;

            
            case "generic":
                $model = new QuestionModel();
    
                $model->userId = $currentUser->id;
                $model->questionId = $question['profileQuestionId'];
                $model->textValue = $question['profileQuestionValue'];
                $model->value = -1;
                $model->hereFor = $hereFor;
                $model->period = $period;
                $model->dateAnswered = $questionDate;
                
                Profiler::$plugin->questionService->saveQuestion($model);
                Craft::$app->session->setNotice(Craft::t('site','Question results saved.'));

      //          if ($returnJson){
                    $returnVal = $model;            
      //          }

            break;
            
        }
/*
        if (!$currentUser->hasProfile){
            $currentUser->setContent(['hasProfile' => true]);
            craft()->users->saveUser($currentUser);            
        }
*/
        if ($returnJson && $returnVal){
            return $this->asJson($returnVal);   
        } else {
            return $returnVal;
        }
    }

    public function actionSaveAllQuestions() {
        $request = Craft::$app->getRequest();
        $response = [];

        $moodAnswers =$request->post("moodAnswers");
        
        foreach ( $moodAnswers as $encodedMoodAnswer) {

            $moodAnswer = json_decode($encodedMoodAnswer);

            $answerArray = array(
                "profileQuestionId" => $moodAnswer->id,
                "profileQuestionType" => $moodAnswer->type,
            );

            if ($moodAnswer->type === "question") {
                $answerArray["profileQuestionAnswer"] = $moodAnswer->value;
            }

            if ($moodAnswer->type === "category") {
                $answerArray["profileQuestionCategories"] = $moodAnswer->value;
            }

            if ($moodAnswer->type === "generic") {
                $answerArray["profileQuestionValue"] =$moodAnswer->value;
            }

            $response[$moodAnswer->id] = $this->actionSaveQuestion($answerArray, false);
        }

        return $this->asJson($response);

    }

    public function actionSaveAllQuestionsOLD()
    {

        /* TODO Make sure this works with both question and category question types */
        
        $request = Craft::$app->getRequest();

        $profileIds = $request->post('profileQuestionId');
        $profileQuestionAnswer = $request->post('profileQuestionAnswer');
        $profileQuestionType = $request->post('profileQuestionType');
        $profileQuestionCategories = $request->post('fields');
        $profileQuestionValues = $request->post('profileQuestionValue');

        foreach( $profileIds as $key => $profileId){

            $answerArray = array(
                "profileQuestionId" => $profileId
            );

            if (array_key_exists($key, $profileQuestionType)){
                $answerArray["profileQuestionType"] = $profileQuestionType[$key];
            }

            if (array_key_exists($key, $profileQuestionAnswer)){
                $answerArray["profileQuestionAnswer"] = $profileQuestionAnswer[$key];
            }

            if (array_key_exists($key, $profileQuestionCategories)){
                $answerArray["profileQuestionCategories"] = $profileQuestionCategories[$key];
            }

            if (array_key_exists($key, $profileQuestionValues)){
                $answerArray["profileQuestionValue"] = $profileQuestionValues[$key];
            }

            $this->actionSaveQuestion($answerArray, false);
        }
return $this->asJson($request->post());
        return $this->redirect($request->post('redirect'));

    }

    /**
     * Get JSON of mood monitor scores
     */
    public function actionGetMoodScores(){
        $request = Craft::$app->getRequest();

        $prevScore = Array();
        $nextScore = Array();

        $month = $request->post('month');
 
        if (!$month) {
            $month = date('Y-m');
        }

        $currentUser = Craft::$app->getUser()->getIdentity();

        $moodScores =  Profiler::$plugin->questionService->getAllMoodScores($currentUser->id, $currentUser->hereFor, $month);

        return $this->asJson($moodScores);
    }

    /**
     * Gets all Mood Questions for App
     */
    public function actionGetMoodQuestions(){

        $questions = Profiler::$plugin->questionService->getMoodQuestions();
        $currentUser = Craft::$app->getUser()->getIdentity();

        $return = Array();

        foreach( $questions as $key => $question){

            if ( isset($question->categoryType)){

                $categories = Category::find()
                                ->siteId("*")
                                ->group($question->categoryType)
                                ->all();


                $relatedTo = array(
                    'sourceElement' => $currentUser,
                    'field'         => $question->categoryType
                );

                $userCategories = Category::find()
                    ->relatedTo($relatedTo)
                    ->all();
                
                $userCatIds = array_map(array($this,"getCatIdsFromArray"),$userCategories);
                
                $retCat = Array();
                foreach( $categories as $key => $category ){

                    array_push($retCat, Array(
                        'title' => $category->title,
                        'categoryId' => $category->id,
                        'isChecked' => in_array($category->id, $userCatIds),
                        'siteId' => $category->siteId
                    ));
                }

                $catQuestion = Array(
                    'text' => $question->text,
                    'questionTitle' => $question->title,
                    'id' => $question->id,
                    'fieldId' => $question->fieldId,
                    'categoryId' => $question->categoryId,
                    'categoryType' => $question->categoryType,
                    'locale' => $question->locale,
                    'categories' => $retCat
                );

                array_push($return, $catQuestion);

            } else {
                $questionReturn = Array(
                    'id' => $question->id,
                    'questionId' => $question->questionId,
                    'positiveDesc' => $question->positiveDesc,
                    'negativeDesc' => $question->negativeDesc,
                );

                array_push($return, $questionReturn);
            }
        }

        return $this->asJson($return);

    }
    
}
