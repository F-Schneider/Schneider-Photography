
var stop = false;
var slideIndex = 1;
var timeout = setInterval(carousel, 3000);
carousel();
function carousel() {
    var i;
    var x = $(".image");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    if(stop === false) {
      slideIndex++;
    } else {
    }
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    timeout;
}
$(".startCarousel").click( () => {
  stop = false;
  $("#imgWrapper").toggleClass("animating");
  $("")
});

$(".stopCarousel").click( () => {
  stop = true;
});
//-----------------------------

var hovered = false;
$(".arrow").hide();
if(hovered === false) {
  $(".carousel_size").hover( () => {
    $(".arrow").show();
    $("#backward_carousel").addClass("arrow_animation_back");
    $("#forward_carousel").addClass("arrow_animation_for");
  })
  hovered = true;
} else {
  $(".carousel_size").hover( () => {
    $("#backward_carousel").removeClass("arrow_animation_back");
    $("#forward_carousel").removeClass("arrow_animation_for");
    hovered = false;
  })
}
