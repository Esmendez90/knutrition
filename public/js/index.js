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


var fr = $("#testimonios").offset().top;
console.log(fr);

$(".nav-link").click(function(event) {
  event.preventDefault();

let qudice = this.innerHTML;
qudice = qudice.split(" ").join("").toLowerCase();
console.log(qudice);

  console.log("acelera francisca!!!");
  console.log(francisca);
  $('html,body').animate({
      scrollTop: francisca},
      'fast');
});