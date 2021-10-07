'use strict';
(function(window, document, $){

	var userOptions, userOptionsOther;

	function init(){
		var initialSettings;

		$('.feature-block-option-mylist-add').on('click', addUserOption);
		$('.feature-block-option-mylist-input-button-user').on('click', saveUserOptions);

		$('.feature-block-option-mylist-input').on('change', function(){

			var $container = $(this).parents('.feature-block-option-mylist-container');

			// Only auto submit on change if no url input field is present
			if ($container.find('.feature-block-option-mylist-input-url').length == 0){
				addUserOption.call(this);
			}

		});

		$('.profile-user-options__input').on('change', function(){
			saveOptions(this);
		});

		$('.feature-block-option-mylist').delegate('.feature-block-option-mylist-delete', 'click', deleteUserOption);	
		// Initialise user options
		$('.feature-block-option-mylist').each(function(index, el){
			var $listData = $(el);
			var $container = $('#' + $listData.attr('data-container'));
			var userType =  $listData.attr('data-user-type');

			 if (!$listData.attr('data-json')){
			 	return;
			 }


				userOptions = userOptions || JSON.parse($listData.attr('data-json'));


				if (userOptions && typeof userOptions[$listData.attr('id')] != 'undefined'){
					userOptions[$listData.attr('id')].forEach(function(item){
						addUserOptionToPage(item, $container);				
					})				
				}

		});
	}

	function saveUserOptions(formEl){
		var $form = $(this).parents('form');

		var title = $form.find('#enterUserCategory').val();
		var url = $form.find('#enterUserUrl').val();

		if (!title || !url){
			return;
		}
		
		var params = {
			title,
			url
		}

		$.ajax({
			url: "/actions/profiler/stuff-i-like/add-stuff-i-like",
			type: "POST",
			data: params,
			success: function(data, status){
			},
			error: function(err){
				// Error saving -- notify user?
			}
		});	
		$form.find('#enterUserCategory').val('');
		$form.find('#enterUserUrl').val('');
		
		return false;
	}

	function saveOptions(formEl, profileAgreed){

		var $form = $($(formEl).parents('form'));

		var $profileQuestionId = $form.find('input[name="profileQuestionId"]');
		var formType = $profileQuestionId.val();
		var params;

		if (formType === "resource"){
			if ( formEl.checked){

				params = {
						title:formEl.dataset.title,
						url : formEl.dataset.url
				}

				$.ajax({
					url: "/actions/profiler/stuff-i-like/add-stuff-i-like",
					type: "POST",
					data: params,
					success: function(data, status){
					},
					error: function(err){
						// Error saving -- notify user?
					}
				});	
			}

			 
		} else {
			var formData = $form.serializeArray();
			
			$.ajax({
				url: "/actions/profiler/question/save-question",
				type: "POST",
				data: formData,
				success: function(data, status){

				},
				error: function(err){
					// Error saving -- notify user?
				}
			});	
		}

	}

	function deleteUserOption(){

		var $this = $(this);
		var $container = $(this).parents('.feature-block-option-mylist-container');
		var userType =  $container.attr('data-user-type');
		var $list = $( $this.parents('.feature-block-option-mylist') );
		var optionsList = [];

		$this.parents('.feature-block-option-mylist__item').remove();

		$list.find('.feature-block-option-mylist-item__value').each(function(index, item){
			optionsList.push( JSON.parse( $(item).attr('data-json')) );
		});

		if (optionsList.length == 0){
//			$list.addClass('hide');
			$list.find('.feature-block-option-mylist.hide').removeClass('hide');
		}


		if (userType == "other"){
			userOptionsOther[ $list.attr('data-cat') ] = optionsList;

		} else {
			userOptions[ $list.attr('data-cat') ] = optionsList;
		}

		saveOptions($list);
	}


	function addUserOption(){

		var $container = $(this).parents('.feature-block-option-mylist-container');
		var newOptionInput = $container.find('.feature-block-option-mylist-input');
		var newOptionUrl = $container.find('.feature-block-option-mylist-input-url');
		var listId = $container.find('.feature-block-option-mylist').removeClass('hide').attr('id');
		var optionJson = {};
		var userType =  $container.attr('data-user-type');

		if (newOptionInput.val()){

			optionJson.text = newOptionInput.val();
			if (newOptionUrl.length > 0){
				optionJson.url = newOptionUrl.val();
			}

			addUserOptionToPage(optionJson, $container);

			if (userOptions && typeof userOptions[listId] == "undefined"){
				userOptions[listId] = [];
			}

			if (userOptionsOther && typeof userOptionsOther[listId] == "undefined"){
				userOptionsOther[listId] = [];
			}

			if (userType == "other"){
				userOptionsOther[listId].push(optionJson);

			} else {
				userOptions[listId].push(optionJson);
			}

			newOptionInput.val('');
			if (newOptionUrl.length > 0){
				newOptionUrl.val('');
			}


		}

		$container.parents('.profile-dashboard__details__item').find('.profile-dashboard__no-category-msg').addClass('hide');

		saveOptions(this);
	}

	function addUserOptionToPage(option, $container){

		var optionEl = opad.templates.featureBlockOption({
			option: option
		});
		
		$container.find('.feature-block-option-mylist').removeClass('hide').append(optionEl);
	}

	function removeUserOption(){

	}


	opad.addToJsModules({
		name: "feature-block-options", 
		fn: init
	});

})(window, document, jQuery);
