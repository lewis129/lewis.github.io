// const carousel = document.querySelector('.card-list');

// let isDragging = false;

// const dragStart = (e) => {
//   isDragging = true; // set isDragging to true when mouse is down
//   carousel.classList.add("dragging"); // add dragging class to carousel
//   carousel.scrollLeft -= e.pageX; // set scrollLeft to pageX
// }

// const dragging = (e) => {
//   if(!isDragging) return;// if isDragging is false, return from here
//   carousel.scrollLeft = e.pageX
// }

// carousel.addEventListener("mousemove", dragging)
// carousel.addEventListener("mousedown", dragStart)

let slideIndex = 0; // Initialize slide index to 0
showSlides(slideIndex); // Show the first slide

function plusSlides(n) {
  showSlides(slideIndex += n); // Increment or decrement slide index
}

function currentSlide(n) {
  showSlides(slideIndex = n); // Set slide index to the current slide
}
function showSlides(n){
  let i; // Declare variable i
  let slides = document.getElementsByClassName("card-item"); // Get all slides
  let dots = document.getElementsByClassName("dot"); // Get all dots
  if (n > slides.length) {slideIndex = 1} // If slide index is greater than number of slides, set it to 1
  if (n < 1) {slideIndex = slides.length} // If slide index is less than 1, set it to number of slides
  for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";} // Hide all slides
  for (i = 0; i < dots.length; i++) {dots[i].className = dots[i].className.replace(" active", "");} // Remove active class from all dots
  if (slideIndex > 0 && slideIndex <= slides.length) {
    slides[slideIndex-1].style.display = "block"; // Show the current slide
  }
  dots[slideIndex-1].className += " active"; // Add active class to the current dot
}
