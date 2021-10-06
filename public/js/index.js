let el = document.querySelector(".navbar-toggler");
let inicio = $("#navBarHeader").offset().top;
let sobrenosotros = $("#sobrenosotros").offset().top;
let testimonios = $("#testimonios").offset().top;
let contactanos = $("#contáctanos").offset().top;

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

$(".navbar-nav").click(function (event) {
  event.preventDefault();
  let element = event.target.innerHTML;
  if (element === "Inicio") {
    scrollfunction(inicio);
  } else if (element === "Sobre nosotros") {
    scrollfunction(sobrenosotros);
  } else if (element === "Testimonios") {
    scrollfunction(testimonios);
  } else if (element === "Contáctanos") {
    scrollfunction(contactanos);
  }
});

$(".sideBtns").click(function (event) {
  event.preventDefault();
  let element = event.target.className;
  console.log("class name", element);
  if (element === "fas fa-bars") {
    scrollfunction(inicio);
  } else if (element === "fas fa-users") {
    scrollfunction(sobrenosotros);
  } else if (element === "fas fa-comments") {
    scrollfunction(testimonios);
  } else if (element === "fas fa-mobile-alt") {
    scrollfunction(contactanos);
  }
});

function scrollfunction(location) {
  console.log("whaat", location);
  $("html,body").animate(
    {
      scrollTop: location,
    },
    "fast"
  );
}
