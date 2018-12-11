alert("Upload_82");
$("html").css({
  "overflow-y": "hidden",
})
$("#main_page").hide();
$("#enter").hide()
$(".loading_animation").hide();
$(".current_index_container").hide();
$(".content").hide();
$(document).ready(function() {
  $("html").animate({scrollTop: 0}, 100); //100ms for example
});

$(window).on("load", () => {
  $("#enter").addClass("enter_animation_arrive")
  $("#enter").fadeIn()
  $("#enter").on("click", function animating() {
    $("#main_page").show();
    $("#enter").addClass("enter_animation_leave");
    $(".outer_ellipse_thin").addClass("ellipse_animation_leave");
    setTimeout(function() {$(".preloader_container").slideUp(1000)}, 800);
    $(".content").show();
    setTimeout(function() {$(".content").addClass("content_fade_in")}, 1800);
    setTimeout(function() {$(".loading_animation").fadeIn(1000)}, 3200);
    setTimeout(function() {$(".current_index_container").fadeIn(1000)}, 3200);
    setTimeout(function() {$("html").css({
      "overflow-y": "",
    })}, 3100);
  })
})
