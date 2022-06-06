function myFunction() {
  var x = document.getElementById("navBar");
  if (x.className === "topNav") {
    x.className += " responsive";
  } else {
    x.className = "topNav";
  }
}
