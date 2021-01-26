const searchButtton = document.getElementById("style");
console.log(searchButtton);
const searchField = document.getElementById("expand");
console.log(searchField);

const expnadSearchField = () => {
  console.log("clicked");
  searchField.style.opacity = 1;
};

searchButtton.addEventListener("click", expnadSearchField);
