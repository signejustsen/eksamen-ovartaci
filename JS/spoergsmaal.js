"use strict";

// Finder alle svar-knapper
const answerButtons = document.querySelectorAll(".answer-btn");

// Går igennem hver knap
answerButtons.forEach(function(button) {

  // Når brugeren klikker på et svar
  button.addEventListener("click", function() {

    // Finder hvilken identitet svaret giver point til
    const identity = button.dataset.identity;

    // Henter tidligere scores fra localStorage
    let scores = JSON.parse(localStorage.getItem("identityScores")) || {
      soegende: 0, // number
      skabende: 0, // number
      droemmende: 0 // number
    };

    // Giver +1 point til den valgte identitet
    scores[identity]++;

    // Gemmer de nye scores i localStorage
    localStorage.setItem("identityScores", JSON.stringify(scores));

    // Sender brugeren videre til "Dit svar er gemt"
    window.location.href = "dit-svar-er-gemt.html";

  });

});

const startButton = document.getElementById("startExperience");

startButton.addEventListener("click", function() {

  localStorage.removeItem("identityScores");
  localStorage.removeItem("finalIdentity");

});