"use strict";

const favoritKnap = document.querySelector(".favorit-knap");

if (favoritKnap) {
  favoritKnap.addEventListener("click", function () {
    const bookId = favoritKnap.dataset.bookId;

    let favoritIds = JSON.parse(localStorage.getItem("favoritBooks")) || [];

    if (!favoritIds.includes(bookId)) {
      favoritIds.push(bookId);
    }

    localStorage.setItem("favoritBooks", JSON.stringify(favoritIds));

    favoritKnap.textContent = "♥";
  });
}

const favoritListe = document.querySelector("#favoritListe");

if (favoritListe) {
  const favoritIds = JSON.parse(localStorage.getItem("favoritBooks")) || [];

  const favoritBooks = books.filter(function (book) {
    return favoritIds.includes(book.id);
  });

favoritListe.innerHTML = favoritBooks
  .map(function (book) {
    return `
      <article class="favorit-bog">
        <img src="${book.img}" alt="${book.titel}">
      </article>
    `;
  })
  .join("");
}