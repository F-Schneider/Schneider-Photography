var animating = false;
var burger_icon = $("#burger_icon")

//function for appending the navigation bar
function show_list(name) {
  if(animating) return;
  animating = true;
  $(name).fadeIn(500, () => {animating = false; })
}

//function for hiding the navigation bar
function hide_list(name) {
  if(animating) return;
  animating = true,
  $(name).fadeOut(500, () => {animating = false; })
}

//if there is no resize and screen size < 850
if($(window).width() <= 850) {
  $(burger_icon).on("click", () => {
    $("#nav_ul").slideToggle(550)
    })
} else {
  $("#nav_ul").show();
}

//resize function
$(window).on("resize", () => {
  slided = true;
  if($(window).width() <= 850) {
    $("#nav_ul").hide();
  } else{$("#nav_ul").show()}
})



//image carousel
var slideIndex = 0;
var stop = false;
var timeout = setInterval(carousel, 3000);
carousel();
function carousel() {
    var i;
    var x = $(".carousel_size");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    timeout;
     // Change image every 3 seconds
}

$("#forward_carousel").click( () => {
  //sets timeout back and starts
  clearTimeout(timeout);
  timeout = 0;
  var i;
  var x = $(".carousel_size");//class for the pictures in carousel
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  timeout =setInterval(carousel, 5000);
})
$("#backward_carousel").click( () => {
  clearTimeout(timeout);
  timeout = 0;
  var i;
  var x = $(".carousel_size");//class for the pictures in carousel
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex--;
  if (slideIndex <= 0){slideIndex = x.length}
  x[slideIndex-1].style.display = "block";
  timeout =setInterval(carousel, 5000);
})

//social media
if($(window).width() > 600) {
  var social_clicked = false;
  $(".show_social_media").click( () => {
    if(social_clicked === false) {
      $(".social_media_list").slideToggle(350);
      social_clicked = true;
      $(".show_social_media").css({'transform': 'rotate(-180deg)'})
    } else if (social_clicked === true) {
      $(".social_media_list").slideToggle(350);
      $(".show_social_media").css({'transform': ''})
      social_clicked = false;
    }
  });
}

//social media for mobile devices

 if ($(window).width() < 600) {
   $(".social_media_list").hide();
   $(".show_social_media").css({"transform": "rotate(180deg)"});
   var social_clicked = false;
   $(".show_social_media").click( () => {
     if(social_clicked === false) {
       $(".show_social_media").css({"transform": ""});
       $(".social_media_list").slideToggle(350);
       social_clicked = true;
     } else if(social_clicked === true) {
       $(".show_social_media").css({"transform": "rotate(-180deg)"});
       $(".social_media_list").slideToggle(350);
       social_clicked = false;
     }
   })
 }
