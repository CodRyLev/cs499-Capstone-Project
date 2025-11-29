document.addEventListener("DOMContentLoaded", () => {
  // all slide elements inside slideshow
  const slides = Array.from(document.querySelectorAll(".slide"));
  // UI elements to operate slideshow
  const dotsContainer = document.getElementById("dots");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  // exit early if there are no slide to display
  if (!slides.length) return;

  let currentIndex = 0; // track currently displayed slide

  // Build slideshow dynamically
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(document.querySelectorAll(".dot"));

  function showSlide(index) {
    // reset all slides and dots
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));
    // wraps index for overflow values
    currentIndex = (index + slides.length) % slides.length;
    // activates the next slide and dot
    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }
  // event listeners for button navigation
  prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));
  nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));
  // show first slide
  showSlide(0);
});
