'use strict';
(function(window, document, $){
	
	var $overlay,
	myYesCb,
	myNoCb;

	function init(){
		
		$overlay = $('#saveProfileOverlay');

		$('#modalSaveProfileButtonYes').on('click', function(){
			$overlay.removeClass('not-answered');
			closeModal();
			if (typeof myYesCb == "function"){
				myYesCb(true);
			}
		});

		$('#modalSaveProfileButtonNo').on('click', function(){
			closeModal();
			if (typeof myNoCb == "function"){
				myNoCb();
			}
		});

	}

	function openModal(selector, yesCb, noCb){
		myYesCb = yesCb;
		myNoCb = noCb;

		$(selector).first().foundation('reveal', 'open');
	}

	function closeModal(){
		$overlay.first().foundation('reveal', 'close');
	}

	opad.modal = {};
	opad.modal.openModal = openModal;
	opad.modal.closeModal = closeModal;

	opad.addToJsModules({
		name: "feature-block-save-profile-modal", 
		fn: init
	});

})(window, document, jQuery);
