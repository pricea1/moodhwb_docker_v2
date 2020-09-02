'use strict';
(function(window, document, $){
	function init(){

		$('.four-image-click-to-open-sub-item').on('click', function(){
			var $this = $(this);

			$('.content-block-click-to-open--text__open').removeClass('content-block-click-to-open--text__open');
			$('.four-image-click-to-open-sub-item__open').removeClass('four-image-click-to-open-sub-item__open');

			$('#contentBlockClickToOpen-' + $this.attr('data-click-to-open-id') ).addClass('content-block-click-to-open--text__open');
			$this.addClass('four-image-click-to-open-sub-item__open');
		});

	}

	opad.addToJsModules({
		name: "four-image-click-to-open", 
		fn: init
	});

})(window, document, jQuery);
