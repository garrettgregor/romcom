// Create variables targetting the relevant DOM elements here 👇
coverImage = document.querySelector('.cover-image');
coverTitle = document.querySelector('.cover-title');
coverTagline1 = document.querySelector('.tagline').querySelector('.tagline-1');
coverTagline2 = document.querySelector('.tagline').querySelector('.tagline-2');
changeCoverButton = document.querySelector('.random-cover-button');

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
];

var currentCover;

// Add your event listeners here 👇
changeCoverButton.addEventListener('click', changeCover);


// Create your event handlers and other functions here 👇
function changeCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  coverTagline1.innerText = descriptors[getRandomIndex(descriptors)];
  coverTagline2.innerText = descriptors[getRandomIndex(descriptors)];
};

// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  };

  return cover;
};
