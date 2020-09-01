"use strict";
(function(window, document, $) {
  window.opad = window.opad || {};

  var initQ = [];
  var jsModules = [];

  opad.init = function() {
    // Initialise components
    for (var i = 0; i < initQ.length; i++) {
      if (typeof initQ[i] === "function") {
        initQ[i]();
      }
    }
    $("#hideThisLink").on("click", hideThis);

    $(".search-toggle").on("click", toggleSearch);

    $("#menuToggle").on('click', toggleMenu);
  };

  opad.addToInitQueue = function(callback) {
    initQ.push(callback);
  };

  opad.addToJsModules = function(module) {
    jsModules.push(module);
  };

  opad.initJsModule = function(modulesList) {
    var modulesToInitEl = $(".module-block[data-modules]");
    var modulesList = modulesList || ["module"];
    var localModules = "";

    for (var m = 0; m < modulesToInitEl.length; m++) {
      localModules = $(modulesToInitEl[m])
        .attr("data-modules")
        .split(",");

      for (var l = 0; l < localModules.length; l++) {
        if (modulesList.indexOf(localModules[l]) == -1) {
          modulesList.push(localModules[l]);
        }
      }
    }

    for (var j = 0; j < modulesList.length; j++) {
      for (var i = 0; i < jsModules.length; i++) {
        if (jsModules[i].name === modulesList[j]) {
          if (typeof jsModules[i].fn === "function") {
            jsModules[i].fn();
            break;
          }
        }
      }
    }

    opad.globalInit();
  };

  opad.globalInit = function() {
    $("a[data-js-url]").each(function() {
      var $this = $(this);
      $this.attr("href", $this.attr("data-js-url"));
    });
  };

  opad.postActionRequest = function(req, data, cbSuccess, cbError) {
    // Add csrf token
    data[craftSettings.csrfTokenName] = craftSettings.csrfTokenValue;

    var url =
      "/" +
      craftSettings.actionTrigger +
      "/" +
      req.plugin +
      "/" +
      req.controller +
      "/" +
      req.action;

    $.post(url, data)
      .done(function(res) {
        if (typeof cbSuccess === "function") {
          cbSuccess(res);
        }
      })
      .error(function(err) {
        if (typeof cbError === "function") {
          cbError(err);
        }
      });
  };

  opad.skipMoodSave = false;

  function hideThis() {
    $("body").html("");
    window.location = "http://www.google.com";
  }

  function closeSearch() {
    if (!$("#searchFormContainer").hasClass('hide') ){
      toggleSearch();
    }
  }

  function toggleSearch() {
    $("#searchFormContainer").toggleClass("hide");
    if ($("#searchFormContainer").hasClass("hide")) {
      $(".search-toggle").removeClass("active");
      $("#searchFormInput").blur();
    } else {
      $("#searchFormInput").focus();
      $(".search-toggle").addClass("active");
      closeMenu();
    }
  }

  function closeMenu() {
    if ($("#menuToggle").hasClass('active') ){
      toggleMenu();
    }
  }

  function toggleMenu() {
    $("#menuToggle").toggleClass('active');
    $("#menuList").toggleClass('active');
    if ($("#menuToggle").hasClass('active') ){
      closeSearch();
    }
  }

  $(document).ready(function() {
    opad.init();a
  });
})(window, document, jQuery);
