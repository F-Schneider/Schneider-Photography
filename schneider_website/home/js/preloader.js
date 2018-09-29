$("#enter").hide()
$(".loading_animation").hide();

$(window).on("load", () => {
  $("#enter").addClass("enter_animation_arrive")
  $("#enter").fadeIn()
  $("#enter").on("click", function animating() {
    $("#enter").addClass("enter_animation_leave");
    $(".outer_ellipse_thin").addClass("ellipse_animation_leave");
    setTimeout(function() {$(".preloader_container").slideUp(1000)}, 800);
    setTimeout(function() {$(".content").addClass("content_fade_in")}, 1800);
    setTimeout(function() {$(".loading_animation").fadeIn(1000)}, 3200);
  })
})
