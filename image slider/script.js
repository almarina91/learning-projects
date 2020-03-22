var slideIndex = 0;

function loadGallery(){
    showSlides(slideIndex);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");

  if (n >= slides.length) {
      slideIndex = 0;
    } 
  if (n < 0) {
      slideIndex = slides.length-1;
    }
  for (var i = 0; i < slides.length; i++) {    
      slides[i].style.display = (i == slideIndex ? "block" : "none"); 
  }
}

function plusSlides() {
    slideIndex++;
    showSlides(slideIndex);
  }
  
  function minusSlides() {
      slideIndex--;
      showSlides(slideIndex);
  }