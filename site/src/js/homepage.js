'use strict';
(function(window, document, $){



	function init(){

		initRecommendations();
	
		craftEventTracker.sendEvent({
			interactionId: 			'view',
			interactionCategory: 	'homepage'
		});

	}

	function initRecommendations(){
		var request = {
			plugin: "moduleactions",
			controller: "default",
			action: "get-recommended-modules-summary"
		}

		function success(res){

			var recommendations = Object.entries(res);

			for (var i=0; i < recommendations.length; i++){
				if(recommendations[i][1].length){
					$("#moduleRecommendedCounter-" + recommendations[i][0]).text(recommendations[i][1].length);
					$("#moduleRecommendedCounterContainer-" + recommendations[i][0]).addClass('show');

				}
			}

		}

		function error(err){

		}

		opad.postActionRequest(request, {}, success, error);

	}

	opad.addToJsModules({
		name: "homepage", 
		fn: init
	});

})(window, document, jQuery);