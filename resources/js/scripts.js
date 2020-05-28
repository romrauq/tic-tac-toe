// Assigning DOM elements to variables:
Area1 = document.querySelector("#one");
Area2 = document.querySelector("#two");
Area3 = document.querySelector("#three");
Area4 = document.querySelector("#four");
Area5 = document.querySelector("#five");
Area6 = document.querySelector("#six");
Area7 = document.querySelector("#seven");
Area8 = document.querySelector("#eight");
Area9 = document.querySelector("#nine");
let allAreas = document.querySelectorAll(".inner-square");
// areaArray = [Area1, Area2, Area3, Area4, Area5, Area6, Area7, Area8, Area9];

for (i = 0; i < allAreas.length; i++) {
  // areaArray[i].addEventListener("click", playMove);
  allAreas[i].addEventListener("click", playMove);
}

function playMove(e) {
  //   alert(e.target.id);
  e.target.textContent = "Success!";
}
