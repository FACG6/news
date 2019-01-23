/*make slideShow*/
var slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function showSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (slides.length != 0) {
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
}

/* End of making Slide Show*/

/*when click on the search button*/
let submit = document.getElementById("submit");
submit.addEventListener('click', function(e) {
  e.preventDefault();
  const searchInput = document.getElementById("search").value;
  const lang = document.getElementById("lang").value;
  const category = document.getElementById("cate").value;

  let url = `https://newsapi.org/v2/top-headlines?q=${searchInput}&language=${lang}&category=${category}&apiKey=${key}`;

  function display_result(result) {
    console.log(result);
    let lengthResult = result.articles.length;
    let containerSlide = document.getElementById("slideshow");
    let indicator = document.getElementById("indicator");
    let indicatorElement;
<<<<<<< HEAD
    let slideShowDiv,imageElement,imageSource,textNumber,number;
=======
    let slideShowDiv,imageElement,imageSource,textNumber,number,button;
    let dialog = document.getElementById('dialog');
>>>>>>> f66ddcd3fd814eef078252b74a93abb75dabae07
    while (containerSlide.firstChild) {
      containerSlide.removeChild(containerSlide.firstChild);
      indicator.removeChild(indicator.firstChild);
    }
    for (let i = 0; i < result.articles.length; i++) {
      slideShowDiv = document.createElement('div');
      slideShowDiv.classList.add("mySlides");
      slideShowDiv.classList.add("fade");
      containerSlide.appendChild(slideShowDiv);
      imageElement = document.createElement('img');
      imageElement.classList.add('image');
      imageSource = getImage(result,i);
      imageElement.src = imageSource;
      slideShowDiv.appendChild(imageElement);
      textNumber = document.createElement('div');
      textNumber.classList.add('numbertext');
      number = i + 1;
      textNumber.innerText = `${number}/${lengthResult}`;
      slideShowDiv.appendChild(textNumber);
      /*button to show details*/
      button = document.createElement('button');
      button.innerText = "Show Details";
      slideShowDiv.appendChild(button);
      button.setAttribute('id',i);
      button.addEventListener('click',function(e){
        dialog.textContent = "";
        dialog.textContent = "Slide Number " + e.target.id ;
        dialog.showModal();
      });
      /*create indicator*/
      indicatorElement = document.createElement('span');
      indicatorElement.classList.add('dot');
      indicatorElement.setAttribute('onclick',`showSlide(${number})`);
      indicator.appendChild(indicatorElement);

    }
    containerSlide.firstChild.style.display = "block";
    document.querySelector('.prev').style.display="block";
    document.querySelector('.next').style.display="block";
    document.querySelector('.dot').className +=' active';
  }
  console.log(url);
  fetchAPI(url, display_result);
});
