'use strict';
(function(window, document, $){
	function init(){

		var $container = $('.module-block[data-modules="feature-block-collapsible"] .module-collapsible__container');
		$container.addClass('hide-collapsible');

		$container.find('.module-collapsible__link').on('click', function(){
			$(this).parents('.module-collapsible__container').toggleClass('hide-collapsible');
		});

	}

	opad.addToJsModules({
		name: "feature-block-collapsible", 
		fn: init
	});

})(window, document, jQuery);
