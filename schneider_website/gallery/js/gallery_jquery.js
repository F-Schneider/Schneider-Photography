var animating = false;
var burger_icon = $("#burger_icon");
var burger_clicked = true;
//if there is no resize and screen size < 850
if($(window).width() <= 850) {
  $(burger_icon).on("click", () => {
    if(burger_clicked === true) {$(".current_index_container").hide(500); burger_clicked = false;}
    else {$(".current_index_container").show(1000); burger_clicked = true;}
    $("#nav_ul").slideToggle(550);
    })
} else {
  $("#nav_ul").show();
}
//Nature Carousel

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
//social media
var social_clicked = false;
$(".show_social_media").click( () => {
  if(social_clicked === false) {
    $(".social_media_list").slideToggle(350);
    social_clicked = true;
    $(".show_social_media").css({'transform': 'rotate(-90deg)'})
  } else if (social_clicked === true) {
    $(".social_media_list").slideToggle(350);
    $(".show_social_media").css({'transform': ''})
    social_clicked = false;
  }
});


//photography categories


$("#show_categories").on("click", () => {
  $("#categories").slideToggle();
  $(".social_media").slideToggle();
})

//scroll to categorie
var city = document.getElementById("city_photography");
$("#city_cat").on("click", () => {
  city.scrollIntoView();
})

var nature = document.getElementById("nature_photography");
$("#nature_cat").on("click", () => {
  nature.scrollIntoView(true, {behavior: "smooth"});
})


//scrollbar
$(".categorie_h").hide();
$(window).on("scroll", () => {
  var scroll = $(window).scrollTop();
  if(scroll > 260 ) {
    $(".categorie_h").fadeIn();
  } else {
    $(".categorie_h").slideUp();
  }
})

$(document).on('scroll', function() {
    if($(this).scrollTop() *1.15 >=$('#city_photography').position().top){
        $(".categorie_h").text("city");
    } else {
      $(".categorie_h").text("nature");
    }
})


$(window).on("scroll", () => {

    var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());

    var stickyHeight = $('.categorie_h').height();

    var marginTop = (($(window).height() - stickyHeight) / 100) * scrollPercent * 0.9;

    $('.categorie_h').css('marginTop', marginTop);
});
