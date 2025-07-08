// script.js
const whispers = [
  "You are the echo to my silence.",
  "Even the stars envy your light.",
  "A thousand lifetimes, still I'd find you.",
  "Our moments are galaxies in disguise.",
  "In the quiet, your name speaks loudest."
];

function revealWhisper() {
  const display = document.getElementById("whisper");
  const random = whispers[Math.floor(Math.random() * whispers.length)];
  display.textContent = random;
}

// Music controls
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}