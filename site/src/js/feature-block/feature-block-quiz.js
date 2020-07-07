'use strict';
(function(window, document, $){

	var questionAnswered = false;

	function init(){

		var questionAnswered = false;

		if ($('.feature-block-quiz').length ==0){
			return;
		}
		
		$('.slick-carousel-container').slick('slickSetOption', 'arrows', false, true);

		$('.feature-block-button').on('click', function(){
			questionChosen(this);
		});

	}

	function questionChosen(button, forceAnswer){
		var $this = $(button);
			var correctAnswer = $this.parent().hasClass('feature-block-quiz-answer-correct');
			var $quizContainer = $this.parents('.feature-block-quiz-question-container');

			if (questionAnswered && !forceAnswer){
				return;
			}
			questionAnswered = true;

			$quizContainer.addClass('feature-block-quiz-answered')
				.find('.feature-block-quiz-chosen-answer')
				.removeClass('feature-block-quiz-chosen-answer');

			$this.addClass('feature-block-quiz-chosen-answer');

		if (!correctAnswer){
			setTimeout(function(){
				questionChosen($quizContainer.find('.feature-block-quiz-answer-correct .feature-block-button'), true );
			}, 700);

		} else {
			setTimeout(function(){
				// go to next slide
				$quizContainer.removeClass('.feature-block-quiz-answered')
					.parents('.slick-carousel-container').slick('slickNext');
				
				questionAnswered = false;
			}, 1500);

			}
	}


	opad.addToJsModules({
		name: "feature-block-quiz", 
		fn: init
	});

})(window, document, jQuery);
