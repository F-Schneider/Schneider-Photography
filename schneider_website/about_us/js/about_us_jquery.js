var animating = false;

var burger_icon = $("#burger_icon");

var burger_clicked = true;



//if there is no resize and screen size < 850
if($(window).width() <= 850) {

  $(burger_icon).on("click", () => {

    if(burger_clicked === true) {

      $(".current_index_container").hide(500);
      burger_clicked = false;

    }
    else {

      $(".current_index_container").show(1000);
      burger_clicked = true;

    }

    $("#nav_ul").slideToggle(550);

    })

} else {

  $("#nav_ul").show();

}


//resize function

$(window).on("resize", () => {

  if($(window).width() <= 850) {

  } else {
    $("#nav_ul").show()
  }

})

//if scrolled than hide navigation bar
//just for phone devices
if($(window).width() < 1000) {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if(scroll > 30) {
      $("#nav_ul").slideUp(800);
      $(".current_index_container").show(1000);
      burger_clicked = true;
    }
  })
} else {
  $("#nav_ul").show();
}

//social media
if($(window).width() > 600) {
  var social_clicked = false;
  $(".show_social_media").css({"transform": "rotate(90deg)"});
  $(".show_social_media").click( () => {
    if(social_clicked === false) {
      $(".social_media_list").slideToggle(350);
      social_clicked = true;
      $(".show_social_media").css({'transform': 'rotate(-90deg)'})
    } else if (social_clicked === true) {
      $(".social_media_list").slideToggle(350);
      $(".show_social_media").css({'transform': 'rotate(90deg)'})
      social_clicked = false;
    }
  });
}

//social media for mobile devices
 if ($(window).width() < 600) {
   $(".social_media_list").hide();
   $(".show_social_media").css({"transform": "rotate(-90deg)"});
   var social_clicked = false;
   $(".show_social_media").click( () => {
     if(social_clicked === false) {
       $(".show_social_media").css({"transform": "rotate(90deg)"});
       $(".social_media_list").slideToggle(350);
       social_clicked = true;
     } else if(social_clicked === true) {
       $(".show_social_media").css({"transform": "rotate(-90deg)"});
       $(".social_media_list").slideToggle(350);
       social_clicked = false;
     }
   })
 }




 //Switch between login and register field //JUST FOR EDITING REGISTER CONTENT

$("#reg_switch_l").on("click", () => {
  $("#login").hide();
  $("#register").css({
    "display": "block",
  });
  $("#register").hide();
  $("#register").fadeIn(200);
  $("#reg_switch_r").css({
    "background-color": "rgba(0, 0, 0, 0.6)",
  })
  $("#log_switch_r").css({
    "background-color": "transparent",
  })
  $("#log_switch_r").children().css({
    "color": "black",
  })
  $("#reg_switch_r").children().addClass("switch_p_current");

})

$("#log_switch_r").on("click", () => {
  $("#register").hide();
  $("#login").fadeIn(200);
})



//Media query mobile devices header like Login or Register from up to down instead
//of from left to right!!!!!!!!!!!!
