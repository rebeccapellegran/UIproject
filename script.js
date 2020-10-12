 const url = 'https://pokeapi.co/api/v2/evolution-chain/'
 fetch(url)
 .then(res => {
     return res.json();
 })
 .then(res => {
     console.log("success!", res);
 })
 .catch(err => {
     console.log("something went wrong...", err);
 });


var slideIndex = 1;
showSlides(slideIndex);
function changeSlides(n) {
   showSlides((slideIndex += n));
}
function currentSlide(n) {
   showSlides((slideIndex = n));
}
function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("Slide");
   var dots = document.getElementsByClassName("Navdot");
   if (n > slides.length) {
      slideIndex = 1;
   }
   if (n < 1) {
      slideIndex = slides.length;
   }
   Array.from(slides).forEach(item => (item.style.display = "none"));
   Array.from(dots).forEach(
      item => (item.className = item.className.replace(" selected", ""))
   );
   slides[slideIndex - 1].style.display = "block";
   dots[slideIndex - 1].className += " selected";
   }