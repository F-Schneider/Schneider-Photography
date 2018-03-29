//hamburger button 01
var animating = false;
var burger_icon = $("#burger_icon")

//function for appending the navigation bar
function show_list(name) {
  if(animating) return;
  animating = true;
  $(name).fadeIn(500, () => {animating = false; })
}

//function for hiding the navigation bar
function hide_list(name) {
  if(animating) return;
  animating = true,
  $(name).fadeOut(200, () => {animating = false; })
}

//resize function
$(window).resize(function() {
 if ($(window).width() < 850) {
   $("#nav_ul").hide();
   $(burger_icon).click(function() {
     show_list("#nav_ul")
   })
   $(burger_icon).click(function() {
     hide_list("#nav_ul")
   })
 } else {
   $("#nav_ul").show();
  }
});
//hamburger button 02
$(document).ready( () => {
  $(".sidebar_btn").click( () => {
    $(".filter_container").toggleClass("visible");
  })
})

var clicked = false;

$(".sidebar_btn").click( () => {
  if(clicked === false) {
    $("#btn_first").css("visibility", "hidden");
    $("#btn_second").css({
      "transform": "rotate("+ 45 +"deg)",
      "width": "20px",
      "border": "none",
      "height": "3px",
      "background-color": "#111111",
    });
    $("#btn_third").css({
      "transform": "rotate("+ -45 +"deg)",
      "width": "20.3px",
      "margin-top": "-7.7px",
      "border": "none",
      "height": "3px",
      "background-color": "#111111",
    });
    clicked = true;
  }else if (clicked === true) {
    $("#btn_first").css("visibility", "visible");
    $("#btn_second").css({
      "transform": "rotate("+ 0 +"deg)",
      "width": "25px",
      "background-color": "#2d2d2d",
      "border": "solid 1px #2d2d2d",
      "border-radius": "30px",
      "height": "2px",
    });
    $("#btn_third").css({
      "transform": "rotate("+ 0 +"deg)",
      "width": "20px",
      "margin-top": "5px",
      "background-color": "#2d2d2d",
      "border": "solid 1px #2d2d2d",
      "border-radius": "30px",
      "height": "2px",
    });
    clicked = false;
  }
});

var scrolled = false;

if(scrolled === false){
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if(scroll > 62) {
      $(".filter_container").css({
        "position": "fixed",
        "margin-top": "-62px",
      })
      $(".sidebar_btn").css({
        "margin-top": "-55px",
      })
    } else if(scroll < 62) {
      $(".filter_container").css({
        "position": "absolute",
        "margin-top": "0px",
      })
      $(".sidebar_btn").css({
        "margin-top": "5px",
      })
    }
  });
}
//social media
var social_clicked = false;
$(".show_social_media").click( () => {
  if(social_clicked === false) {
    $(".social_media_list").slideToggle(350);
    social_clicked = true;
    $(".show_social_media").css({'transform': 'rotate(180deg)'})
  } else if (social_clicked === true) {
    $(".social_media_list").slideToggle(350);
    $(".show_social_media").css({'transform': ''})
    social_clicked = false;
  }
});
