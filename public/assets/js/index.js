let el = document.querySelector(".navbar-toggler");
let inicio = document.getElementById("navBarHeader");
let sobrenosotros = document.getElementById("sobrenosotros");
let tratamientos = document.getElementById("tratamientos");
let testimonios = document.getElementById("testimonios");
let contactanos = document.getElementById("contactanos");
let locationArr;

window.onload = function () {
  if (sobrenosotros) {
    locationArr = [
      {
        varname: "inicio",
        locationOnPage: $("#navBarHeader").offset().top,
      },
      {
        varname: "sobrenosotros",
        locationOnPage: $("#sobrenosotros").offset().top,
      },
      {
        varname: "tratamientos",
        locationOnPage: $("#tratamientos").offset().top,
      },
      {
        varname: "testimonios",
        locationOnPage: $("#testimonios").offset().top,
      },
      {
        varname: "contactanos",
        locationOnPage: $("#contactanos").offset().top,
      },
    ];
    //console.log(locationArr);
  } else {
    console.log("Id does not exist on this page!");
  }
};

$("#navBarHeader").click(function () {
  if (el.ariaExpanded === "true") {
    $("main").css("display", "none");
    $(".rowContact").css("display", "none");
  } else {
    $("main").css("display", "block");
    $(".rowContact").css("display", "block");
  }
});

// On click scroll to section (from menu)
$(".navbar-nav").click(function (event) {
  event.preventDefault();
  let element = event.target.className.split(" ")[1];
  console.log(element);
  locationArr.filter((obj) => {
    element === obj.varname
      ? scrollfunction(obj.locationOnPage)
      : console.log();
  });
});

// On click scroll to section (side btns)
$(".sideBtns").click(function (event) {
  event.preventDefault();
  let element = event.target.className.split(" ")[2];
  //console.log(element);
  locationArr.filter((obj) => {
    element === obj.varname
      ? scrollfunction(obj.locationOnPage)
      : console.log();
  });
});

// Function that actually scrolls to desired section
function scrollfunction(location) {
  //console.log(location);
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
  let tratamientosList = document.getElementById("list-tratamientos");
  tratamientosList.style.display === "none"
    ? ((tratamientosList.style.display = "block"),
      $(".fa-chevron-down").css("transform", "rotate(180deg)"))
    : ((tratamientosList.style.display = "none"),
      $(".fa-chevron-down").css("transform", "rotate(0deg)"));
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
