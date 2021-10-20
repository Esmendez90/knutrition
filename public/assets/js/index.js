let el = document.querySelector(".navbar-toggler");
let inicio = document.getElementById("navBarHeader");
let sobrenosotros = document.getElementById("sobrenosotros");
let tratamientos = document.getElementById("tratamientos");
let testimonios = document.getElementById("testimonios");
let contactanos = document.getElementById("contactanos");
let locationArr = [
  "inicio",
  "sobrenosotros",
  "tratamientos",
  "testimonios",
  "contactanos",
];
let tratamientosMenu = ["nutricion", "cutis", "cuerpo", "laser", "especiales"];

window.onload = () =>
  sobrenosotros
    ? ((locationArr = [
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
      ]),
      exists())
    : goToHome();

exists = () => {
 // console.log("si existo wey!");
  $(".navbar-nav").click(function (event) {
    event.preventDefault();
    let element = event.target.className.split(" ")[1];
    goToSection(element);
  });
};

goToSection = (sectionName) => {
  locationArr.filter((obj) => {
    if (sectionName === obj.varname) {
      scrollfunction(obj.locationOnPage);
    } else if (sectionName === "fa-chevron-down") {
      downArrowMenu();
    } else {
      console.log();
    }
  });
};

// Function that actually scrolls to desired section
scrollfunction = (location) => {
  $(".navbar-collapse").collapse("hide");
  $("html,body").animate(
    {
      scrollTop: location,
    },
    "fast"
  );
};

// Handles on click event in other pages other than the homepage
goToHome = () => {
  //console.log(window.location.pathname);
  $(".navbar-nav").click(function (event) {
    event.preventDefault();
    let element = event.target.className.split(" ")[1];
    //console.log(element);
    locationArr.filter((obj) => {
      if (element === obj) {
        location.href = `http://localhost:3000/#${element}`;
      } else if (element === "fa-chevron-down") {
        downArrowMenu();
      } else {
        console.log();
      }
    });
  });
};

// Handles toggle - arrow for Tratamientos menu
downArrowMenu = () => {
  let tratamientosList = document.getElementById("list-tratamientos");
  tratamientosList.style.display === "none"
    ? ((tratamientosList.style.display = "block"),
      $(".fa-chevron-down").css("transform", "rotate(180deg)"))
    : ((tratamientosList.style.display = "none"),
      $(".fa-chevron-down").css("transform", "rotate(0deg)"));
};

// Renders tratamiento page
renderPage = (routeName) => {
 // console.log(routeName);
  location.href = `http://localhost:3000/${routeName}`;
};

// On click event to direct to a tratamiento page
$("#list-tratamientos").click(function (event) {
  event.preventDefault();
  let element = event.target.innerHTML.toLowerCase();
 // console.log(element);
  tratamientosMenu.filter((tratamiento) => {
    if (element === tratamiento) {
      renderPage(element);
    }
  });
});

// Handles navbar display: none or block
$("#navBarHeader").click(function () {
  if (el.ariaExpanded === "true") {
    $("main").css("display", "none");
    $(".rowContact").css("display", "none");
  } else {
    $("main").css("display", "block");
    $(".rowContact").css("display", "block");
  }
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
