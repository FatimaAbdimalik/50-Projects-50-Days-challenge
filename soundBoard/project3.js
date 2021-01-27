// play() can only play audio, therefore, give the id to audio not the src

const applauseSound = document.getElementById("applause");

console.log(applauseSound);

const applauseButton = document.getElementById("applause-btn");

console.log(applauseButton);

const playApplauses = () => {
  console.log("clicked");
  applauseSound.play();
};

applauseButton.addEventListener("click", playApplauses);
