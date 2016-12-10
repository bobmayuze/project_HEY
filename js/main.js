function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function yo() {
  alert('Hello World')
}


var apple = 0
var bread = []
var sauce = []
var cheese = []
var meat = []
var vages = []
$(document).ready(function() {

  $(".bread .collection a").click(function () {
    if ($(this).hasClass("green")) {
      $(this).removeClass("green");
      var index = bread.indexOf($(this).attr("value"));
      bread.splice(index, 1);      
    } else {
      $(this).addClass("green");
      $(this).addClass("lighten-5");
      bread.push($(this).attr("value"))
    }
  });



  $(".cheese .collection a").click(function () {
    if ($(this).hasClass("green")) {
      $(this).removeClass("green");
      var index = cheese.indexOf($(this).attr("value"));
      cheese.splice(index, 1);      
    } else {
      $(this).addClass("green");
      $(this).addClass("lighten-5");
      cheese.push($(this).attr("value"))
    }
  });

  $(".meat .collection a").click(function () {
    if ($(this).hasClass("green")) {
      $(this).removeClass("green");
      var index = meat.indexOf($(this).attr("value"));
      meat.splice(index, 1);      
    } else {
      $(this).addClass("green");
      $(this).addClass("lighten-5");
      meat.push($(this).attr("value"))
    }
  });

  $(".vages .collection a").click(function () {
    if ($(this).hasClass("green")) {
      $(this).removeClass("green");
      var index = vages.indexOf($(this).attr("value"));
      vages.splice(index, 1);      
    } else {
      $(this).addClass("green");
      $(this).addClass("lighten-5");
      vages.push($(this).attr("value"))
    }
  });

  $(".sauce .collection a").click(function () {
    if ($(this).hasClass("green")) {
      $(this).removeClass("green");
      var index = sauce.indexOf($(this).attr("value"));
      sauce.splice(index, 1);      
    } else {
      $(this).addClass("green");
      $(this).addClass("lighten-5");
      sauce.push($(this).attr("value"))
    }
  });  

  // page scroll animation
  $('.page-scoll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 2250, 'easeInOutExpo');
        event.preventDefault();
  });

  // Getting result
  $("#sauce-button").click(function () {
    var luck = getRandomInt(0, bread.length)
    bread_choose = bread[luck]
    $('#result_bread').text(bread_choose); 

    var luck = getRandomInt(0, sauce.length)
    sauce_choose = sauce[luck]
    $('#result_sauce').html(sauce_choose);     

    var luck = getRandomInt(0, cheese.length)
    cheese_choose = cheese[luck]
    $('#result_cheese').html(cheese_choose);     

    var luck = getRandomInt(0, meat.length)
    meat_choose = meat[luck]
    $('#result_meat').html(meat_choose);     

    var luck = getRandomInt(0, vages.length)
    vages_choose = vages[luck]
    $('#result_vages').html(vages_choose);     

  });
  
});



