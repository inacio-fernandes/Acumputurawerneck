// --------------------------------------------------------------------------------
// Depoimentos
// --------------------------------------------------------------------------------
document.getElementById('left-arrow2').addEventListener('click', function() {
  const currentSlide = document.querySelector('input[name="slider"]:checked');
  if (currentSlide) {
    let previousSlide = currentSlide.previousElementSibling;
    if (!previousSlide) {
      const slides = document.querySelectorAll('input[name="slider"]');
      previousSlide = slides[slides.length - 1];
    }
    previousSlide.checked = true;
  }
});

document.getElementById('right-arrow2').addEventListener('click', function() {
  const currentSlide = document.querySelector('input[name="slider"]:checked');
  if (currentSlide) {
    let nextSlide = currentSlide.nextElementSibling;
    if (!nextSlide) {
      const slides = document.querySelectorAll('input[name="slider"]');
      nextSlide = slides[0];
    }
    nextSlide.checked = true;
  }
});