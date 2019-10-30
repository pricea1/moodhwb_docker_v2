'use strict';
(function(window, document, $){

	function init(){

		// Initialise profile details dropdown menu
		$('#profileDashboardHeading').addClass('nav-arrow--closed')
			.on('click', function(){
				$('#profileDashboardContainer').toggleClass('profile-dashboard__details__show');
				$('#profileDashboardHeading').toggleClass('nav-arrow--closed');
		});


		$('#profileStuffILikeForm').submit( function(ev){

			// Override form submission with AJAX call
			ev.preventDefault();

			var $this = $(this);
			var action = $this.find('[name="action"]').attr('value').split('/');
			var inputs = $this.find('[name]');


			var request = {
				plugin: action[0],
				controller: action[1],
				action: action[2]
			}

			var data = {};

			var $input;

			// Create data object for AJAX from form inputs
			for (var i = 0; i < inputs.length; i++){
				$input = $(inputs[i]);

				if ($input.attr('name') !== "action"){
					data[$input.attr('name')] = $input.val();
				}
			}

			// Add default goal data
			data.id = "placeholder";

			// Add item to goal lists quickly before repopulating after AJAX call
			var newItem = opad.templates.profileStuffILikeItem({
				stuffILike: data
			});
			$('.profile-stuff-i-like__list').append(newItem);


			showWelcomeMsg(false);

			opad.postActionRequest(request, data, successCB, errorCB);


		})

		function successCB(res){
			// Update URL as server might have changed it to add http://
			if (res.url){
				$('.profile-stuff-i-like__list-item[data-stuff-i-like-id="placeholder"] .profile-stuff-i-like__user-link')
					.attr('href', res.url);
			}

			// Add Category CSS class icons
			if (res.categoryCssClass){
				$('.profile-stuff-i-like__list-item[data-stuff-i-like-id="placeholder"] .profile-stuff-i-like-icon')
					.addClass(res.categoryCssClass);
			}

			// Update placeholder details with returned data from server
			$('.profile-stuff-i-like__list-item[data-stuff-i-like-id="placeholder"]').attr('data-stuff-i-like-id', res.id)
				.find('.profile-stuff-i-like__action-link')
				.each(function(){

					var $this = $(this);
					var href = $this.attr('href');
					href = href.replace('placeholder', res.id);
					$this.attr('href', href);
				})

			craftEventTracker.sendEvent({
				interactionId: 			'profile-stuff-i-like-add' ,
				interactionCategory: 	'profile',
				parameter1: 			res.userId,
				parameter2: 			res.title
			});
		}

		function errorCB(){

		}



		$('.profile-stuff-i-like__list').delegate('.profile-stuff-i-like__action-link', 'click', function(ev){

			var $this = $(this),
				hasCompleted,
				status,
				timesCompleted = 0,
				stuffILikeId;

			ev.preventDefault();


			stuffILikeId = $this.parents('[data-stuff-i-like-id]').attr('data-stuff-i-like-id');

			// Assume save is ok and change item on list immediately so user isn't waiting on JSON response.
			// If problem with API call then success/fail of API call will change item

			switch ($this.attr('data-stuff-i-like-action')){

			case "delete":
				status = "deleted";

				// Check if last item and show welcome msg again if no items
				if ($('.profile-stuff-i-like__list .profile-stuff-i-like__list-item[data-status != "deleted"]').length == 1){
					showWelcomeMsg(true);
				}
				break;

			}

			if (status){
				successGoalEdit(
					{	id: stuffILikeId,
						status: status
					}
				)
			}


			$.get($this.attr('href'))
				.done(successGoalEdit)
				.fail(failGoalEdit);

		})

	}


	function successGoalEdit(res){

		var $stuffILikeId = $('.profile-stuff-i-like__list-item[data-stuff-i-like-id="' + res.id + '"]');

		if (res.status){
			$stuffILikeId.attr('data-status', res.status);


			craftEventTracker.sendEvent({
				interactionId: 			'profile-stuff-i-like-' + res.status,
				interactionCategory: 	'profile',
				parameter1: 			res.userId,
				parameter2: 			res.title
			});
		}
	}

	function failGoalEdit(res){
		// Need to feedback to user somehow that there was an error saving
		successGoalEdit(res);
	}

	function showWelcomeMsg(show){
		if (show){
			$('.profile-goals__welcome-msg').removeClass('hide');
			$('.profile-stuff-i-like__list-container').addClass('hide');
		} else {
			$('.profile-goals__welcome-msg').addClass('hide');
			$('.profile-stuff-i-like__list-container').removeClass('hide');
		}
	}


	opad.addToJsModules({
		name: "profile-stuff-i-like",
		fn: init
	});

})(window, document, jQuery);
