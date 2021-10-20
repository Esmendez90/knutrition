console.log("hello nutri");

let el = document.querySelector(".navbar-toggler");

$("#navBarHeader").click(function () {
    if (el.ariaExpanded === "true") {
      $("main").css("display", "none");
      $(".rowContact").css("display", "none");
    } else {
      $("main").css("display", "block");
      $(".rowContact").css("display", "block");
    }
  });
