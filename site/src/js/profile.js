'use strict';
(function(window, document, $){

	function init(){
		
		var sliderViewed = window.localStorage.getItem('sliderViewed');
		if (!sliderViewed){
			$('.range-slider-handle--hint-container.hide').removeClass('hide');
		}

		setTimeout( function(){

			$('[data-slider]').on('change.fndtn.slider', function(ev){
				// Update slider handle content with value
				var $this = $(this);
		    	var value = Math.floor($this.attr('data-slider')/100);	
		    	var $questionContainer =  $this.parents('.slick-active');   	
		    	$this.find('.range-slider-handle').attr('data-content', value);

		    	// Change icon
		    	$questionContainer.find('.show-icon').removeClass('show-icon');
			    $questionContainer.find('.svg-face-' + value).addClass('show-icon');
			    $questionContainer.find('.svg-container').attr('data-mood-value', value);

				if ( $this.attr('data-slider') !=  $this.attr('data-initial') && $('.range-slider-handle--hint-container.hide').length == 0){

				    window.localStorage.setItem('sliderViewed', 'true');
				    $('.range-slider-handle--hint-container').addClass('hide');					
				}

			})
			.on('click', function(ev){
				/* Set range value to closes step value */
				if( ev.target != this ) {
			       return;
				}

				ev.stopImmediatePropagation();
				/* Find number of steps in range */
				// data-options attribute will be in the form of start: 1; end: 7;
				var $this = $(this);
				var dataOptionsStr = $this.attr('data-options');
				var dataOptionsArr = dataOptionsStr.split(';');
				var dataOptionArr;
				var rangeStart, rangeEnd;
				var rangeWidth = $this.width();
				var i, scale, value;

				for (i = 0; i < dataOptionsArr.length; i++){
					dataOptionArr = dataOptionsArr[i].split(':');

					switch (dataOptionArr[0].trim().toLowerCase()){
						case "start":
							rangeStart = parseInt(dataOptionArr[1]);
						break;

						case "end":
							rangeEnd = parseInt(dataOptionArr[1]);
						break;
					}
				}

	 			scale = ev.offsetX/$this.width();

	 			value = (( rangeEnd - rangeStart) * scale) + rangeStart;


				$this.foundation('slider', 'set_value', value);
				
			})

		}, 1000);

		$('.slick-carousel-container')
			.on('beforeChange', questionChange)
			.on('afterChange', checkQuestionEnd)


	}



	function questionChange(T, slick, currentSlide, nextSlide, overrideSuccessCB){
		var $slide = $(slick.$slides[currentSlide]);
		var questionId = $slide.find('.profile-question-questionid').val();
		var questionType = $slide.find('.profile-question-type').val();
		var questionValue = $slide.find('.profile-question-value').val();
		var rangeValue = Math.floor( $slide.find('[data-slider]').attr('data-slider') / 100);
		var $categoryInputs = $slide.find('.profile-user-options__input');
		var categoryList = Array();
		var request, data;

		var slideNum = currentSlide + 1;


		if (typeof nextSlide !== "undefined"){
			$('.profile-question_progress-indicator').html(slideNum + nextSlide - currentSlide);
		}

		if (opad.skipMoodSave){ 
			rangeValue = 0;
/*
			if(typeof overrideSuccessCB == "function"){
				overrideSuccessCB();
				return;
			} else {
				return;
			}
*/
		}		

		for (var i = 0; i < $categoryInputs.length; i++){
			if ($categoryInputs[i].checked){
				categoryList.push($categoryInputs[i].value);				
			}
		}

		request = {
			plugin: "profiler",
			controller: "question",
			action: "saveQuestion"
		}

		data = {
			profileQuestionType: questionType,
			profileQuestionId: questionId,
			profileQuestionAnswer: (rangeValue)? rangeValue : 0,
			profileQuestionValue: questionValue,
			profileQuestionCategories: categoryList,
			profileQuestionIndex: currentSlide
		}

		function successCB(res){

		}

		function errorCB(err){

		}

		opad.postActionRequest(request, data, overrideSuccessCB || successCB, errorCB);


		craftEventTracker.sendEvent({
			interactionId: 			'mood-answer',
			interactionCategory: 	'mood',
			parameter1: 			data.profileQuestionId,
			parameter2: 			data.profileQuestionAnswer
		});
	}

	function checkQuestionEnd(event, slick, currentSlide, nextSlide){

		var isEndOfQuestions = (currentSlide == slick.$slides.length - 1);

		function endOfQuestions(ev){
			// Use redirect callback on last question
			var redirectUri = $('#profileQuestionRedirect').attr('data-uri');

			craftEventTracker.sendEvent({
				interactionId: 			'mood-complete',
				interactionCategory: 	'mood'
			});
			questionChange(event, slick, currentSlide, nextSlide, function(){
				window.location.href = redirectUri;				
			});
		}

		$('.profile-question-container').undelegate('.slick-next', 'click');
		if (isEndOfQuestions){


			// Last slide being viewed so get click event so we can redirect
			$('#nextArrowButton').html( $('#nextArrowButton').attr('data-endtext'));
			$('.slick-next').on('click', endOfQuestions);
			$('.slick-skip').on('click', endOfQuestions);
		}
	}


	opad.addToJsModules({
		name: "profile", 
		fn: init
	});

//	opad.addToInitQueue(init);

})(window, document, jQuery);