var sidenavbar = document.querySelector(".side-navbar");
function shownavbar() {
  sidenavbar.style.left = "0";
}
function closenavbar() {
  sidenavbar.style.left = "-60%";
}

var productcontainer = document.getElementById("products");
var products = productcontainer.querySelectorAll("div");
var search = document.getElementById("search");

search.addEventListener("keyup", function () {
  var enteredtext = event.target.value.toUpperCase();

  for (count = 0; count < products.length; count = count + 1) {
    var productsname = products[count].querySelector("p").textContent;
    if (productsname.toUpperCase().indexOf(enteredtext) < 0) {
      products[count].style.display = "none";
    } else {
      products[count].style.display = "block";
    }
  }
});
