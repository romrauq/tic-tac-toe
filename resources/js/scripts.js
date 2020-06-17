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
let winner = "";

// A for loop listening for clicks on square divs and fires "PlayMove()" function
for (i = 0; i < allAreas.length; i++) {
   // areaArray[i].addEventListener("click", playMove);
   // allAreas[i].addEventListener("click", winCondition);
   // allAreas[i].addEventListener("click", modalOutput);
   allAreas[i].addEventListener("click", playMove);
}

//A funtion to alternate the input entering "X" & "O" within the play squares:
function playMove(e) {
   // for (i = 0; i < allAreas.length; i++) {
   if (playCount % 2 == 0 && e.target.innerText == "") {
      e.target.innerText = "X";
      playCount++;
      currentPlayer.innerText = "Player Two";
   } else if (playCount % 2 != 0 && e.target.innerText == "") {
      e.target.innerText = "O";
      playCount++;
      currentPlayer.innerText = "Player One";
   }
   // }
   console.log(playCount);
   console.log("winner is... " + winner);

   winCondition();
   showWinner();
}

//Function to check conditions if there is a winner or game ended in a draw:
function winCondition() {
   if (one.innerHTML == "X" && two.innerHTML == "X" && three.innerHTML == "X") {
      // alert("Player 1 Wins!!! [win con:'X.123']");
      winner = "player1";
   } else if (
      one.innerHTML == "O" &&
      two.innerHTML == "O" &&
      three.innerHTML == "O"
   ) {
      // alert("Player 2 Wins!!! [win con:'O.123']");
      winner = "player2";
   }

   if (four.innerHTML == "X" && five.innerHTML == "X" && six.innerHTML == "X") {
      // alert("Player 1 Wins!!! [win con:'X.456']");
      winner = "player1";
   } else if (
      four.innerHTML == "O" &&
      five.innerHTML == "O" &&
      six.innerHTML == "O"
   ) {
      // alert("Player 2 Wins!!! [win con:'0.456']");
      winner = "player2";
   }

   if (
      seven.innerHTML == "X" &&
      eight.innerHTML == "X" &&
      nine.innerHTML == "X"
   ) {
      // alert("Player 1 Wins!!! [win con:'X.789']");
      winner = "player1";
   } else if (
      seven.innerHTML == "O" &&
      eight.innerHTML == "O" &&
      nine.innerHTML == "O"
   ) {
      // alert("Player 2 Wins!!! [win con:'O.789']");
      winner = "player2";
   }

   if (
      one.innerHTML == "X" &&
      four.innerHTML == "X" &&
      seven.innerHTML == "X"
   ) {
      // alert("Player 1 Wins!!! [win con:'X.147']");
      winner = "player1";
   } else if (
      one.innerHTML == "O" &&
      four.innerHTML == "O" &&
      seven.innerHTML == "O"
   ) {
      // alert("Player 2 Wins!!! [win con:'O.147']");
      winner = "player2";
   }

   if (
      two.innerHTML == "X" &&
      five.innerHTML == "X" &&
      eight.innerHTML == "X"
   ) {
      // alert("Player 1 Wins!!! [win con:'X.258']");
      winner = "player1";
   } else if (
      two.innerHTML == "O" &&
      five.innerHTML == "O" &&
      eight.innerHTML == "O"
   ) {
      // alert("Player 2 Wins!!! [win con:'O.258']");
      winner = "player2";
   }

   if (
      three.innerHTML == "X" &&
      six.innerHTML == "X" &&
      nine.innerHTML == "X"
   ) {
      // alert("Player 1 Wins!!! [win con:'X.369']");
      winner = "player1";
   } else if (
      three.innerHTML == "O" &&
      six.innerHTML == "O" &&
      nine.innerHTML == "O"
   ) {
      // alert("Player 2 Wins!!! [win con:'O.369']");
      winner = "player2";
   }
   if (one.innerHTML == "X" && five.innerHTML == "X" && nine.innerHTML == "X") {
      // alert("Player 1 Wins!!! [win con:'X.156']");
      winner = "player1";
   } else if (
      one.innerHTML == "O" &&
      five.innerHTML == "O" &&
      nine.innerHTML == "O"
   ) {
      // alert("Player 2 Wins!!! [win con:'O.159']");
      winner = "player2";
   }

   if (
      three.innerHTML == "X" &&
      five.innerHTML == "X" &&
      seven.innerHTML == "X"
   ) {
      // alert("Player 1 Wins!!! [win con:'X.357']");
      winner = "player1";
   } else if (
      three.innerHTML == "O" &&
      five.innerHTML == "O" &&
      seven.innerHTML == "O"
   ) {
      // alert("Player 2 Wins!!! [win con:'O.357']");
      winner = "player2";
   }

   if (playCount == 9) {
      // alert("Draw! Try Again");
      winner = "draw";
   }
}

function showWinner() {
   if (winner == "player1") {
      //Player 1 wins!
      modalText.innerText = "Player One Wins!!!";
      modal.style.display = "block";
   } else if (winner == "player2") {
      //Player 2 wins!
      modalText.innerText = "Player Two Wins!!!";
      modal.style.display = "block";
   } else if (winner == "draw") {
      //No winner
      modalText.innerText = "Draw, No winner :(";
      modal.style.display = "block";
   }
}
