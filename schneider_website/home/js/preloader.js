
$("html").css({
  "overflow-y": "hidden",
})
$("#website").hide();
$("#enter").hide()
$(".loading_animation").hide();
$(".current_index_container").hide();

$(document).ready(function() {
  $("html").animate({scrollTop: 0}, 100); //100ms for example
});

$(window).on("load", () => {
  $("#enter").addClass("enter_animation_arrive")
  $("#enter").fadeIn()
  $("#enter").on("click", function animating() {
    $("html").css({
      "background-color": "#262626",
    })
    $("body").css({
      "background-color": "#262626",
    })
    $("#main_page").show();
    $("#enter").addClass("enter_animation_leave");
    $(".outer_ellipse_thin").addClass("ellipse_animation_leave");
    setTimeout(function() {$(".preloader_container").slideUp(1000)}, 800);
    setTimeout(function() {$("#website").fadeIn(1800)}, 1500);
    setTimeout(function() {$(".content").addClass("content_fade_in")}, 1800);
    setTimeout(function() {$(".loading_animation").fadeIn(1000)}, 3000);
    setTimeout(function() {$(".current_index_container").fadeIn(1000)}, 3000);
    setTimeout(function() {$("html").css({
      "overflow-y": "",
    })}, 3100);
  })
})
