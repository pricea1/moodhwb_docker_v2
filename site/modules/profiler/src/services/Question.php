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
use moodhwb\profiler\models\Question as QuestionModel;
use moodhwb\profiler\records\MoodScore as MoodScoreRecord;
use moodhwb\profiler\records\Question as QuestionRecord;

use Craft;
use craft\base\Component;
use craft\elements\Entry;

/**
 * @author    Andrew Price
 * @package   Profiler
 * @since     2.0.0
 */
class Question extends Component
{
    // Public Methods
    // =========================================================================

    /*
     * @return mixed
     */
    public function saveQuestion(QuestionModel $questionModel)
    {

    	// Mood score record latest user details for use on dashboard
    	$moodScoreRecord = $this->getCurrentMoodScore($questionModel->userId, $questionModel->questionId);

        if (!$moodScoreRecord){
            $moodScoreRecord = new MoodScoreRecord();
        }
           
        $moodScoreRecord->userId = $questionModel->userId;
        $moodScoreRecord->questionId = $questionModel->questionId;
    	$moodScoreRecord->value = $questionModel->value;
        $moodScoreRecord->hereFor = $questionModel->hereFor;
        $moodScoreRecord->textValue = $questionModel->textValue;

        $moodScoreRecord->save();

        // Only want to allow 1 period entry
        $questionRecord = $this->getQuestionToUpdate($questionModel->userId, $questionModel->questionId, $questionModel->dateAnswered, $questionModel->period);
        
        if (!$questionRecord){
            $questionRecord = new QuestionRecord();
        }

        $questionRecord->userId = $questionModel->userId;
        $questionRecord->questionId = $questionModel->questionId;
    	$questionRecord->value = $questionModel->value;
        $questionRecord->hereFor = $questionModel->hereFor;
        $questionRecord->textValue = $questionModel->textValue;
        $questionRecord->period = $questionModel->period;
        $questionRecord->dateAnswered = $questionModel->dateAnswered;
        
        
        return $questionRecord->save();

    }

    public function getCurrentMoodScore($userId, $questionId)
    {
        $moodScoreRecord = MoodScoreRecord::find()
                    ->where(['userId' => $userId, 'questionId' => $questionId])
                    ->one();

        return $moodScoreRecord;

    }

    
    public function getQuestionToUpdate($userId, $questionId, $dateAnswered, $period)
    {
        $moodScoreRecord = QuestionRecord::find()
                    ->where(['userId' => $userId, 'questionId' => $questionId, 'dateAnswered' => $dateAnswered, 'period' => $period])
                    ->one();

        return $moodScoreRecord;

    }

    public function getAllMoodScores($userId, $hereFor, $month){

        $moodScoreRecord = QuestionRecord::find()
                            ->where(['userId' => $userId]);

        if ($month){
            $nextMonth = new \DateTime($month);
            $nextMonth->add(new \DateInterval('P1M'));

            $moodScoreRecord->andWhere(['>=', 'dateCreated', $month .'-01']);
            $moodScoreRecord->andWhere(['<', 'dateCreated', $nextMonth->format('Y-m-d')]);
        }

        $moodScoreRecord->andWhere(['<>', 'value', '0']);

        return $moodScoreRecord->all();
    }

    public function getMoodQuestions(){
        
        $allQuestions = Array();

        $questions = Entry::find()
                        ->where(['slug' => 'questions-self'])
                        ->one();


        foreach ($questions->profileQuestions as $question){ 
           array_push($allQuestions, $question);
        }

        return $allQuestions;
    }
}
