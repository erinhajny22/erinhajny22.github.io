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
