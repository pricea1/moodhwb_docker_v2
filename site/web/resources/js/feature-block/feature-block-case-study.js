'use strict';
(function(window, document, $){
	function init(){

		$('.feature-block-case-study-container').addClass('module-nav--closed');
		$('.feature-block-case-study-link').addClass('nav-arrow--closed');

		$('.feature-block-case-study-link').on('click', function(){
			var $this = $(this);

			$('.feature-block-case-study-link').toggleClass('nav-arrow--closed');

			$this.parents('.feature-block-case-study-container').toggleClass('module-nav--closed');
		});

	}

	opad.addToJsModules({
		name: "feature-block-case-study", 
		fn: init
	});

})(window, document, jQuery);
