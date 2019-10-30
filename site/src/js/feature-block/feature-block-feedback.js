'use strict';
(function(window, document, $){
	function init(){

		$('#featureBlockFeebackForm').on('submit', function(ev){
			// Override form submission with AJAX call
			ev.preventDefault();
			var $this = $(this);
			var formData = $this.serialize();

			$.ajax({
				url: "",
				type: "POST",
				data: formData,
				success: function(data, status){
					$this.addClass('form-submitted');
				},
				error: function(err){
					// Error saving -- notify user?
					$this.addClass('form-submitted');
				}
			});

		})

	}

	opad.addToJsModules({
		name: "feature-block-feedback", 
		fn: init
	});

})(window, document, jQuery);
