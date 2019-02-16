
alert("upload_101");

$("html").css({
  "height": "calc(100vh + 71px)",
})
$("body").css({
  "height": "calc(100vh + 71px)",
})
var animating = false;
var burger_icon = $("#burger_icon");
var burger_clicked = true;
//if there is no resize and screen size < 850
if($(window).width() <= 850) {
  $(burger_icon).on("click", () => {
    if(burger_clicked === true) {$(".current_index_container").hide(500); burger_clicked = false;}
    else {$(".current_index_container").show(1000); burger_clicked = true;}
    $("#nav_ul").slideToggle(550);
    })
} else {
  $("#nav_ul").show();
}

//resize function
$(window).on("resize", () => {
  if($(window).width() <= 850) {
  } else{$("#nav_ul").show()}
})

//if scrolled than hide navigation bar
//just for phone devices
if($(window).width() < 1000) {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if(scroll > 30) {
      $("#nav_ul").slideUp(800);
      $(".current_index_container").show(1000);
      burger_clicked = true;
    }
  })
} else {
  $("#nav_ul").show();
}

//footer swipe up gps_container
$(".swipe_up_footer").on("click", () => {
  setTimeout(function() {$(".swipe_up_footer").addClass("swipe_up_footer_animation")}, 0);
  $(".swipe_up_footer").css({"margin-bottom": "0px"});
});

//image carousel
//coordinate slider
var coordinate;
var current_index;

var slideIndex = 0;
var stop = false;
var timeout = setInterval(carousel, 5000);
carousel();
function carousel() {
    var i;
    var x = $(".carousel_size");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      $(".coordinates").hide();
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    $(".current_index").css({
      "background-color": "",
      "width": "",
      "height": "",
      "border": "solid 1px rgba(255, 255, 255)",
    });
    current_index = $(".current_index")[slideIndex-1];
    $(current_index).css({
      "background-color": "rgba(255, 255, 255, 0.6)",
      "width": "11px",
      "height": "11px",
      "border": "none",
    });

    x[slideIndex-1].style.display = "block";

    coordinate = $(".coordinates")[slideIndex-1];
    if(gps_clicked === true) {
      $(coordinate).show();
    }
    timeout;
     // Change image every 3 seconds
}

//social media
if($(window).width() > 600) {
  var social_clicked = false;
  $(".show_social_media").css({"transform": "rotate(90deg)"});
  $(".show_social_media").click( () => {
    if(social_clicked === false) {
      $(".social_media_list").slideToggle(350);
      social_clicked = true;
      $(".show_social_media").css({'transform': 'rotate(-90deg)'})
    } else if (social_clicked === true) {
      $(".social_media_list").slideToggle(350);
      $(".show_social_media").css({'transform': 'rotate(90deg)'})
      social_clicked = false;
    }
  });
}

//social media for mobile devices
 if ($(window).width() < 600) {
   $(".social_media_list").hide();
   $(".show_social_media").css({"transform": "rotate(-90deg)"});
   var social_clicked = false;
   $(".show_social_media").click( () => {
     if(social_clicked === false) {
       $(".show_social_media").css({"transform": "rotate(90deg)"});
       $(".social_media_list").slideToggle(350);
       social_clicked = true;
     } else if(social_clicked === true) {
       $(".show_social_media").css({"transform": "rotate(-90deg)"});
       $(".social_media_list").slideToggle(350);
       social_clicked = false;
     }
   })
 }

 //Coordinates animation
var gps_clicked = false;
 $(".gps_icon").click( () => {
   if(gps_clicked === false) {
     $(".gps_icon").animate({
       "margin-left": "-280px"
     })
     $(coordinate).show();
     gps_clicked = true;
   } else {
     $(coordinate).fadeOut(250);
     $(".gps_icon").animate({
       "margin-left": ""
     })
     gps_clicked = false;
   }
 })

 //Coordinates if window size below 650px
 $(window).on("resize", () => {
   if($(window).width() <= 650) {
   }
 })

 //Coordinates slider
$(".current_index").eq(0).click(() => {
  slideIndex = 0;
  clearTimeout(timeout);
  timeout = 0;
  timeout =setInterval(carousel, 5000);
  carousel();

})
$(".current_index").eq(1).click(() => {
  slideIndex = 1;
  clearTimeout(timeout);
  timeout = 0;
  timeout =setInterval(carousel, 5000);
  carousel();
})
$(".current_index").eq(2).click(() => {
  slideIndex = 2;
  clearTimeout(timeout);
  timeout = 0;
  timeout =setInterval(carousel, 5000);
  carousel();
})
