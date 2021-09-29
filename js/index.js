$(".navbar-collapse a").click(function () {
  $(".navbar-collapse").collapse("hide");
});

$("#searchBtn").click(function (event) {
  event.preventDefault();
  let inputCity = $("#inputCity").val().trim();
  let chooseState = $("#inputState").val();
  let zipcode = $("#inputZip").val();
  let propType;
  let propVal = document.getElementsByName("gridRadios");

  for (let i = 0; i < propVal.length; i++) {
    if (propVal[i].checked) propType = propVal[i].value;
  }

  apiCall(inputCity, chooseState, zipcode, propType);
});

function apiCall( inputCity, chooseState, zipcode, propType) {
  console.log(inputCity, chooseState, zipcode, propType);
}
