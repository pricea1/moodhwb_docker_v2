"use strict";
(function(window, document, $) {
  var endScrollTimeout, scrollTimeout;
  var moduleViewTime = 1000; // Minimum time a module must be viewed before registering a view event

  function init() {
    var $firstSubmodule;

    //opad.getSubmoduleStatus();
    $(".module-nav__row--current").on("click", function(ev) {
      ev.preventDefault();
      $(this)
        .parents(".module-nav")
        .toggleClass("module-nav--closed");
    });

    $("#moduleNav a").on("click", function(ev) {
      // Stop event bubbling from click nav link so menu doesn't close
      ev.stopPropagation();
    });

    if (
      typeof opadVideoEl != "undefined" &&
      $("#" + opadVideoEl).length &&
      opadVideoUrl_hls
    ) {
      var playerInstance = jwplayer(opadVideoEl);
      playerInstance.setup({
        height: "100%",
        aspectratio: "16:9",

        playlist: [
          {
            image: opadVideoImage,
            sources: [
              {
                file: opadVideoUrl_hls
              },
              {
                file: opadVideoUrl_mp4
              }
            ]
          }
        ]
        //			    primary: "flash"
      });
    }

    doSaveModuleStatus(
      window.craftSettings.entry.id,
      "viewed",
      window.craftSettings.entry.uri
    );
    ga("send", "pageview", window.craftSettings.entry.uri);
    craftEventTracker.sendEvent({
      interactionId: "view",
      interactionCategory: "module",
      parameter1: window.craftSettings.entry.uri
    });

    picturefill();
    if (!Modernizr.csscolumns) {
      $(".two-columns").columnize({
        cssClassPrefix: "columnizer",
        columns: 2
      });

      $(".three-columns").columnize({
        cssClassPrefix: "columnizer",
        columns: 3
      });
    }

    // Scroll to reqeusted submodule if applicable
    /*
		if (window.location.hash){
			$('html, body').animate({
		        scrollTop: $("a[name='" + window.location.hash.replace('#','') + "']").offset().top
		    }, 1000);
		}
*/
    initModuleNav();

    initRecommendations();
  }

  function initModuleNav() {
    var isPrevious = true;
    $(".module-nav__list--level2 .module-nav__row").each(function() {
      var $navRow = $(this);

      if ($navRow.hasClass("module-nav__row--current")) {
        isPrevious = false;
        $navRow.attr("data-status", "current");
      }

      if (isPrevious) {
        $navRow.attr("data-status", "viewed");
      }
    });
  }

  function initRecommendations() {
    var request = {
      plugin: "moduleactions",
      controller: "default",
      action: "get-recommended-modules"
    };

    function success(res) {
      console.log(res);
      var highlightList =
        window.craftSettings.user.hereFor == "self"
          ? res.hereForSelf
          : res.hereForOther;

      for (var i = 0; i < highlightList.length; i++) {
        $(
          '.module-nav__list--level2 .module-nav__row[data-page-id="' +
            highlightList[i] +
            '"]'
        ).addClass("module-nav__row--highlight");
      }
    }

    function error(err) {}

    opad.postActionRequest(request, {}, success, error);
  }

  function doSaveModuleStatus(submoduleId, status, uri) {
    var request = {
      plugin: "moduleactions",
      controller: "default",
      action: "save-module-view"
    };

    var data = {
      submoduleId: submoduleId,
      status: status
    };

    opad.postActionRequest(request, data);

    // Register event on bespoke analytics
    craftEventTracker.sendEvent({
      interactionId: "sub-module-view",
      interactionCategory: "module",
      parameter1: uri
    });
  }

  opad.addToJsModules({
    name: "module",
    fn: init
  });

  //	opad.addToInitQueue(init);
})(window, document, jQuery);
