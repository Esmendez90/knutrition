let el = document.querySelector(".navbar-toggler");

$(".navbar-collapse a").click(function () {
  $(".navbar-collapse").collapse("hide");
});

$("#navBarHeader").click(function () {
  if (el.ariaExpanded === "true") {
    $("main").css("display", "none");
  } else {
    $("main").css("display", "block");
  }
});
