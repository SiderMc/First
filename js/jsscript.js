document.addEventListener("click",documentClick);
function documentClick(e){
   const targetItem = e.target;
   if(targetItem.closest(".header__menu_burger")){
      document.documentElement.classList.toggle("open")
   }
}
//for first
const clientsSlider = document.querySelector('.clients__items');
let isDown = false;
let startX;
let scrollLeft;
let currentSlide = 0;
let clientWidth = clientsSlider.offsetWidth;
let maxSlides;

clientsSlider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - clientsSlider.offsetLeft;
  scrollLeft = clientsSlider.scrollLeft;
});

clientsSlider.addEventListener('mouseleave', () => {
  isDown = false;
  clientsSlider.style.transition = 'transform 1s linear';
  const xPos = (-currentSlide * clientWidth) + (clientsSlider.scrollLeft - scrollLeft);
  currentSlide = Math.round(xPos / clientWidth);
});

clientsSlider.addEventListener('mouseup', () => {
  isDown = false;
});

clientsSlider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - clientsSlider.offsetLeft;
  const walk = (x - startX) * 3;
  clientsSlider.scrollLeft = scrollLeft - walk;
});

clientsSlider.addEventListener('touchstart', (e) => {
  isDown = true;
  startX = e.touches[0].pageX - clientsSlider.offsetLeft;
  scrollLeft = clientsSlider.scrollLeft;
});

clientsSlider.addEventListener('touchend', () => {
  isDown = false;
});

clientsSlider.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.touches[0].pageX - clientsSlider.offsetLeft;
  const walk = (x - startX) * 3;
  clientsSlider.scrollLeft = scrollLeft - walk;
});

window.addEventListener('resize', () => {
  clientWidth = clientsSlider.offsetWidth;
  if (window.innerWidth < 1200) {
    maxSlides = 3;
    clientsSlider.style.scrollSnapType = 'x mandatory';
    clientsSlider.style.scrollSnapPointsX = 'repeat(33.33%, 100%)';
  } else {
    maxSlides = 5;
    clientsSlider.style.scrollSnapType = 'x mandatory';
    clientsSlider.style.scrollSnapPointsX = 'repeat(20%, 100%)';
  }
});
clientsSlider.style.cursor = 'grab';

const slides = clientsSlider.children;
const first = slides[0].cloneNode(true);
const last = slides[slides.length - 1].cloneNode(true);
clientsSlider.insertBefore(last, slides[0]);
clientsSlider.appendChild(first);
clientsSlider.scrollLeft = clientWidth;

clientsSlider.addEventListener('transitionend', () => {
  if (currentSlide >= maxSlides) {
    clientsSlider.style.transition = 'none';
    clientsSlider.scrollLeft = clientWidth;
    currentSlide = 0;
  } else if (currentSlide < 0) {
    clientsSlider.style.transition = 'none';
    clientsSlider.scrollLeft = maxSlides * clientWidth;
    currentSlide = maxSlides - 1;
  }
});
//for second
const slider = document.querySelector('.testimonials__list');
let isDragging = false;
let startXPos;
let initialScrollLeft;
let currentSlideIndex = 0;
let itemWidth = slider.offsetWidth;
let maxSlidesCount;

slider.addEventListener('mousedown', (event) => {
  isDragging = true;
  startXPos = event.pageX - slider.offsetLeft;
  initialScrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDragging = false;
  slider.style.transition = 'transform 1s linear';
  const xPos = (-currentSlideIndex * itemWidth) + (slider.scrollLeft - initialScrollLeft);
  currentSlideIndex = Math.round(xPos / itemWidth);
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
});

slider.addEventListener('mousemove', (event) => {
  if (!isDragging) return;
  event.preventDefault();
  const x = event.pageX - slider.offsetLeft;
  const walk = (x - startXPos) * 3;
  slider.scrollLeft = initialScrollLeft - walk;
});

slider.addEventListener('touchstart', (event) => {
  isDragging = true;
  startXPos = event.touches[0].pageX - slider.offsetLeft;
  initialScrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchend', () => {
  isDragging = false;
});

slider.addEventListener('touchmove', (event) => {
  if (!isDragging) return;
  event.preventDefault();
  const x = event.touches[0].pageX - slider.offsetLeft;
  const walk = (x - startXPos) * 3;
  slider.scrollLeft = initialScrollLeft - walk;
});

window.addEventListener('resize', () => {
  itemWidth = slider.offsetWidth;
  if (window.innerWidth < 768) {
    maxSlidesCount = 1;
    slider.style.scrollSnapType = 'x mandatory';
    slider.style.scrollSnapPointsX = 'repeat(100%, 100%)';
  } else if (window.innerWidth < 1100) {
    maxSlidesCount = 2;
    slider.style.scrollSnapType = 'x mandatory';
    slider.style.scrollSnapPointsX = 'repeat(50%, 100%)';
  } else {
    maxSlidesCount = 3;
    slider.style.scrollSnapType = 'x mandatory';
    slider.style.scrollSnapPointsX = 'repeat(33.33%, 100%)';
  }
});
slider.style.cursor = 'grab';

   slider.scrollLeft = itemWidth;
   
   const updateSlider = () => {
   if (currentSlideIndex < 0) {
   currentSlideIndex = maxSlidesCount - 1;
   slider.scrollLeft = itemWidth * maxSlidesCount;
   }
   if (currentSlideIndex > maxSlidesCount) {
   currentSlideIndex = 0;
   slider.scrollLeft = itemWidth;
   }
   };
   
   const setSliderTransition = (transition) => {
   slider.style.transition = transition;
   };
   
   const goToSlide = (index) => {
   currentSlideIndex = index;
   setSliderTransition('transform 1s linear');
   slider.scrollLeft = itemWidth * (index + 1);
   };
   
   const nextSlide = () => {
   currentSlideIndex++;
   setSliderTransition('transform 1s linear');
   slider.scrollLeft = itemWidth * (currentSlideIndex + 1);
   updateSlider();
   };
   
   const prevSlide = () => {
   currentSlideIndex--;
   setSliderTransition('transform 1s linear');
   slider.scrollLeft = itemWidth * (currentSlideIndex + 1);
   updateSlider();
   };
   const header = document.querySelector(".header");

   window.addEventListener("scroll", function () {
     if (window.pageYOffset > 50) {
       header.classList.add("smaller");
     } else {
       header.classList.remove("smaller");
     }
   });
   






