'use strict';
(function(window, document, $){

	var userOptions = {};
	var userDefinedOptionsField;

	function init(){
		
		initForm();

		initUserDefinedOptions();
	}

	function initForm(){
		// Initialise edit details buttons
		$('.profile-dashboard__edit-button').on('click', function(){
			$(this).parents('.profile-dashboard__details__item').toggleClass("profile-dashboard__details__item--edit");
		});


		$('.profile-dashboard__input--autoupdate').on('change', function(){

			var $form = $(this).parents('.profile-dashboard__details-form'),
				data = $form.serialize(),
				$this = $(this),
				$container = $this.parents('.profile-dashboard__category'),
				catId = this.value,
				hereFor = $('.profile-dashboard__input--herefor:checked').first().attr('value');

				if ($this.parents('.profile-dashboard__details__item--edit').length == 0){
					return;
				}

				// Show/hide relevant category when not in edit mode
				if (this.checked){
					$container.addClass('profile-dashboard__mycategory')
						.removeClass('profile-dashboard__notmycategory');

					$('.profile-dashboard-module-list__item a').each(function(){
						var $this = $(this);

						if ( $this.attr('data-cats') && $this.attr('data-cats').indexOf(',' + catId + ',') > -1 ){
							$this.addClass('profile-dashboard-module-highlight-' + hereFor);
						}
					});

				} else {
					$container.addClass('profile-dashboard__notmycategory')
						.removeClass('profile-dashboard__mycategory');

					$('.profile-dashboard-module-highlight-' + hereFor).each(function(){
						var $this = $(this);

						if ( $this.attr('data-cats') && $this.attr('data-cats').indexOf(',' + catId + ',') > -1 ){
							$this.removeClass('profile-dashboard-module-highlight-' + hereFor);
						}
					});
				}

				$.ajax({
					type: 	$form.attr('method'),
					data: 	data
				})


		});
	}

	function initUserDefinedOptions(){

		var $container = $('#profileDashboardContainer');
		userDefinedOptionsField = document.getElementById('userDefinedOptionsField');
		
		try{
			userOptions = JSON.parse(userDefinedOptionsField.value);
		}catch(e){}

		$.each(userOptions, function(key, options){
			$.each(options, function(index, option){
				try{
					addUserOptionToPage(option, $('#List' + key));
				}catch(e){}
			});
		});

		$container.delegate('.feature-block-option-mylist-delete', 'click', deleteUserOption)
			.delegate('.feature-block-option-mylist-add', 'click', addUserOption);
		
	}


	function saveUserData($this){
		var $form = $this.parents('.profile-dashboard__details-form'),
		data = $form.serialize();

		$.ajax({
			type: 	$form.attr('method'),
			data: 	data
		})
	}

	function addUserOptionToPage(option, $container){

		var optionEl = opad.templates.featureBlockOption({
			option: option
		});
		$container.removeClass('hide').find('.feature-block-option-mylist--empty').before(optionEl);
		$container.parents('.profile-dashboard__details__item').find('.profile-dashboard__no-category-msg').addClass('hide');
	}

	function addUserOption(e){
		var $this = $(this);
		var $item = $this.parents('.profile-dashboard__new-item');
		var catId = $this.parents('.profile-dashboard__details__item-container').attr('id');
		var entry = $item.find('.feature-block-option-mylist-input').first().val() ;

		e.stopPropagation();
		e.preventDefault();

		addUserOptionToPage({ text: entry}, $('#List' + catId));

		if (!userOptions[catId]){
			userOptions[catId] = [];
		}
		userOptions[catId].push({ text: entry});
		userDefinedOptionsField.value = JSON.stringify(userOptions);
		saveUserData($this);
	}

	function deleteUserOption(e){

		var $this = $(this);
		var $item = $this.parents('.feature-block-option-mylist__item');
		var catId = $this.parents('.profile-dashboard__details__item-container').attr('id');
		var entry = JSON.parse($item.find('.feature-block-option-mylist-item__value').attr('data-json'));

		e.stopPropagation();
		e.preventDefault();
		
		// Remove from user options

		$.each(userOptions[catId], function(index, option){
			if (option && option.text == entry.text){
				userOptions[catId].splice(index,1);
			}

		})
		userDefinedOptionsField.value = JSON.stringify(userOptions);

		saveUserData($this);

		$item.remove();
	}

	opad.addToJsModules({
		name: "my-answers", 
		fn: init
	});

})(window, document, jQuery);
