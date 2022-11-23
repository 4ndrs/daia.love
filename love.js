const daia = document.querySelector("img");
const song = new Audio("assets/love.ogg");

const toggleAudio = () => {
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
};

daia.addEventListener("click", toggleAudio);
song.setAttribute("loop", "true");
