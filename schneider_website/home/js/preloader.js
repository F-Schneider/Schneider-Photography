$(".content").hide()
$("#enter").hide()
$(window).on("load", () => {
  $("#enter").addClass("enter_animation_arrive")
  $("#enter").fadeIn()
  $("#enter").on("click", function animating() {
    $("#enter").addClass("enter_animation_leave");
    $(".outer_ellipse_thin").addClass("ellipse_animation_leave");
    $(".preloader_container").slideToggle(2000);
    $(".content").show();

  })
})
