"use strict";

// Finder alle elementer med class="book-card"
// (altså alle bøgerne i biblioteket)
const books = document.querySelectorAll(".book-card");

// Går igennem hver bog én ad gangen
books.forEach(function(book) {

  // Henter bogens data-book værdi fra HTML
  // fx data-book="identitet"
  const bookName = book.dataset.book;

  // Hvis bogen ikke har et data-book navn
  // stoppes funktionen for den bog
  if (!bookName) return;

  // Laver en unik localStorage nøgle
  // fx "visited-identitet"
  const storageKey = "visited-" + bookName;

  // Tjekker om bogen allerede er besøgt
  // Hvis værdien i localStorage er "true"
  if (localStorage.getItem(storageKey) === "true") {

    // Tilføjer class="visited"
    // så checkmark og styling vises i CSS
    book.classList.add("visited");
  }

  // Når brugeren klikker på en bog
  book.addEventListener("click", function() {

    // Gemmer bogen som besøgt i localStorage
    // så browseren husker den
    localStorage.setItem(storageKey, "true");

  });

});

// Finder afslut rejsen/linket med id="resetJourney"
const resetJourney = document.querySelector("#resetJourney");

// Koden kører kun, hvis resetJourney findes på siden
if (resetJourney) {

  // Når brugeren klikker på "AFSLUT REJSEN", nulstilles bogmarkeringerne
  resetJourney.addEventListener("click", function () {

    // Går igennem alle nøgler, der er gemt i localStorage
    Object.keys(localStorage).forEach(function (key) {

      // Finder kun de nøgler, der starter med "visited-"
      // Så vi sletter kun bogmarkeringer og ikke andet localStorage-data
      
      if (key.startsWith("visited-")) {
        // Fjerner den gemte markering fra localStorage
        localStorage.removeItem(key);
      }
    });
  });
}

const startExperience = document.querySelector("#startExperience");

if (startExperience) {
  startExperience.addEventListener("click", function () {
    Object.keys(localStorage).forEach(function (key) {
      if (
        key.startsWith("visited-") ||
        key === "identityScores" ||
        key === "finalIdentity"
      ) {
        localStorage.removeItem(key);
      }
    });
  });
}
