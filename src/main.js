// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagline1 = document.querySelector('.tagline').querySelector('.tagline-1');
var coverTagline2 = document.querySelector('.tagline').querySelector('.tagline-2');
var savedCoversSection = document.querySelector('.saved-covers-section');
// // buttons
const changeCoverButton = document.querySelector('.random-cover-button');
const makeCoverButton = document.querySelector('.make-new-button');
const createCoverButton = document.querySelector('.create-new-book-button');
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

var currentCover = {
  imageUrl: coverImage.src,
  title: coverTitle.innerText,
  tagline1: coverTagline1.innerText,
  tagline2: coverTagline2.innerText
};


// Add your event listeners here 👇
changeCoverButton.addEventListener('click', changeCover);
makeCoverButton.addEventListener('click', viewForm);
savedCoversButton.addEventListener('click', viewSavedCovers);
saveCoverButton.addEventListener('click', saveCover);
homeButton.addEventListener('click', viewHome);
createCoverButton.addEventListener('click', createOriginalCover);


// Create your event handlers and other functions here 👇
function changeCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  coverTagline1.innerText = descriptors[getRandomIndex(descriptors)];
  coverTagline2.innerText = descriptors[getRandomIndex(descriptors)];

  currentCover.imageUrl = coverImage.src;
  currentCover.title = coverTitle.innerText;
  currentCover.tagline1 = coverTagline1.innerText;
  currentCover.tagline2 = coverTagline2.innerText;
};

// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function createCover(imageUrl, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    imageUrl: imageUrl,
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
  savedView.classList.add('hidden');
};

function viewSavedCovers() {
  formView.classList.add('hidden');
  homeView.classList.add('hidden');
  savedView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  saveCoverButton.classList.add('hidden');
  changeCoverButton.classList.add('hidden');

  savedCoversSection.innerHTML = ''; // Clear out the section first

  for (var i = 0; i < savedCovers.length; i++) {
    let coverDiv = document.createElement('div');
    coverDiv.classList.add('cover', 'mini-cover');

    let coverImg = document.createElement('img');
    coverImg.classList.add('mini-cover');
    coverImg.src = savedCovers[i].imageUrl;
    coverDiv.appendChild(coverImg);

    let coverTitle = document.createElement('h2');
    coverTitle.classList.add('mini-cover');
    coverTitle.innerText = savedCovers[i].title;
    coverDiv.appendChild(coverTitle);

    let tagline = document.createElement('h3');
    tagline.innerText = `${savedCovers[i].tagline1} ${savedCovers[i].tagline2}`;
    coverDiv.appendChild(tagline);

    savedCoversSection.appendChild(coverDiv);
  }
};
// function viewSavedCovers() {
//   savedCoversSection.innerHTML = ''; // Clear out the section first

//   for (let cover of savedCovers) {
//     let coverDiv = document.createElement('div');
//     coverDiv.classList.add('cover', 'mini-cover');

//     let coverImg = document.createElement('img');
//     coverImg.src = cover.coverImg;
//     coverDiv.appendChild(coverImg);

//     let coverTitle = document.createElement('h2');
//     coverTitle.innerText = cover.title;
//     coverDiv.appendChild(coverTitle);

//     let tagline = document.createElement('h3');
//     tagline.innerText = `${cover.tagline1} ${cover.tagline2}`;
//     coverDiv.appendChild(tagline);

//     savedCoversSection.appendChild(coverDiv);
//   }
// }

// function displaySavedCover(cover) {
//   var fragment = document.createDocumentFragment();
//   var li = fragment
//     .appendChild(document.createElement("mini-cover"))
//   li.textContent = "hello world";

//   savedView.appendChild(fragment);
//   // cover.classList.add('mini-cover')
// }

function viewHome() {
  formView.classList.add('hidden');
  homeView.classList.remove('hidden');
  savedView.classList.add('hidden');
  homeButton.classList.add('hidden');
  saveCoverButton.classList.remove('hidden');
  changeCoverButton.classList.remove('hidden');
};

function createOriginalCover(event) {
  event.preventDefault();

  var url = document.querySelector('.user-cover').value;
  var title = document.querySelector('.user-title').value;
  var tagline1 = document.querySelector('.user-desc1').value;
  var tagline2 = document.querySelector('.user-desc2').value;

  covers.push(url);
  titles.push(title);
  descriptors.push(tagline1, tagline2);

  var createdCover = createCover(url, title, tagline1, tagline2);
  savedCovers.push(createdCover);

  currentCover = createdCover;

  displayCover();
  viewHome();
};

function displayCover() {
  coverImage.src = currentCover.imageUrl;
  coverTitle.innerText = currentCover.title;
  coverTagline1.innerText = currentCover.tagline1;
  coverTagline2.innerText = currentCover.tagline2;
};

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover)
  }
};