let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("topSSB");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

let Index = 1;
showS(Index);

function plusSlides(n) {
  showS((Index += n));
}

function currentSlide(n) {
  showS((Index = n));
}

function showS(n) {
  let i;
  let slidevid = document.querySelectorAll(".pervideo");
  let dashs = document.querySelectorAll(".dash");
  if (n > slidevid.length) {
    Index = 1;
  }
  if (n < 1) {
    Index = slidevid.length;
  }
  for (i = 0; i < slidevid.length; i++) {
    slidevid[i].style.display = "none";
  }
  for (i = 0; i < dashs.length; i++) {
    dashs[i].className = dashs[i].className.replace(" active", "");
  }
  slidevid[Index - 1].style.display = "block";
  dashs[Index - 1].className += " active";
}
let count = 0;
function showa() {
  if (count % 2 != 0) {
    document.querySelector("#DD0").style.display = "block";
  }
  if (count % 2 == 0) {
    document.querySelector("#DD0").style.display = "none";
  }
  count++;
}
function show() {
  if (count % 2 != 0) {
    document.querySelector("#DD1").style.display = "block";
  }
  if (count % 2 == 0) {
    document.querySelector("#DD1").style.display = "none";
  }
  count++;
}
