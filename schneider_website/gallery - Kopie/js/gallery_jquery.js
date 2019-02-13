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

//Nature Carousel

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
//social media
var social_clicked = false;
$(".show_social_media").click( () => {
  if(social_clicked === false) {
    $(".social_media_list").slideToggle(350);
    social_clicked = true;
    $(".show_social_media").css({'transform': 'rotate(-90deg)'})
  } else if (social_clicked === true) {
    $(".social_media_list").slideToggle(350);
    $(".show_social_media").css({'transform': ''})
    social_clicked = false;
  }
});

var $page = $(".page");
$(".open_close").on("click", () => {
  $page.toggleClass("shazam");
});

$(".CONTENT").on("click", () => {
  $page.removeClass("shazam");
})


$(".open").on("click", () => {
  $(".menu_items").addClass("ani_class");
})



$(window).scroll( () => {
  $(".scroller").css("top", $(this).scrollTop())
})
//SLIDER
