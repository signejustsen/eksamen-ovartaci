"use strict";

// Finder alle bøger på biblioteksbordet
// Alle HTML-elementer med class="book-card"
const books = document.querySelectorAll(".book-card");

// Koden kører kun, hvis der findes mindst en bog på siden
if (books.length > 0) {

  // Går igennem hver bog en ad gangen
  books.forEach(function (book) {

    // Henter bogens link fra href-attributten i HTML
    const bookLink = book.getAttribute("href");

    // Hvis en bog mangler href, springes den over
    // Det forhindrer fejl i localStorage
    if (!bookLink) return;

    // Laver en unik localStorage-nøgle til hver bog
    // Fx "visited-identitet"
    const storageKey = "visited-" + bookLink;

    // Tjekker om bogen allerede er besøgt
    // localStorage.getItem() henter den gemte værdi fra browseren
    const isVisited = localStorage.getItem(storageKey);

    // Hvis værdien er "true", betyder det, at bogen tidligere er blevet åbnet
    // Derfor tilføjes class="visited", så CSS kan vise markeringen
    if (isVisited === "true") {
      book.classList.add("visited");
    }

    // Når brugeren klikker på en bog, køres denne funktion
    book.addEventListener("click", function () {

      // Gemmer bogen som besøgt i browserens localStorage
      localStorage.setItem(storageKey, "true");
    });
  });
}

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
