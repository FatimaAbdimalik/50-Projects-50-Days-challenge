// play() can only play audio, therefore, give the id to audio not the src

// const applauseSound = document.getElementById("applause");
// const booSound = document.getElementById("boo");

// console.log(applauseSound);
// console.log(booSound);

// const applauseButton = document.getElementById("applause-btn");
// const booButton = document.getElementById("boo-btn");
// console.log(booButton);

// console.log(applauseButton);

// const playApplauses = () => {
//   console.log("clicked");
//   applauseSound.play();
// };

// const playBoo = () => {
//   booSound.play();
// };
// applauseButton.addEventListener("click", playApplauses);

// booButton.addEventListener("click", playBoo);

const soundArray = ["Applause", "Boo", "Gasp", "Tada"];
const mainDiv = document.getElementById("main");

for (let i = 0; i < soundArray.length; i++) {
  let sound = document.createElement("h5");
  sound.innerHTML = soundArray[i];
  console.log(sound.innerHTML);
  mainDiv.appendChild(sound);

  sound.addEventListener("click", () => {
    //stop already playing sound
    stopSound();
    document.getElementById(sound.innerHTML.toLowerCase()).play();
  });
}

const stopSound = () => {
  soundArray.forEach((item) => {
    const song = document.getElementById(item.toLowerCase());
    console.log(song);
    song.pause();
    song.currentTime = 0;
  });
};
