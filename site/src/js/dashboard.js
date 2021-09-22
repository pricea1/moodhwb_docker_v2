'use strict';
(function(window, document, $){



	function init(){

		// Initialise any form upload buttons
		var fileElem = document.getElementById("fileElem"),
			$fileElem = $(fileElem),
			profileImageForm = document.getElementById("profileImageForm");
			

		$fileElem.on('change', function(e){
			$('.profile-dashboard__photo-upload__button-txt').addClass('hide');
			$('.profile-dashboard__photo-msg').removeClass('hide');
			profileImageForm.submit();
		});

		$(fileElem).attr('name', 'userPhoto');

		$("#fileSelect").on("click touchstart", function(e) {

			e.stopPropagation();

			if ($fileElem) {
				$fileElem.trigger('click');
			}
			
		//	e.preventDefault(); // prevent navigation to "#"
		});
	

	

		



		initMoodList();

		initRecommendations();

		showContinueModal();
	
		craftEventTracker.sendEvent({
			interactionId: 			'view',
			interactionCategory: 	'dashboard'
		});

	}

	function showContinueModal(){
		$('#continueModal').foundation('reveal', 'open');
	}

	function initMoodList(){
		var moodListContainer = document.getElementById('profileDashboardMoodScrollContainer');
		var	moodListEl = document.getElementById('profileDashboardMoodList');
		var moodItems = moodListEl.children;


		//Initialise Mood list scroll so its full width and scrolled to the middle

		var moodItemsWidth = 0;
		for (var i=0; i < moodItems.length; i++){
			moodItemsWidth += moodItems[i].clientWidth;
		}

		$(moodListEl).width( moodItemsWidth ).addClass('profile-dashboard-mood-list--show');
		moodListContainer.scrollLeft = (moodListEl.clientWidth - moodListContainer.clientWidth)/2;
	}


	function initRecommendations(){
		var request = {
			plugin: "moduleactions",
			controller: "default",
			action: "get-recommended-modules"
		}

		function success(res){

			for (var i=0; i < res.hereForSelf.length; i++){

				$("#submodule-" + res.hereForSelf[i] + " a").addClass("profile-dashboard-module-highlight-self");
			}

			for (var i=0; i < res.hereForOther.length; i++){

				$("#submodule-" + res.hereForOther[i] + " a").addClass("profile-dashboard-module-highlight-other");
			}


		}

		function error(err){

		}

		opad.postActionRequest(request, {}, success, error);

	}

	

	function scrollIntoView($el){

		var offset = $el.offset(); 
		$('html, body').animate({
		    scrollTop: offset.top
		}, 250); 
	}

	opad.addToJsModules({
		name: "dashboard", 
		fn: init
	});

})(window, document, jQuery);