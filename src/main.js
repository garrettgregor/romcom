// Create variables targetting the relevant DOM elements here 👇
const coverImage = document.querySelector('.cover-image');
const coverTitle = document.querySelector('.cover-title');
const coverTagline1 = document.querySelector('.tagline').querySelector('.tagline-1');
const coverTagline2 = document.querySelector('.tagline').querySelector('.tagline-2');
// // buttons
const changeCoverButton = document.querySelector('.random-cover-button');
const makeCoverButton = document.querySelector('.make-new-button');
const saveCoverButton = document.querySelector('.save-cover-button');
const savedCoversButton = document.querySelector('.view-saved-button');
const homeButton = document.querySelector('.home-button');
// // views
const formView = document.querySelector('.form-view');
const homeView = document.querySelector('.home-view');
const savedView = document.querySelector('.saved-view');

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows"),
];

var currentCover;

var views = document.querySelectorAll('.view')

// Add your event listeners here 👇
changeCoverButton.addEventListener('click', changeCover);
makeCoverButton.addEventListener('click', viewForm);
savedCoversButton.addEventListener('click', viewSavedCovers);


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

function viewForm() {
  formView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  changeCoverButton.classList.add('hidden');
  homeView.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
};

function viewSavedCovers() {
  formView.classList.add('hidden');
  homeView.classList.add('hidden');
  savedView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  saveCoverButton.classList.add('hidden');
};

function viewSavedCovers() {
  formView.classList.add('hidden');
  homeView.classList.add('hidden');
  savedView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  saveCoverButton.classList.add('hidden');
  changeCoverButton.classList.add('hidden');
};