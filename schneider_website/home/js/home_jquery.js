var animating = false;
var burger_icon = $("#burger_icon")

//if there is no resize and screen size < 850
if($(window).width() <= 850) {
  $(burger_icon).on("click", () => {
    $("#nav_ul").slideToggle(550)
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
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if(scroll > 50) {
    $("#nav_ul").hide();
  }
})



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
      "width": "9px",
      "height": "9px",
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

$("#forward_carousel").click( () => {
  //sets timeout back and starts
  clearTimeout(timeout);
  timeout = 0;
  var i;
  var x = $(".carousel_size");//class for the pictures in carousel
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  timeout =setInterval(carousel, 5000);
})
$("#backward_carousel").click( () => {
  clearTimeout(timeout);
  timeout = 0;
  var i;
  var x = $(".carousel_size");//class for the pictures in carousel
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex--;
  if (slideIndex <= 0){slideIndex = x.length}
  x[slideIndex-1].style.display = "block";
  timeout =setInterval(carousel, 5000);
})

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
     $(".gps_icon").slideToggle(250)
     $(".gps_icon").slideToggle(150)
     $(".gps_icon").animate({
       "margin-left": "-280px"
     }, 350)
     $(coordinate).fadeIn(1000);
     gps_clicked = true;
   } else {
     $(coordinate).fadeOut(150);
     $(".gps_icon").animate({
       "margin-left": ""
     }, 500)
     gps_clicked = false;
   }
 })

 //Coordinates if window size below 650px

 $(window).on("resize", () => {
   if($(window).width() <= 650) {
   }
 })

 //Coordinates slider
