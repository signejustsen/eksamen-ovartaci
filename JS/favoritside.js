"use strict";


// GEMMER BOG I LOCALSTORAGE OG FØJER TIL FAVORITLISTE + OVERLAY

// Finder hjertet på siden
const favoritKnap = document.querySelector(".favorit-knap");

// Finder overlayet i HTML
const favoritOverlay = document.querySelector("#favoritOverlay");


// HVIS der findes et hjerte på siden
if (favoritKnap) {

    // Lytter efter klik på hjerte
  favoritKnap.addEventListener("click", function () {

    // Henter bogens ID fra data-book-id attributen
    const bookId = favoritKnap.dataset.bookId;

    // Henter tidligere gemte favoritter fra localStorage
    // Hvis der ikke findes nogen, oprettes et tomt array
    let favoritIds = JSON.parse(localStorage.getItem("favoritBooks")) || [];

    // Tjekker om bogen allerede er gemt som favorit
    if (!favoritIds.includes(bookId)) {

      // Tilføjer bogens id til favoritlisten
      favoritIds.push(bookId);
    }

    // Gemmer den opdaterede favoritliste i localStorage
    localStorage.setItem("favoritBooks", JSON.stringify(favoritIds));

    // Ændrer hjertet, så brugeren kan se at bogen er gemt
    favoritKnap.textContent = "♥";

    // Viser overlay
    if (favoritOverlay) {
    favoritOverlay.classList.add("vis");
    
    // Sætter timeout funktion
    setTimeout(function () {
        // Overlay forsvinder ved at fjerne klassen "vis" efter 1,6 sekunder
        favoritOverlay.classList.remove("vis");
    }, 1600);
    }
  });
}


// VISER FAVORITBØGERNE PÅ FAVORITSIDEN

// Finder containeren på favoritsiden
const favoritListe = document.querySelector("#favoritListe");

// Kører kun hvis vi befinder os på favoritsiden
if (favoritListe) {

  // Henter alle gemte favorit-id'er fra localStorage
  const favoritIds = JSON.parse(localStorage.getItem("favoritBooks")) || [];

  // Filtrerer bøgerne, så kun favoritterne bliver valgt
  const favoritBooks = books.filter(function (book) {

    // includes() undersøger om bogens id findes i favoritlisten
    return favoritIds.includes(book.id);
  });


  // Omdanner favoritbøgerne til HTML
  favoritListe.innerHTML = favoritBooks
    .map(function (book) {
      return `
      <article class="favorit-bog">
        <img src="${book.img}" alt="${book.titel}">
      </article>
    `;
    })

    // Samler alle HTML-strenge til én lang streng
    .join("");
}