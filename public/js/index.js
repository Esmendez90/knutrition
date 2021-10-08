let el = document.querySelector(".navbar-toggler");
let inicio = $("#navBarHeader").offset().top;
let sobrenosotros = $("#sobrenosotros").offset().top;
let tratamientos = $("#tratamientos").offset().top;
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

// On click go to tratamientos page
// tratamientosBtn = () => {
//   location.href = "http://localhost:3000/tratamientos";
// };

// On click scroll to section
$(".navbar-nav").click(function (event) {
  event.preventDefault();
  let element = event.target.innerHTML;
  if (element === "Inicio") {
    scrollfunction(inicio);
  } else if (element === "Sobre nosotros") {
    scrollfunction(sobrenosotros);
  } else if (element === "Tratamientos") {
    scrollfunction(tratamientos);
  } else if (element === "Testimonios") {
    scrollfunction(testimonios);
  } else if (element === "Contáctanos") {
    scrollfunction(contactanos);
  }
});

// On click scroll to section
$(".sideBtns").click(function (event) {
  event.preventDefault();
  let element = event.target.className;
  if (element === "fas fa-bars") {
    scrollfunction(inicio);
  } else if (element === "fas fa-user-alt") {
    scrollfunction(sobrenosotros);
  } else if (element === "fas fa-leaf") {
    scrollfunction(tratamientos);
  } else if (element === "fas fa-comments") {
    scrollfunction(testimonios);
  } else if (element === "fas fa-mobile-alt") {
    scrollfunction(contactanos);
  } else if (element === "fas fa-leaf") {
    tratamientosBtn();
  }
});

// Function that actually scrolls to desired section
function scrollfunction(location) {
  $("html,body").animate(
    {
      scrollTop: location,
    },
    "fast"
  );
}
