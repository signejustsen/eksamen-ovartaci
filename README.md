# README – Ovartacis Indre Bibliotek

## Projektbeskrivelse

Ovartacis Indre Bibliotek er en interaktiv museumsoplevelse udviklet til Museum Ovartaci. Løsningen fungerer som et digitalt lag ovenpå den fysiske udstilling, hvor brugeren udforsker temaer gennem værker, lyd, refleksion og personlige valg.

Gennem seks temaer guides brugeren gennem en personlig rejse. Undervejs besvarer brugeren refleksionsspørgsmål, som gemmes i browserens localStorage. På baggrund af brugerens valg beregnes en personlig identitet, som afslutningsvis præsenteres som enten:

* Den Drømmende
* Den Søgende
* Den Skabende

Formålet er at skabe en mere sanselig, engagerende og brugercentreret museumsoplevelse, hvor den digitale løsning understøtter refleksion og emotionel involvering.

## Oplevelsesdesign

Projektet benytter baggrundslyd, animationer og visuelle effekter for at understøtte den stemningsfulde oplevelse af Ovartacis univers.

Brugerens valg påvirker løbende oplevelsen gennem localStorage, hvilket skaber et personligt forløb og en individuel afslutning.

---

# Projektstruktur

Projektet er organiseret i mapper for at skabe struktur og gøre vedligeholdelse lettere.

```text
eksamen-ovartaci-main/

├── CSS/
│   └── style.css
│
├── JS/
│   ├── audio.js
│   ├── bog.js
│   ├── boeger.js
│   ├── favoritside.js
│   └── spoergsmaal.js
│
├── img/
├── mp3/
├── video/
│
├── bibliotek.html
├── bibliotek-2.html
├── velkommen.html
├── loading-side.html
├── afslutning.html
│
└── tema- og identitetssider
```

HTML-filerne fungerer som de enkelte sider i oplevelsen. CSS anvendes til design og styling, mens JavaScript håndterer interaktivitet, datahåndtering og personalisering.

---

# Navngivningskonventioner

Projektet anvender konsekvente navngivningsprincipper for at skabe struktur og læsbarhed.

## HTML

Filer navngives med kebab-case:

* fantasiens-verden-1.html
* kunst-som-frirum-hoer.html
* det-indre-univers-maerk-temaet.html

## JavaScript

Variabler og funktioner navngives med camelCase:

```javascript
answerButtons
identityScores
storageKey
startExperience
```

Denne navngivningsform følger almindelige JavaScript-konventioner og øger kodens læsbarhed.

---

# ORCA og datastruktur

Projektets datastruktur tager udgangspunkt i ORCA-analysen.

## Centrale objekter

* Bruger
* Bog
* Tema
* Værk
* Spørgsmål
* Svar
* Rejse
* Resultat

Objekterne blev identificeret gennem ORCA-processen og efterfølgende omsat til JavaScript-datastrukturer.

Eksempel:

```javascript
const books = [
{
id: "identitet",
titel: "Identitet",
img: "../img/identitet1.png"
}
];
```

## Datatyper

| Data           | Datatype       |
| -------------- | -------------- |
| id             | String         |
| titel          | String         |
| img            | String         |
| books          | Array          |
| identityScores | Object         |
| point          | Number         |
| visited-status | Boolean/String |
| favoritværker  | Array          |

Arrays anvendes til samlinger af data, objekter bruges til at organisere relaterede værdier, og localStorage anvendes til lagring af brugerens valg. Boolean anvendes blandt andet til at registrere, om en bog tidligere er blevet besøgt.

---

# Anvendelse af localStorage

localStorage anvendes til at skabe en personlig og dynamisk oplevelse.

## Identitetssystem

Når brugeren besvarer refleksionsspørgsmål, gemmes point lokalt i browseren.

Eksempel:

```javascript
{
soegende: 2,
skabende: 1,
droemmende: 3
}
```

Pointene bruges til at beregne brugerens identitet og bestemme hvilken afslutning brugeren modtager.

## Besøgte bøger

Når brugeren åbner en bog, gemmes dette i localStorage.

Eksempel:

```javascript
visited-identitet = true
```

Ved næste besøg i biblioteket vises et checkmark på de bøger, der tidligere er blevet besøgt.

## Favoritter

Favoritværker gemmes lokalt, så brugeren kan vende tilbage til dem senere i oplevelsen.

## Nulstilling af oplevelsen

Når brugeren starter oplevelsen forfra, slettes relevante data fra localStorage, så en ny personlig rejse kan påbegyndes.

## Dynamisk brugeroplevelse

Projektet anvender et identitetssystem baseret på brugerens svar gennem oplevelsen.

Hvert svar giver point til én af tre identiteter:

- Den Søgende
- Den Skabende
- Den Drømmende

Pointene gemmes i localStorage og anvendes til at beregne brugerens endelige identitet ved afslutningen af oplevelsen.

Dette betyder, at forskellige brugere kan opnå forskellige resultater baseret på deres individuelle valg.

---

# Anvendte JavaScript-teknologier

Projektet anvender vanilla JavaScript til at skabe interaktivitet, navigation og personalisering af brugeroplevelsen.

## DOM-manipulation

```javascript
document.querySelector()
document.querySelectorAll()
```

## EventListeners

```javascript
button.addEventListener("click")
```

Anvendes til at registrere brugerens handlinger, såsom klik på svarmuligheder, bøger og navigationsknapper.

## Arrays og objekter

```javascript
const books = []
const scores = {}
```

Bruges til organisering og strukturering af data, eksempelvis bogdata og identitetsscores.

## JSON

```javascript
JSON.stringify()
JSON.parse()
```

Anvendes til lagring og hentning af objekter i localStorage.

## LocalStorage

```javascript
localStorage.setItem()
localStorage.getItem()
localStorage.removeItem()
```

Anvendes til at gemme brugerens valg, besøgte bøger, favoritter og identitetsscores mellem siderne.

## Dataset

```javascript
button.dataset.identity
book.dataset.book
```

Anvendes til at knytte data direkte til HTML-elementer og identificere hvilke svar eller bøger brugeren interagerer med.

## Loops

```javascript
forEach()
```

Anvendes til at gennemgå flere elementer på én gang, eksempelvis svarknapper og bøger.

## CSS-klasser

```javascript
classList.add()
classList.remove()
```

Anvendes til dynamisk at ændre sidens udseende, eksempelvis ved visning af checkmarks på besøgte bøger.

## Side-navigation

```javascript
window.location.href
```

Anvendes til at sende brugeren videre mellem siderne og styre flowet gennem oplevelsen.

## Kommentarer i koden
For at gøre koden mere overskuelig og lettere at vedligeholde er der løbende blevet anvendt kommentarer i både HTML, CSS og JavaScript.
Kommentarerne beskriver blandt andet:

- Formålet med funktioner og variabler
- Håndtering af localStorage
- Navigationsflow mellem sider
- Opbygning af datastrukturer
- Styling og layout i CSS
- Interaktioner og brugerhandlinger

Eksempel fra JavaScript:

```javascript
// Når brugeren klikker på et svar
button.addEventListener("click", function() {

  // Finder hvilken identitet svaret giver point til
  const identity = button.dataset.identity;

});
```
Eksempel fra bog.js:

```javascript
// Finder alle elementer med class="book-card"
const books = document.querySelectorAll(".book-card");

// Gemmer bogen som besøgt i localStorage
localStorage.setItem(storageKey, "true");
```

# Kodeeksempel 1 – Gem brugerens svar

```javascript
const identity = button.dataset.identity;

let scores = JSON.parse(localStorage.getItem("identityScores")) || {
soegende: 0,
skabende: 0,
droemmende: 0
};

scores[identity]++;

localStorage.setItem("identityScores", JSON.stringify(scores));
```

### Forklaring

Når brugeren vælger et svar, hentes identiteten fra knappen. Den relevante identitet får ét point, hvorefter resultatet gemmes i localStorage. Pointene anvendes senere til at beregne brugerens endelige identitet.

---

# Kodeeksempel 2 – Markering af besøgte bøger

```javascript
const storageKey = "visited-" + bookName;

if (localStorage.getItem(storageKey) === "true") {
book.classList.add("visited");
}
```

### Forklaring

Når biblioteket åbnes, undersøger systemet om en bog tidligere er blevet besøgt. Hvis dette er tilfældet, tilføjes klassen "visited", som via CSS viser et checkmark på bogen.

---

# Kodeeksempel 3 – Nulstilling af brugerens rejse

```javascript
Object.keys(localStorage).forEach(function (key) {

if (
key.startsWith("visited-") ||
key === "identityScores" ||
key === "finalIdentity"
) {
localStorage.removeItem(key);
}

});
```

### Forklaring

Når brugeren vælger at starte oplevelsen forfra, slettes tidligere valg, point og bogmarkeringer. Dette sikrer, at oplevelsen kan gennemføres igen uden gamle data.

---

# GitHub-samarbejde

Projektet er udviklet gennem GitHub.
Gruppemedlemmerne arbejdede løbende på projektet gennem et fælles GitHub-repository.

Projektet blev primært udviklet på main-branchen og anvendte ikke pull requests eller separate branches. Til gengæld blev der arbejdet med hyppige og beskrivende commits.

GitHub blev anvendt til:

* Versionsstyring
* Deling af kode
* Samarbejde mellem gruppemedlemmer
* Backup af projektet

Der blev arbejdet med løbende commits gennem hele udviklingsprocessen.

Eksempler på commits:

* Added localStorage identity system
* Implemented visited book checkmarks
* Added background audio system
* Created loading screen redirect
* Updated identity calculation logic

Der er løbende arbejdet med meningsfulde og beskrivende commits for at gøre udviklingshistorikken overskuelig.

---

# Eksterne biblioteker

Projektet anvender ikke tredjeparts JavaScript-biblioteker.

Al funktionalitet er udviklet i vanilla JavaScript.

---

# Konklusion

Gennem anvendelse af HTML, CSS, JavaScript og localStorage er der udviklet en interaktiv prototype, som understøtter en personlig museumsoplevelse. Kombinationen af brugerens valg, gemt progression og individuelle identitetsresultater bidrager til at skabe en mere engagerende og refleksiv oplevelse af Museum Ovartacis univers.
