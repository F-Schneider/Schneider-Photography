$(".content").hide()
$("#enter").hide()
$(".loading_animation").hide();

var animation_timeout;

$(window).on("load", () => {

  $("#enter").addClass("enter_animation_arrive")
  $("#enter").fadeIn()
  $("#enter").on("click", function animating() {
    $("#enter").addClass("enter_animation_leave");
    $(".outer_ellipse_thin").addClass("ellipse_animation_leave");
    $(".preloader_container").slideToggle(2000);
    $(".content").show();
    animation_timeout = setTimeout(timeout, 4000);
    function timeout() {
    }
    $(".loading_animation").addClass("append_buttons")
    animation_timeout;
    $(".loading_animation").show()

  })
})
