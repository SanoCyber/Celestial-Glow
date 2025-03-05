// JavaScript for dynamic slider functionality
let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showNextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  slides.style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
}

// Automatically change slide every 3 seconds
setInterval(showNextSlide, 8000);

// Dynamic behavior for contact form submission
const form = document.querySelector('.contact form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Gracias por contactarnos. Nos comunicaremos contigo pronto.');
  form.reset();
});
