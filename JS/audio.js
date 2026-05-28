"use strict";

const bgAudio = document.querySelector("#bg-audio");

if (bgAudio) {
  
  const soundOn = localStorage.getItem("soundOn");
  const savedTime = localStorage.getItem("audioTime");

  if (savedTime) {
    bgAudio.currentTime = savedTime;
  }

  if (soundOn === "true") {
    bgAudio.play().catch(() => {
      console.log("Lyd afventer brugerklik");
    });
  }

  document.addEventListener("click", () => {
    localStorage.setItem("soundOn", "true");
    bgAudio.play();
  }, { once: true });

  setInterval(() => {
    localStorage.setItem("audioTime", bgAudio.currentTime);
  }, 500);

  window.addEventListener("beforeunload", () => {
    localStorage.setItem("audioTime", bgAudio.currentTime);
  });
}