
// script.js
window.addEventListener('DOMContentLoaded', () => {
  const intro = document.querySelector('.intro');
  const mainContent = document.querySelector('.main-content');
  // Sau 3s (trùng với thời gian animation), ẩn luôn
  setTimeout(() => {
    intro.style.display = 'none';
    document.body.style.overflow = 'auto';
    mainContent.style.opacity = 1;
  }, 3000);
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");

function showSlide(index) {
  updateDots(index);
  
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = currentSlide + 1;
  if (currentSlide > 3) {
    window.location.href = '../login_register.html';
    return;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = currentSlide - (currentSlide > 0);
  showSlide(currentSlide);
}

function updateDots(activeIndex) {
  dotsContainer.innerHTML = "";
  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i == currentSlide) {
      // dot.style.width = dotWidths;
      
    }
    if (i === activeIndex) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });
}

showSlide(currentSlide);

document.addEventListener('dblclick', function(e) {
      e.preventDefault();
}, { passive: false });