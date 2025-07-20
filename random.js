"use strict"

document.addEventListener("DOMContentLoaded", function() {
    const randomNumberDiv = document.getElementById("randomNumberDiv");
    const toggleButton = document.getElementById("toggleButton");
    let autoRefresh = true;
    let interval;
    let refreshInternval = 2500;
  
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

    function startAutoRefresh() {
      interval = setInterval(updateRandomNumber, refreshInternval);
    }

    function stopAutoRefresh() {
        clearInterval(interval);
    }

    toggleButton.addEventListener("click", function() {
        autoRefresh = !autoRefresh;
        if (autoRefresh) {
            startAutoRefresh();
            toggleButton.innerText = "Disable Auto Refresh";
        } else {
            stopAutoRefresh();
            toggleButton.innerText = "Enable Auto Refresh";
        }
    });

    updateRandomNumber();
    startAutoRefresh();
  
    randomNumberDiv.addEventListener("click", updateRandomNumber);
  });