"use strict";

const answerButtons = document.querySelectorAll(".answer-btn");

answerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const identity = button.dataset.identity;

    let scores = JSON.parse(localStorage.getItem("identityScores")) || {
      soegende: 0,
      skabende: 0,
      droemmende: 0
    };

    scores[identity]++;

    localStorage.setItem("identityScores", JSON.stringify(scores));

    window.location.href = "dit-svar-er-gemt.html";
  });
});


