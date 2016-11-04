// test js so far
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function yo() {
  alert('Hello World')
}


var apple = 0
var bread = []
var sauce = []
$(document).ready(function() {
  // alert('ready')
  // yo() 
  $(".bread .collection a").click(function () {
    if ($(this).hasClass("green")) {
      $(this).removeClass("green");
      var index = bread.indexOf($(this).attr("id"));
      bread.splice(index, 1);      
    } else {
      $(this).addClass("green");
      $(this).addClass("accent-1");
      bread.push($(this).attr("id"))
    }
    // alert(bread)  
  });

  $(".sauce .collection a").click(function () {
    if ($(this).hasClass("green")) {
      $(this).removeClass("green");
      var index = sauce.indexOf($(this).attr("id"));
      sauce.splice(index, 1);      
    } else {
      $(this).addClass("green");
      $(this).addClass("accent-1");
      sauce.push($(this).attr("id"))
    }
    // alert(sauce)  
  });


  // page scroll animation
  $('.page-scoll a').bind('click', function(event) {
        // alert('AAAAAA')
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 2250, 'easeInOutExpo');
        event.preventDefault();
  });

  // page scroll animation
  $("#veges-button").click(function () {
    alert("Blaster!")
    $('#result').html('Blaster'); 
  });
  
});



