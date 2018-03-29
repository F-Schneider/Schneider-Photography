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

//image carousel
var slideIndex = 0;
var stop = false;
var timeout = setInterval(carousel, 3000);
carousel();
function carousel() {
    var i;
    var x = $(".carousel_size");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
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


//arrow animation
/*var hovered = false;
$(".arrow").hide();
if(hovered === false)
{
  $("main").mouseover( () => {
    $(".arrow").fadeIn();
    $("#backward_carousel").addClass("arrow_animation_back");
    $("#forward_carousel").addClass("arrow_animation_for");
    hovered = true;
  })
}
  $("main").mouseout( () => {
    $("#backward_carousel").removeClass("arrow_animation_back");
    $("#forward_carousel").removeClass("arrow_animation_for");
    $(".arrow").fadeOut();
  })
  hovered = false;
*/


//social media

var social_clicked = false;
$(".show_social_media").click( () => {
  if(social_clicked === false) {
    $(".social_media_list").slideToggle(350);
    social_clicked = true;
    $(".show_social_media").css({'transform': 'rotate(-180deg)'})
  } else if (social_clicked === true) {
    $(".social_media_list").slideToggle(350);
    $(".show_social_media").css({'transform': ''})
    social_clicked = false;
  }
});
