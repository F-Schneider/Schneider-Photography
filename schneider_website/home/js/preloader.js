$("#enter").hide()
$(".loading_animation").hide();

var animation_timeout;

$(window).on("load", () => {

  $("#enter").addClass("enter_animation_arrive")
  $("#enter").fadeIn()
  $("#enter").on("click", function animating() {
    $("#enter").addClass("enter_animation_leave");
    $(".outer_ellipse_thin").addClass("ellipse_animation_leave");
    $(".preloader_container").addClass("preloader_leave");
    $(".preloader_container").fadeOut(1000);

    $(".loading_animation").stop().addClass("append_buttons");
    $(".loading_animation").show()

  })
})
