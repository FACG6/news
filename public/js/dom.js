var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      /*dots[i].className = dots[i].className.replace(" active", "");*/
  }
  slides[slideIndex-1].style.display = "block";
  /*dots[slideIndex-1].className += " active";*/
}
const searchInput =document.getElementById("search");
const lang =document.getElementById("lang");
const category=document.getElementById("cate");

const url=`https://newsapi.org/v2/top-headlines?q=${searchInput.value}&language=${lang}&category=${category}&apiKey=cf55683a37b348acb635772cba756300`;



var x = document.getElementById("images");
var image  = document.createElement("img");


function rel(result){
    var image_source = result.articles[0].urlToImage;
    image.src = image_source;
    x.appendChild(image);

}
fetch(url,rel);
// fetch('GET')
