$(".content").hide()
$("#enter").hide()

$(window).on("load", () => {
  $("#enter").fadeIn()
  $("#enter").on("click", () => {
    $(".preloader_container").slideToggle(1200)
    $(".content").show()
  })
})
