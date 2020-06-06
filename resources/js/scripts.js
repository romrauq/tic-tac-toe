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
   allAreas[i].addEventListener("click", playMove);
   // allAreas[i].addEventListener("click", winCondition);
   // allAreas[i].addEventListener("click", modalOutput);
}

//Funtion to alternate the input of texts "X" & "O" within th divs:
function playMove(e) {
   for (i = 0; i < allAreas.length; i++) {
      if (playCount % 2 === 0) {
         e.target.innerText = "X";
         // currentPlayer.innerText = "Player 1";
      } else {
         e.target.innerText = "O";
         // currentPlayer.innerText = "Player 2";
      }
   }
   playCount++;
   console.log(playCount);
}

// function winCondition() {
//    if (one.innerText && two.innerText && three.innerText === "X") {
//       alert("Player 1 Wins!!! [win con:'X.123']");
//    } else if (one.innerText && two.innerText && three.innerText === "O") {
//       alert("Player 2 Wins!!! [win con:'O.123']");
//    }

//    if (four.innerText && five.innerText && six.innerText === "X") {
//       alert("Player 1 Wins!!! [win con:'X.456']");
//    } else if (four.innerText && five.innerText && six.innerText === "O") {
//       alert("Player 2 Wins!!! [win con:'0.456']");
//    }

//    if (seven.innerText && eight.innerText && nine.innerText === "X") {
//       alert("Player 1 Wins!!! [win con:'X.789']");
//    } else if (seven.innerText && eight.innerText && nine.innerText === "O") {
//       alert("Player 2 Wins!!! [win con:'O.789']");
//    }

//    if (one.innerText && four.innerText && seven.innerText === "X") {
//       alert("Player 1 Wins!!! [win con:'X.147']");
//    } else if (one.innerText && four.innerText && seven.innerText === "O") {
//       alert("Player 2 Wins!!! [win con:'O.147']");
//    }

//    if (two.innerText && five.innerText && eight.innerText === "X") {
//       alert("Player 1 Wins!!! [win con:'X.258']");
//    } else if (one.innerText && four.innerText && seven.innerText === "O") {
//       alert("Player 2 Wins!!! [win con:'O.258']");
//    }

//    if (three.innerText && six.innerText && nine.innerText === "X") {
//       alert("Player 1 Wins!!! [win con:'X.369']");
//    } else if (three.innerText && six.innerText && nine.innerText === "O") {
//       alert("Player 2 Wins!!! [win con:'O.369']");
//    }
//    if (one.innerText && five.innerText && nine.innerText === "X") {
//       alert("Player 1 Wins!!! [win con:'X.156']");
//    } else if (one.innerText && five.innerText && nine.innerText === "O") {
//       alert("Player 2 Wins!!! [win con:'O.159']");
//    }

//    if (three.innerText && five.innerText && seven.innerText === "X") {
//       alert("Player 1 Wins!!! [win con:'X.357']");
//    } else if (one.innerText && five.innerText && seven.innerText === "O") {
//       alert("Player 2 Wins!!! [win con:'O.357']");
//    }

//    function modalOutput() {
//       if (winCondition === "player1") {
//          //Player 1 wins!
//          modal.style.diplay = "block";
//          modalText.innerText = "Player One Wins!!!";
//       } else if (winCondition === "player2") {
//          //Player 2 wins!
//          modal.style.diplay = "block";
//          modalText.innerText = "Player Two Wins!!!";
//       } else if (playCount === 9) {
//          alert("No Winner, Draw!");
//       }
//    }
// }
