const displayedImg = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button.dark');
const overlay = document.querySelector('.overlay');

// Array of image filenames
const images = ['Matilda.png', 'example1.png', 'example2.png', 'example3.png', 'example4.png'];

// Populate the thumbnail bar
images.forEach((image) => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `img/${image}`);
  newImage.setAttribute('alt', `Thumbnail of ${image}`);
  thumbBar.appendChild(newImage);

  // Click event to change the main displayed image
  newImage.addEventListener('click', () => {
    displayedImg.setAttribute('src', `img/${image}`);
    displayedImg.setAttribute('alt', `Image of ${image}`);
  });
});

// Toggle overlay
btn.addEventListener('click', () => {
  if (overlay.style.visibility === 'hidden') {
    overlay.style.visibility = 'visible';
    btn.textContent = 'Lighten';
  } else {
    overlay.style.visibility = 'hidden';
    btn.textContent = 'Darken';
  }
});
const carouselImages = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;

function updateCarousel() {
    const imageWidth = document.querySelector('.carousel-image').clientWidth;
    carouselImages.style.transform = `translateX(${-imageWidth * currentIndex}px)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselImages.children.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselImages.children.length) % carouselImages.children.length;
    updateCarousel();
});

// Ensure carousel resizes correctly on window resize
window.addEventListener('resize', updateCarousel);

// Initialize the carousel
updateCarousel();
