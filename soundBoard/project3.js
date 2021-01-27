// play() can only play audio, therefore, give the id to audio not the src

const applauseSound = document.getElementById("applause");
const booSound = document.getElementById("boo");

console.log(applauseSound);
console.log(booSound);

const applauseButton = document.getElementById("applause-btn");
const booButton = document.getElementById("boo-btn");
console.log(booButton);

console.log(applauseButton);

const playApplauses = () => {
  console.log("clicked");
  applauseSound.play();
};

const playBoo = () => {
  booSound.play();
};
applauseButton.addEventListener("click", playApplauses);

booButton.addEventListener("click", playBoo);
