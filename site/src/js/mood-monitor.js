"use strict";
(function(window, document, $) {
  var moodData = {};
  var moodDataFreetext = [];
  var categories = {};
  var moodDataFreetextDate = {};
  var thisDate;
  var chartList = {};
  var categoryLookup;

  var isLargeViewport = window.Modernizr.mq("(min-width: 1024px)");

  function init() {
    // Initialise profile details dropdown menu
    $("#profileDashboardHeading")
      .addClass("nav-arrow--closed")
      .on("click", toggleDashboardContainer);

    $(".mood-monitor-date-button").on("click", function() {
      opad.getMoods($(this).attr("data-mood-month"));
      toggleDashboardContainer();
    });

    $(".mood-monitor-mood-button").on("click", function(ev) {
      ev.stopPropagation();
    });

    $(".mood-monitor-arrow").on("click", changeDateRangeHandler);

    setupResizeHandler();

    opad.getMoods();
  }

  opad.getMoods = function(month, day) {
    var request = {
      plugin: "profiler",
      controller: "question",
      action: "get-mood-scores"
    };

    function success(res) {
      categoryLookup = res.catLookup;
      setMoodData(res.moodScores);

      setupCharts(month, day);
    }

    function error(err) {}

    opad.postActionRequest(request, { month: month }, success, error);
  };

  function setupResizeHandler() {
    //create trigger to resizeEnd event
    $(window).resize(function() {
      if (this.resizeTO) {
        clearTimeout(this.resizeTO);
      }

      this.resizeTO = setTimeout(function() {
        $(this).trigger("resizeEnd");
      }, 500);
    });

    //redraw graph when window resize is completed
    $(window).on("resizeEnd", function() {
      isLargeViewport = window.Modernizr.mq("(min-width: 1024px)");
      setupCharts(thisDate, thisDate.getDate());
    });
  }

  function toggleDashboardContainer() {
    $("#profileDashboardContainer").toggleClass(
      "profile-dashboard__details__show"
    );
    $("#profileDashboardHeading").toggleClass("nav-arrow--closed");
  }

  function setupCharts(month, day) {
    $(".mood-monitor-chart-container").each(function() {
      var moodId = $(this).attr("data-mood-id");
      var container = this;

      chartList[moodId] = drawChart(getMoodData(moodId), this, month, day);

      $(this).delegate(".google-visualization-tooltip", "click", function() {
        chartList[moodId].setSelection([{}]);
      });
    });

    craftEventTracker.sendEvent({
      interactionId: "view",
      interactionCategory: "mood-monitor",
      parameter1: month,
      parameter2: day
    });
  }

  function showDiaryEntries(thisDate, nextDate) {
    var freetextContainer = $("#freetextContainer");

    var parsedDate;
    var hasEntry = false;

    freetextContainer.empty();

    for (var i in moodDataFreetext) {
      if (moodDataFreetext[i].textValue) {
        parsedDate = parseDateString(
          moodDataFreetext[i].dateCreated,
          moodDataFreetext[i].period
        );

        if (parsedDate >= thisDate && parsedDate <= nextDate) {
          hasEntry = true;

          freetextContainer.append(
            '<div class="mood-monitor-diary-item">' +
              '<div class="mood-monitor-diary-item--heading">' +
              getYearMonthStr(parsedDate) +
              "-" +
              parsedDate.getDate() +
              "</div>" +
              "<p>" +
              moodDataFreetext[i].textValue +
              "</p>" +
              "</div>"
          );
        }
      }
    }

    if (!hasEntry) {
      freetextContainer.append(
        "<p>" + freetextContainer.attr("data-no-entry-msg") + "</p>"
      );
    }
  }

  function getFillColor(value) {
    if (value < 3) {
      return "#F6767B";
    } else if (value < 6) {
      return "#FCC147";
    } else {
      return "#54B76E";
    }
  }

  function getPeriod(period) {
    switch (period) {
      case 1:
        return "Morning";
      
      case 2:
        return "Afternoon";
      
      case 3:
        return "Evening";
    }

    return "";

  }

  function parseDateString(dateStr, period) {
    var date = new Date(dateStr);

    switch (period) {
      case 2:
        date.setHours(4);
        break;
      case 3:
        date.setHours(8);
        break;
    }

    return date;
  }

  function setMoodData(data) {
    moodData = {};
    moodDataFreetext = [];
    categories = {};

    var pointOptions = {};
    var moodDate, moodPopup, freeTextMoodPopup;
    for (var i = 0; i < data.length; i++) {
      if (
        data[i].questionId !== "freetext" &&
        typeof moodData[data[i].questionId] == "undefined"
      ) {

        moodData[data[i].questionId] = [];    
      }
      moodDate = parseDateString(data[i].dateAnswered, data[i].period);

      moodPopup =
        "<div>" +
          moodDate.getDate() +
          " " +
          monthNames[moodDate.getMonth()] +
        "</div>" +
        "<div>" +
          getPeriod(data[i].period) +
        "</div>";

      if (data[i].questionId === "freetext") {
        moodDataFreetext.push(data[i]);
        // var freetextDate = parseDateString(data[i].dateCreated);
        var freetextDateRef = moodDate.toDateString() + '_' +data[i].period;

        freeTextMoodPopup =
          '<div class="google-visualization-tooltip__text">' +
          data[i].textValue +
          "</div><br>";

        if (!moodDataFreetextDate[freetextDateRef]) {
          moodDataFreetextDate[freetextDateRef] = "";
        }
        moodDataFreetextDate[freetextDateRef] += freeTextMoodPopup;
      } else {
        if (data[i].value === -1){
          //Is category
          var catKey = moodDate.toDateString() + '_' +data[i].period;

          if (!categories[catKey]){
            categories[catKey] = {}
          }

          try {
            var moodCats = JSON.parse(data[i].textValue);

            if (moodCats.length) {
              var moodCatTitles = moodCats.map( function(catId){
                return "<li>" + categoryLookup[data[i].questionId][catId] +"</li>";
              } );
  
              categories[catKey][data[i].questionId] = "<ul>" + moodCatTitles.join('') + "</ul>";
  
            }
           }catch(err){}

        } else {
          pointOptions =
          "point { fill-color: " + getFillColor(data[i].value) + " }";
        // moodDate = parseDateString(data[i].dateAnswered);

          moodData[data[i].questionId].push([
            moodDate,
            parseInt(data[i].value),
            pointOptions,
            moodPopup,
            data[i].period
          ]);
        }

      }
    }

    // Insert all diary entries into each moodData dataset

    for (var questionId in moodData) {
      for (var i = 0; i < moodData[questionId].length; i++){
        var moodDataDate = moodData[questionId][i][0].toDateString();
         var period = moodData[questionId][i].pop();
        if (moodDataFreetextDate[moodDataDate+'_'+period]) {
          moodData[questionId][i][3] += moodDataFreetextDate[moodDataDate+'_'+period];;
        }

        if (categories[moodDataDate+'_'+period]) {
          Object.entries(categories[moodDataDate+'_'+period]).forEach(function([key, val]){
            moodData[questionId][i][3] += "<div>" + key + "</div>" + val;
          })
        }
      }

    }
  }

  function getYearMonthStr(dateObj) {
    var nextMonthStr;

    nextMonthStr = dateObj.getMonth() + 1;
    if (nextMonthStr < 10) {
      nextMonthStr = "0" + nextMonthStr;
    }
    return dateObj.getFullYear() + "-" + nextMonthStr;
  }

  function changeDateRangeHandler(ev) {
    var offsetDir = parseInt($(this).attr("data-offset-dir"));
    var nextWeekDate = new Date(thisDate);

    if (isLargeViewport) {
      nextWeekDate.setMonth(thisDate.getMonth() + offsetDir);

      opad.getMoods(getYearMonthStr(nextWeekDate), nextWeekDate.getDate());
    } else {
      nextWeekDate.setDate(thisDate.getDate() + 7 * offsetDir);

      if (nextWeekDate.getMonth() != thisDate.getMonth()) {
        opad.getMoods(getYearMonthStr(nextWeekDate), nextWeekDate.getDate());
      } else {
        setupCharts(nextWeekDate, nextWeekDate.getDate());
      }
    }

    ev.stopPropagation();
    ev.preventDefault();
  }

  function getMoodData(type) {
    return moodData[type];
  }

  function drawChart(dataValues, container, month, day) {
    var data = new google.visualization.DataTable();
    var thisMonth, thisWeek;
    var nextMonth, nextWeek, nextDate, prevMonth, prevWeek, prevDate;

    day = day || 1;
    month = month || Date.now();

    thisMonth = new Date(month);
    thisWeek = new Date(month);
    nextMonth = new Date(month);
    nextWeek = new Date(month);
    prevMonth = new Date(month);
    prevWeek = new Date(month);

    thisMonth.setDate(1);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    prevMonth.setDate(0);
    thisWeek.setDate(day);
    nextWeek.setDate(day + 6);
    prevWeek.setDate(day - 6);

    if (isLargeViewport) {
      thisDate = thisMonth;
      nextDate = nextMonth;
      prevDate = prevMonth;
    } else {
      thisDate = thisWeek;
      nextDate = nextWeek;
      prevDate = prevWeek;
    }

    thisDate.setHours(0, 0, 0);
    nextDate.setHours(23, 59, 59);

    var nextDateStr = getYearMonthStr(nextDate);
    var $nextArrow = $(
      '.mood-monitor-date-button[data-mood-month="' + nextDateStr + '"]'
    );

    if (nextDate > new Date()) {
      // Next date doesn't exist
      $(".mood-monitor-arrow__right").addClass("hide");
    } else {
      $(".mood-monitor-arrow__right").removeClass("hide");
    }

    var prevDateStr = getYearMonthStr(prevDate);
    var $prevArrow = $(
      '.mood-monitor-date-button[data-mood-month="' + prevDateStr + '"]'
    );
    if ($prevArrow.length == 0) {
      // Next date doesn't exist
      $(".mood-monitor-arrow__left").addClass("hide");
    } else {
      $(".mood-monitor-arrow__left").removeClass("hide");
    }

    $("#profileDashboardHeadingText").text(
      monthNames[thisDate.getMonth()] + " " + thisDate.getFullYear()
    );

    if (isLargeViewport) {
      nextDate.setDate(0); // Last day of previous month so dataset just shows month
    }

    data.addColumn("datetime", "X");
    data.addColumn("number", "Score");
    data.addColumn({ type: "string", role: "style" });
    data.addColumn({ type: "string", role: "tooltip", p: { html: true } });

    dataValues = dataValues || [];
    data.addRows(dataValues);

    var tickDate = new Date(thisDate);
    var ticks = [];
    while (tickDate <= nextDate) {
      ticks.push(new Date(tickDate));
      tickDate.setDate(tickDate.getDate() + 1);
    }

    var options = {
      height: 180,
      lineWidth: 1,
      chartArea: {
        width: "98%",
        left: "1%",
        height: 144
      },
      hAxis: {
        title: "",
        textStyle: {
          color: "#37383b",
          fontSize: 14,
          fontName: "Lato",
          bold: false,
          italic: false,
          maxAlternation: 1
        },
        gridlines: {
          color: "#fff",
          count: ticks.length + 1
        },
        ticks: ticks,
        format: "ccccc",
        slantedText: false,
        viewWindow: {
          min: thisDate,
          max: nextDate
        }
      },
      vAxis: {
        title: "",
        gridlines: {
          color: "#fff"
        },
        textPosition: "none",
        maxValue: 7,
        minValue: 0,
        viewWindowMode: "maximized",
        baselineColor: "#cccccc"
      },
      legend: {
        position: "none"
      },
      colors: ["#CCC"],
      pointSize: 14,
      dataOpacity: 1,
      tooltip: {
        isHtml: true,
        trigger: "selection"
      }
    };

    $("#moodMonitorWeekHeading").text(
      thisDate.getDate() + " - " + nextDate.getDate()
    );

    var chart = new google.visualization.LineChart(container);
    chart.draw(data, options);

    // showDiaryEntries(thisDate, nextDate);

    return chart;
  }

  opad.addToJsModules({
    name: "mood-monitor",
    fn: init
  });

  //	opad.addToInitQueue(init);
})(window, document, jQuery);
