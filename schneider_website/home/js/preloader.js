$("#enter").hide()
$(".content").hide();

var animation_timeout;
$(window).on("load", () => {
  $("#enter").addClass("enter_animation_arrive")
  $("#enter").fadeIn()
  $("#enter").on("click", function animating() {
    $(".content").show();
    $("#enter").addClass("enter_animation_leave");
    $(".outer_ellipse_thin").addClass("ellipse_animation_leave");
    $(".preloader_container").addClass("preloader_container_wait");
    $(".preloader_container").addClass("preloader_container_end");
  })
})
