'use strict';
(function(window, document, $){

	function init(){
		var $prevArrow = $('#prevArrowButton');
		var $nextArrow = $('#nextArrowButton');
		var $slickContainer = $('.slick-carousel-container');

		$slickContainer.slick({
				infinite: false,
				speed: 500,
				draggable: false,
				swipe: false,
				prevArrow: false,
				nextArrow: false,
				adaptiveHeight: true
      		})

		$prevArrow.on('click', function(ev){
			// If not on first slide then go back to previous
			// otherwise follow links href
			if ( $slickContainer.slick('slickCurrentSlide') !== 0){
				ev.preventDefault();
				$slickContainer.attr('data-save',  false);
				$slickContainer.slick('slickPrev');				
			}

		});

		$nextArrow.on('click', function(ev){
			ev.preventDefault();
			opad.skipMoodSave = false;
			$slickContainer.slick('slickNext');
		});

		$('#skipStep').on('click', function(ev){
			ev.preventDefault();
			opad.skipMoodSave = true;
			$slickContainer.slick('slickNext');
		})

		$('.user-category-input').on('click', function(){
			$slickContainer.slick('animateHeight');
		})
	}

	opad.addToJsModules({
		name: "slick-carousel", 
		fn: init
	});

})(window, document, jQuery);
