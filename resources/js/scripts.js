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

modal = document.querySelector("#modal");
modalText = document.querySelector("#modal-text");
currentPlayer = document.querySelector("#current-player");
let playCount = 0;

// A for loop that listens to all square divs and fires "PlayMove()" function
for (i = 0; i < allAreas.length; i++) {
   // areaArray[i].addEventListener("click", playMove);
   // allAreas[i].addEventListener("click", winCondition);
   // allAreas[i].addEventListener("click", modalOutput);
   allAreas[i].addEventListener("click", playMove);
}

//Funtion to alternate the input entering "X" & "O" within the play squares:
function playMove(e) {
   for (i = 0; i < allAreas.length; i++) {
      if (playCount % 2 == 0) {
         // currentPlayer.innerText = "Player 1";
         e.target.innerText = "X";
      } else {
         // currentPlayer.innerText = "Player 2";
         e.target.innerText = "O";
      }
   }
   playCount++;
   console.log(playCount);
   winCondition();
}

//Function to chect if there is a winner or game ended in a draw:
function winCondition() {
   if (one.innerHTML == "X" && two.innerHTML == "X" && three.innerHTML == "X") {
      alert("Player 1 Wins!!! [win con:'X.123']");
   } else if (
      one.innerHTML == "O" &&
      two.innerHTML == "O" &&
      three.innerHTML == "O"
   ) {
      alert("Player 2 Wins!!! [win con:'O.123']");
   }

   if (four.innerHTML == "X" && five.innerHTML == "X" && six.innerHTML == "X") {
      alert("Player 1 Wins!!! [win con:'X.456']");
   } else if (
      four.innerHTML == "O" &&
      five.innerHTML == "O" &&
      six.innerHTML == "O"
   ) {
      alert("Player 2 Wins!!! [win con:'0.456']");
   }

   if (
      seven.innerHTML == "X" &&
      eight.innerHTML == "X" &&
      nine.innerHTML == "X"
   ) {
      alert("Player 1 Wins!!! [win con:'X.789']");
   } else if (
      seven.innerHTML == "O" &&
      eight.innerHTML == "O" &&
      nine.innerHTML == "O"
   ) {
      alert("Player 2 Wins!!! [win con:'O.789']");
   }

   if (
      one.innerHTML == "X" &&
      four.innerHTML == "X" &&
      seven.innerHTML == "X"
   ) {
      alert("Player 1 Wins!!! [win con:'X.147']");
   } else if (
      one.innerHTML == "O" &&
      four.innerHTML == "O" &&
      seven.innerHTML == "O"
   ) {
      alert("Player 2 Wins!!! [win con:'O.147']");
   }

   if (
      two.innerHTML == "X" &&
      five.innerHTML == "X" &&
      eight.innerHTML == "X"
   ) {
      alert("Player 1 Wins!!! [win con:'X.258']");
   } else if (
      two.innerHTML == "O" &&
      five.innerHTML == "O" &&
      eight.innerHTML == "O"
   ) {
      alert("Player 2 Wins!!! [win con:'O.258']");
   }

   if (
      three.innerHTML == "X" &&
      six.innerHTML == "X" &&
      nine.innerHTML == "X"
   ) {
      alert("Player 1 Wins!!! [win con:'X.369']");
   } else if (
      three.innerHTML == "O" &&
      six.innerHTML == "O" &&
      nine.innerHTML == "O"
   ) {
      alert("Player 2 Wins!!! [win con:'O.369']");
   }
   if (one.innerHTML == "X" && five.innerHTML == "X" && nine.innerHTML == "X") {
      alert("Player 1 Wins!!! [win con:'X.156']");
   } else if (
      one.innerHTML == "O" &&
      five.innerHTML == "O" &&
      nine.innerHTML == "O"
   ) {
      alert("Player 2 Wins!!! [win con:'O.159']");
   }

   if (
      three.innerHTML == "X" &&
      five.innerHTML == "X" &&
      seven.innerHTML == "X"
   ) {
      alert("Player 1 Wins!!! [win con:'X.357']");
   } else if (
      three.innerHTML == "O" &&
      five.innerHTML == "O" &&
      seven.innerHTML == "O"
   ) {
      alert("Player 2 Wins!!! [win con:'O.357']");
   }

   if (playCount == 9) {
      alert("No Winner, Draw!");
   }

   // function modalOutput() {
   //    if (winCondition == "player1") {
   //       //Player 1 wins!
   //       modal.style.diplay = "block";
   //       modalText.innerText = "Player One Wins!!!";
   //    } else if (winCondition == "player2") {
   //       //Player 2 wins!
   //       modal.style.diplay = "block";
   //       modalText.innerText = "Player Two Wins!!!";
   //    } else if (playCount == 9) {
   //       alert("No Winner, Draw!");
   //    }
   // }
}
