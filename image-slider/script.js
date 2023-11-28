let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slide').length;
const slider = document.getElementById('slider');

function fetchRandomImage() {
  // Use the Unsplash Source API to get a random image URL
  return fetch('https://source.unsplash.com/random/1600x900')
    .then(response => response.url);
}

async function updateSlider() {
  const translateValue = -currentSlide * 100;
  console.log('translateValue', translateValue);
  slider.style.transform = `translateX(${translateValue}vw)`;

  // Fetch a new random image for the current slide
  const imageUrl = await fetchRandomImage();
  slider.children[currentSlide].style.backgroundImage = `url(${imageUrl})`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  console.log('nextSlide', currentSlide);
  updateSlider();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  console.log('prevSlide', currentSlide);
  updateSlider();
}

// Auto slide change every 3 seconds
setInterval(nextSlide, 3000);

// Initial update to fetch and set images for the first load
updateSlider();
