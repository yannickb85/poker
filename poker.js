"use strict"

document.addEventListener('DOMContentLoaded', function() {
  updateMatrix(window.location.hash);
}, false);

window.onhashchange = function() {
  updateMatrix(window.location.hash);
};

function updateMatrix(hash) {
  if (hash) {
    printMatrix(eval(hash.substring(1)));
  }
}

const handRanks = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];

function printMatrix(hands) {
  let indexRow = 0;
  let indexCol = 0;
  let card;

  document.getElementById("legend").style.display = "flex";
  document.getElementById("range-title").innerHTML = hands.title;

  document.getElementById("matrix").innerHTML = "";

  while (indexCol < handRanks.length) {
    while (indexRow < handRanks.length) {

      // Sorting with highest card first (i.e. AK instead of KA or 97s instead of 79s)
      card = (indexCol <= indexRow ? handRanks[indexCol] + handRanks[indexRow] : handRanks[indexRow] + handRanks[indexCol]);

      // Suited
      card += (indexCol < indexRow ? "s" : "");

      let myDiv = document.createElement("div");
      myDiv.setAttribute("id", `hand-${card}`);

      myDiv.setAttribute("class", "matrixCol fold");


      myDiv.innerHTML = card;
      document.getElementById("matrix").appendChild(myDiv);

      if (indexCol == indexRow) {
        myDiv.classList.add("pair");
      }

      indexRow++;
    }
    indexCol++;
    indexRow = 0;
  }

  colorize(hands);
}

function colorize(hands) {
  if (hands.hasOwnProperty("raise")) {
    for (const range of hands.raise) {
      colorizeRange(range, "raise");
    }
  }
  if (hands.hasOwnProperty("call")) {
    for (const range of hands.call) {
      colorizeRange(range, "call");
    }
  }
  if (hands.hasOwnProperty("jam")) {
    for (const range of hands.jam) {
      colorizeRange(range, "jam");
    }
  }
  if (hands.hasOwnProperty("raise-or-call")) {
    for (const range of hands["raise-or-call"]) {
      colorizeRange(range, "raise-or-call");
    }
  }
  if (hands.hasOwnProperty("raise-call-jam")) {
    for (const range of hands["raise-call-jam"]) {
      colorizeRange(range, "raise-call-jam");
    }
  }
  if (hands.hasOwnProperty("raise10-or-call")) {
    for (const range of hands["raise10-or-call"]) {
      colorizeRange(range, "raise10-or-call");
    }
  }
  if (hands.hasOwnProperty("raise25-or-call")) {
    for (const range of hands["raise25-or-call"]) {
      colorizeRange(range, "raise25-or-call");
    }
  }
  if (hands.hasOwnProperty("raise75-or-call")) {
    for (const range of hands["raise75-or-call"]) {
      colorizeRange(range, "raise75-or-call");
    }
  }
  if (hands.hasOwnProperty("raise90-or-call")) {
    for (const range of hands["raise90-or-call"]) {
      colorizeRange(range, "raise90-or-call");
    }
  }
  if (hands.hasOwnProperty("raise-or-jam")) {
    for (const range of hands["raise-or-jam"]) {
      colorizeRange(range, "raise-or-jam");
    }
  }
  if (hands.hasOwnProperty("raise10-or-fold")) {
    for (const range of hands["raise10-or-fold"]) {
      colorizeRange(range, "raise10-or-fold");
    }
  }
  if (hands.hasOwnProperty("raise25-or-fold")) {
    for (const range of hands["raise25-or-fold"]) {
      colorizeRange(range, "raise25-or-fold");
    }
  }
  if (hands.hasOwnProperty("raise75-or-fold")) {
    for (const range of hands["raise75-or-fold"]) {
      colorizeRange(range, "raise75-or-fold");
    }
  }
  if (hands.hasOwnProperty("raise-or-fold")) {
    for (const range of hands["raise-or-fold"]) {
      colorizeRange(range, "raise-or-fold");
    }
  }
  if (hands.hasOwnProperty("call10-or-fold")) {
    for (const range of hands["call10-or-fold"]) {
      colorizeRange(range, "call10-or-fold");
    }
  }
  if (hands.hasOwnProperty("call25-or-fold")) {
    for (const range of hands["call25-or-fold"]) {
      colorizeRange(range, "call25-or-fold");
    }
  }
  if (hands.hasOwnProperty("call75-or-fold")) {
    for (const range of hands["call75-or-fold"]) {
      colorizeRange(range, "call75-or-fold");
    }
  }
  if (hands.hasOwnProperty("call90-or-fold")) {
    for (const range of hands["call90-or-fold"]) {
      colorizeRange(range, "call90-or-fold");
    }
  }
  if (hands.hasOwnProperty("call-or-fold")) {
    for (const range of hands["call-or-fold"]) {
      colorizeRange(range, "call-or-fold");
    }
  }
  if (hands.hasOwnProperty("raise-call-or-fold")) {
    for (const range of hands["raise-call-or-fold"]) {
      colorizeRange(range, "raise-call-or-fold");
    }
  }
  if (hands.hasOwnProperty("raise10-call10-or-fold")) {
    for (const range of hands["raise10-call10-or-fold"]) {
      colorizeRange(range, "raise10-call10-or-fold");
    }
  }
  if (hands.hasOwnProperty("raise10-call25-or-fold")) {
    for (const range of hands["raise10-call25-or-fold"]) {
      colorizeRange(range, "raise10-call25-or-fold");
    }
  }
  if (hands.hasOwnProperty("raise10-call50-or-fold")) {
    for (const range of hands["raise10-call50-or-fold"]) {
      colorizeRange(range, "raise10-call50-or-fold");
    }
  }
  if (hands.hasOwnProperty("raise25-call25-or-fold")) {
    for (const range of hands["raise25-call25-or-fold"]) {
      colorizeRange(range, "raise25-call25-or-fold");
    }
  }
  if (hands.hasOwnProperty("raise25-call10-or-fold")) {
    for (const range of hands["raise25-call10-or-fold"]) {
      colorizeRange(range, "raise25-call10-or-fold");
    }
  }
  if (hands.hasOwnProperty("raise50-call10-or-fold")) {
    for (const range of hands["raise50-call10-or-fold"]) {
      colorizeRange(range, "raise50-call10-or-fold");
    }
  }
  if (hands.hasOwnProperty("raise25-call50-or-fold")) {
    for (const range of hands["raise25-call50-or-fold"]) {
      colorizeRange(range, "raise25-call50-or-fold");
    }
  }
  if (hands.hasOwnProperty("raise50-call25-or-fold")) {
    for (const range of hands["raise50-call25-or-fold"]) {
      colorizeRange(range, "raise50-call25-or-fold");
    }
  }
  if (hands.hasOwnProperty("raise75-call10-or-fold")) {
    for (const range of hands["raise75-call10-or-fold"]) {
      colorizeRange(range, "raise75-call10-or-fold");
    }
  }
  if (hands.hasOwnProperty("jam-or-call")) {
    for (const range of hands["jam-or-call"]) {
      colorizeRange(range, "jam-or-call");
    }
  }
  if (hands.hasOwnProperty("jam-or-fold")) {
    for (const range of hands["jam-or-fold"]) {
      colorizeRange(range, "jam-or-fold");
    }
  }
  if (hands.hasOwnProperty("jam-call-or-fold")) {
    for (const range of hands["jam-call-or-fold"]) {
      colorizeRange(range, "jam-call-or-fold");
    }
  }
  if (hands.hasOwnProperty("jam10-or-call")) {
    for (const range of hands["jam10-or-call"]) {
      colorizeRange(range, "jam10-or-call");
    }
  }
  if (hands.hasOwnProperty("jam25-or-call")) {
    for (const range of hands["jam25-or-call"]) {
      colorizeRange(range, "jam25-or-call");
    }
  }
  if (hands.hasOwnProperty("jam75-or-call")) {
    for (const range of hands["jam75-or-call"]) {
      colorizeRange(range, "jam75-or-call");
    }
  }
  if (hands.hasOwnProperty("jam90-or-call")) {
    for (const range of hands["jam90-or-call"]) {
      colorizeRange(range, "jam90-or-call");
    }
  }
  if (hands.hasOwnProperty("jam10-call10-or-fold")) {
    for (const range of hands["jam10-call10-or-fold"]) {
      colorizeRange(range, "jam10-call10-or-fold");
    }
  }
  if (hands.hasOwnProperty("jam10-call25-or-fold")) {
    for (const range of hands["jam10-call25-or-fold"]) {
      colorizeRange(range, "jam10-call25-or-fold");
    }
  }
  if (hands.hasOwnProperty("jam25-call25-or-fold")) {
    for (const range of hands["jam25-call25-or-fold"]) {
      colorizeRange(range, "jam25-call25-or-fold");
    }
  }
  if (hands.hasOwnProperty("jam50-call10-or-fold")) {
    for (const range of hands["jam50-call10-or-fold"]) {
      colorizeRange(range, "jam50-call10-or-fold");
    }
  }
  if (hands.hasOwnProperty("jam50-call25-or-fold")) {
    for (const range of hands["jam50-call25-or-fold"]) {
      colorizeRange(range, "jam50-call25-or-fold");
    }
  }
  if (hands.hasOwnProperty("jam10-or-fold")) {
    for (const range of hands["jam10-or-fold"]) {
      colorizeRange(range, "jam10-or-fold");
    }
  }
}

function colorizeRange(range, action) {

  // Groups (22-77, A2s-A5s)
  if (range.includes("-")) {
    // Pairs (22-77)
    if (range[0] == range[1] && range[3] == range[4]) {
      let lowPairRankIndex = handRanks.indexOf(range[0]);
      let highPairRankIndex = handRanks.indexOf(range[3]);

      for (let i = lowPairRankIndex; i >= highPairRankIndex; i--) {
        addColor("" + handRanks[i]+handRanks[i], action);
      }
    } else {

      // Unpaired (A2s-A5s)
      let suited = false;
      if (range[2] == "s") {
        suited = true;
      }
      let lowRankIndex = handRanks.indexOf(range[1]);
      let highRankIndex = handRanks.indexOf(range[(suited) ? 5 : 4]);
      let highCard = range[0];
      let highCardIndex = handRanks.indexOf(highCard);
      for (let i = lowRankIndex; i >= highRankIndex; i--) {
        addColor("" + highCard+handRanks[i] + ((suited) ? "s" : ""), action);
      }
    }
  } else {

    // Greater than (J9s+, AT+, etc.)
    if (range[range.length - 1] == "+") {
      // Pairs
      if (range[0] == range[1]) {
        let rankIndex = handRanks.indexOf(range[0]);
        for (let i = rankIndex; i >= 0; i--) {
          addColor("" + handRanks[i]+handRanks[i], action);
        }
      } else {
        let suited = false;
        if (range[2] == "s") {
          suited = true;
        }
        let rankIndex = handRanks.indexOf(range[1]);
        let highCard = range[0];
        let highCardIndex = handRanks.indexOf(highCard);
        for (let i = rankIndex; i > highCardIndex; i--) {
          addColor("" + highCard+handRanks[i] + ((suited) ? "s" : ""), action);
        }
      }
    } else {
      addColor(range, action);
    }
  }
}

function addColor(hand, action) {
  document.getElementById(`hand-${hand}`).classList.remove("fold");
  document.getElementById(`hand-${hand}`).classList.add(action);
}
