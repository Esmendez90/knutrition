console.log("I'm index.js. Ready and loaded!");

let el = document.querySelector(".navbar-toggler");
let inicio = $("#navBarHeader").offset().top;
let sobrenosotros = $("#sobrenosotros").offset().top;
let tratamientos = $("#tratamientos").offset().top;
let testimonios = $("#testimonios").offset().top;
let contactanos = $("#contáctanos").offset().top;

$("#navBarHeader").click(function () {
  if (el.ariaExpanded === "true") {
    $("main").css("display", "none");
  } else {
    $("main").css("display", "block");
  }
});

// On click scroll to section (from menu)
$(".navbar-nav").click(function (event) {
  event.preventDefault();
  let element = event.target.className.split(" ").join("-").toLowerCase();

  if (element === "nav-link-inicio") {
    scrollfunction(inicio);
  } else if (element === "nav-link-sobre-nosotros") {
    scrollfunction(sobrenosotros);
  } else if (element === "nav-link-tratamientos") {
    scrollfunction(tratamientos);
  } else if (element === "nav-link-testimonios") {
    scrollfunction(testimonios);
  } else if (element === "nav-link-contactanos") {
    scrollfunction(contactanos);
  }
});

// On click scroll to section (side btns)
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
  $(".navbar-collapse").collapse("hide");

  $("html,body").animate(
    {
      scrollTop: location,
    },
    "fast"
  );
}

// handles toggle - arrow for Tratamientos menu
$("#arrowList").click(function (event) {
  event.preventDefault();
  this.classList.toggle("active");
 // console.log(this);
  let tratamientosList = document.getElementById("list-tratamientos");
 // console.log(tratamientosList);
  if (tratamientosList.style.display === "none") {
    tratamientosList.style.display = "block";
    $(".fa-chevron-down").css("transform", "rotate(180deg)");
  } else {
    tratamientosList.style.display = "none";
    $(".fa-chevron-down").css("transform", "rotate(0deg)");
  }
});

$("#list-tratamientos").click(function (event) {
  event.preventDefault();
  let element = event.target.innerHTML.toLowerCase();
  console.log(element);
  if (
    element === "nutricion" ||
    element === "cutis" ||
    element === "cuerpo" ||
    element === "laser" ||
    element === "especiales"
  ) {
    renderPage(element);
  }
});

renderPage = (routeName) => {
  console.log(routeName);
  location.href = `http://localhost:3000/${routeName}`;
};
