"use strict"

document.addEventListener("DOMContentLoaded", function() {
    const randomNumberDiv = document.getElementById("randomNumberDiv");
  
    function generateRandomNumber() {
      return Math.floor(Math.random() * 101); // Generates a random number between 0 and 100
    }
  
    function updateRandomNumber() {
      const randomNum = generateRandomNumber();
      randomNumberDiv.innerText = randomNum;

      if (randomNum >= 50) {
        randomNumberDiv.style.backgroundColor = "black";
        randomNumberDiv.style.color = "white";
      } else {
        randomNumberDiv.style.backgroundColor = "white";
        randomNumberDiv.style.color = "black";
      }
    }

    updateRandomNumber();
  
    randomNumberDiv.addEventListener("click", updateRandomNumber);
  });