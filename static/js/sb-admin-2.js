(function($) {
"use strict"; // Start of use strict

// Toggle the side navigation
$("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
  $("body").toggleClass("sidebar-toggled");
  $(".sidebar").toggleClass("toggled");
  if ($(".sidebar").hasClass("toggled")) {
    $('.sidebar .collapse').collapse('hide');
  };
});

// Close any open menu accordions when window is resized below 768px
$(window).resize(function() {
  if ($(window).width() < 768) {
    $('.sidebar .collapse').collapse('hide');
  };

  // Toggle the side navigation when window is resized below 480px
  if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
    $("body").addClass("sidebar-toggled");
    $(".sidebar").addClass("toggled");
    $('.sidebar .collapse').collapse('hide');
  };
});

// Prevent the content wrapper from scrolling when the fixed side navigation hovered over
$('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
  if ($(window).width() > 768) {
    var e0 = e.originalEvent,
      delta = e0.wheelDelta || -e0.detail;
    this.scrollTop += (delta < 0 ? 1 : -1) * 30;
    e.preventDefault();
  }
});

// Scroll to top button appear
$(document).on('scroll', function() {
  var scrollDistance = $(this).scrollTop();
  if (scrollDistance > 100) {
    $('.scroll-to-top').fadeIn();
  } else {
    $('.scroll-to-top').fadeOut();
  }
});

// Smooth scrolling using jQuery easing
$(document).on('click', 'a.scroll-to-top', function(e) {
  var $anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: ($($anchor.attr('href')).offset().top)
  }, 1000, 'easeInOutExpo');
  e.preventDefault();
});

$(document).ready(function() {
    $.ajax({ // 처음 웹페이지 로딩시 표시하기 위해
        type: 'GET',
        dataType: 'text',
        url: '/index/time1',
        cache : false,
        success: function (result) {
            document.getElementById("timetest1").innerText = result;
        }
    })
    setInterval(function () {
        $.ajax({
            type: 'GET',
            dataType: 'text',
            url: '/index/time1',
            cache : false,
            success: function (result) {
                document.getElementById("timetest1").innerText = result;
            }
        })
    }, 1000);
});

$(document).ready(function() {
    $.ajax({ // 처음 웹페이지 로딩시 표시하기 위해
        type: 'GET',
        dataType: 'text',
        url: '/index/time2',
        cache : false,
        success: function (result) {
            document.getElementById("timetest2").innerText = result;
        }
    })
    setInterval(function () {
        $.ajax({
            type: 'GET',
            dataType: 'text',
            url: '/index/time2',
            cache : false,
            success: function (result) {
                document.getElementById("timetest2").innerText = result;
            }
        })
    }, 1000);
});

$(document).ready(function() {
    var myList = [
        { "Name": "0", "ID": "1", "DateTime": "2", "Location": "3", "Age": "4", "Duration": "5", "Confidence": "6"}
    ];

    // Builds the HTML Table out of myList.
    function buildHtmlTable(selector) {
        var columns = addAllColumnHeaders(myList, selector);

        for (var i = 0; i < myList.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
                var cellValue = myList[i][columns[colIndex]];
                if (cellValue == null) cellValue = "";
                row$.append($('<td/>').html(cellValue));
            }
            $(selector).append(row$);
        }
    }

    // Adds a header row to the table and returns the set of columns.
    // Need to do union of keys from all records as some records may not contain
    // all records.
    function addAllColumnHeaders(myList) {
        var columnSet = [];
        for (var i = 0; i < myList.length; i++) {
            var rowHash = myList[i];
            for (var key in rowHash) {
                if ($.inArray(key, columnSet) == -1) {
                    columnSet.push(key);
                }
            }
        }
        return columnSet;
    }
    setInterval(function () {
            buildHtmlTable(document.getElementById('dataTable'));
    }, 1000);
});

})(jQuery); // End of use strict
