$(".content").hide()
$("#enter").hide()
alert("upload46")
$(window).on("load", () => {
  $("#enter").fadeIn()
  $("#enter").on("click", () => {
    $(".preloader_container").slideToggle(1200)
    $(".content").show()
  })
})
