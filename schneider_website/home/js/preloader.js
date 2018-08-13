$("#enter").hide()
$(".loading_animation").hide();

var animation_timeout;
alert("This is upload 65");
$(window).on("load", () => {
  $(".content").css({"display": "block"})
  $("#enter").addClass("enter_animation_arrive")
  $("#enter").fadeIn()
  $("#enter").on("click", function animating() {
    $("#enter").addClass("enter_animation_leave");
    $(".outer_ellipse_thin").addClass("ellipse_animation_leave");
    $(".preloader_container").addClass("preloader_leave");
    $(".preloader_container").stop().slideToggle(1500);
    /*$(".loading_animation").stop().addClass("append_buttons");
    $(".loading_animation").show()
*/
  })
})
