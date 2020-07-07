'use strict';
(function(window, document, $){

	function init(){

		$('#profileGoalForm').submit( function(ev){

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
		//	data.id = "placeholder";
			data.isTodo = true;
			data.timesCompleted = 0;
			data.status = "todo";
			data.type = "weekly";

			data.timesLeft = data.timesPerWeek - data.timesCompleted;



			// Add item to goal lists quickly before repopulating after AJAX call
			var newToDoItem = opad.templates.profileGoalItemToDo({
				goal: data
			});
			$('.profile-goals__list--todo').prepend(newToDoItem);

			var newCompletedItem = opad.templates.profileGoalItemCompleted({
				goal: data
			});
			$('.profile-goals__list--completed').prepend(newCompletedItem);


			showWelcomeMsg(false);
			showAllTodoDoneMsg(false);

			opad.postActionRequest(request, data, successCB, errorCB);

		})

		function successCB(res){


			// Update placeholder details with returned data from server
			$('.profile-goals__list-item[data-goal-id="placeholder"]').attr('data-goal-id', res.id)
				.find('a')
				.each(function(){

					var $this = $(this);
					var href = $this.attr('href');
					href = href.replace('placeholder', res.id);
					$this.attr('href', href);
				})

			craftEventTracker.sendEvent({
				interactionId: 			'profile-goal-add',
				interactionCategory: 	'profile',
				parameter1: 			res.userId,
				parameter2: 			res.activity
			});

		}

		function errorCB(){

		}



		$('.profile-goals__list').delegate('.profile-goal__action-link', 'click', function(ev){

			var $this = $(this),
				hasCompleted,
				status,
				timesCompleted = 0,
				goalId;

			ev.preventDefault();

			goalId = $this.parents('[data-goal-id]').attr('data-goal-id');
			status = $this.parents('[data-goal-id]').attr('data-status')
			// Assume save is ok and change item on list immediately so user isn't waiting on JSON response.
			// If problem with API call then success/fail of API call will change item

			switch ($this.attr('data-goal-action')){

			case "delete":
				status = "deleted";

				// Check if last item and show welcome msg again if no items
				if ($('.profile-goals__list--todo .profile-goals__list-item').length == 1){
					showWelcomeMsg(true);
				}

				break;

			case "complete":
				$this.attr('data-times-completed', parseInt($this.attr('data-times-completed'))+1 );
				hasCompleted = (parseInt($this.attr('data-times-per-week')) == parseInt($this.attr('data-times-completed')) );
				timesCompleted = $this.attr('data-times-completed');
				status =  hasCompleted? 'completed' : status;
				break;

			case "undo":
				timesCompleted = 0;
				status = "todo";
				showAllTodoDoneMsg(false);
				break;

			}

			if (status){
				successGoalEdit(
					{	id: goalId,
						status: status,
						timesCompleted: timesCompleted,
						timesPerWeek: $this.attr('data-times-per-week')
					}
				)
			}


			$.get($this.attr('href'))
//				.done(successGoalEdit)  // No need for done event as optimistically changing completed. Only need to change on server fail
				.fail(failGoalEdit);

		})

	}


	function successGoalEdit(res){

		var $goalEl = $('.profile-goals__list-item[data-goal-id="' + res.id + '"]');

		$goalEl.attr('data-status', res.status)
			.find('.profile-goal__action-link').attr('data-times-completed', res.timesCompleted);

		var timesCompleted = ( res.timesPerWeek == res.timesCompleted)? res.timesPerWeek : res.timesPerWeek - res.timesCompleted;
		$goalEl.find('.profile-goals__times-completed').text(timesCompleted);

		// Check if all goals done
		if ($('.profile-goals__list--todo .profile-goals__list-item[data-status="todo"]').length == 0){
			showAllTodoDoneMsg(true);
		}

		craftEventTracker.sendEvent({
			interactionId: 			'profile-goal-' + res.status,
			interactionCategory: 	'profile',
			parameter1: 			res.userId,
			parameter2: 			res.activity
		});

	}

	function failGoalEdit(res){
		// Need to feedback to user somehow that there was an error saving
		successGoalEdit(res);
	}

	function showWelcomeMsg(show){
		if (show){
			$('.profile-goals__welcome-msg').removeClass('hide');
			$('.profile-goals__list-container').addClass('hide');
			$('.profile-goals-subheading-container').addClass('hide');

		} else {
			$('.profile-goals__welcome-msg').addClass('hide');
			$('.profile-goals__list-container').removeClass('hide');
			$('.profile-goals-subheading-container').removeClass('hide');

		}
	}

	function showAllTodoDoneMsg (show) {
		return;
		if (show){
			$('.profile-goals__todo-done').removeClass('hide');
			$('.profile-goals__todo-list').addClass('hide');
		} else {
			$('.profile-goals__todo-done').addClass('hide');
			$('.profile-goals__todo-list').removeClass('hide');

		}
	}

	opad.addToJsModules({
		name: "profile-goals",
		fn: init
	});

})(window, document, jQuery);
