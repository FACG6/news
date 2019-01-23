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
    dots[slideIndex - 1].className += " active";
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
   if(searchInput ==="" &&lang ==="" && category===""){
     alert("please fill all field");
     return ;
   }

  let url = `https://newsapi.org/v2/top-headlines?q=${searchInput}&language=${lang}&category=${category}&apiKey=${key}`;

  function display_result(result) {
    /*the source of the news*/
    let sources = [{
      id: 'abc-news',
      name: 'ABC News'
    }, {
      id: 'cnn',
      name: 'CNN'
    }, {
      id: 'aftenposter',
      name: 'Aftenposter'
    }, {
      id: 'argamm',
      name: 'Argamm'
    }, {
      id: 'ansa',
      name: 'ANSZ.it'
    }, {
      id: 'ary-news',
      name: 'Ary News'
    }, {
      id: 'bbc-news',
      name: 'BBC News'
    }, {
      id: 'cbc-news',
      name: 'CBC News'
    }, {
      id: 'daily-mail',
      name: 'Daily Mail'
    }, {
      id: 'nbc-news',
      name: 'NBC News'
    }, {
      id: 'abc-news',
      name: 'ABC News'
    }, {
      id: 'cnn',
      name: 'CNN'
    }, {
      id: 'aftenposter',
      name: 'Aftenposter'
    }, {
      id: 'argamm',
      name: 'Argamm'
    }, {
      id: 'ansa',
      name: 'ANSZ.it'
    }, {
      id: 'ary-news',
      name: 'Ary News'
    }, {
      id: 'bbc-news',
      name: 'BBC News'
    }, {
      id: 'cbc-news',
      name: 'CBC News'
    }, {
      id: 'daily-mail',
      name: 'Daily Mail'
    }, {
      id: 'nbc-news',
      name: 'NBC News'
    }];
    let lengthResult = result.articles.length;
    if (lengthResult > 20)
      lengthResult = 20;
    let containerSlide = document.getElementById("slideshow");
    let indicator = document.getElementById("indicator");
    let indicatorElement;
    let slideShowDiv, imageElement, imageSource, textNumber, number, button, author;
    while (containerSlide.firstChild) {
      containerSlide.removeChild(containerSlide.firstChild);
      indicator.removeChild(indicator.firstChild);
    }
    for (let i = 0; i < lengthResult; i++) {
      slideShowDiv = document.createElement('div');
      slideShowDiv.classList.add("mySlides");
      slideShowDiv.classList.add("fade");
      containerSlide.appendChild(slideShowDiv);
      imageElement = document.createElement('img');
      imageElement.classList.add('image');
      imageSource = getImage(result, i);
      imageElement.src = imageSource;
      slideShowDiv.appendChild(imageElement);
      textNumber = document.createElement('div');
      textNumber.classList.add('numbertext');
      number = i + 1;
      textNumber.innerText = `${number}/${lengthResult}`;
      slideShowDiv.appendChild(textNumber);
      /*author of the articals*/
      author = document.createElement('a');
      author.textContent = sources[i].name;
      author.classList.add('source_news');
      author.id = sources[i].id;
      slideShowDiv.appendChild(author);
      author.addEventListener('click', function(e) {
        //console.log(e.target.id);
        displaySource(e.target.id);
      })
      /*button to show details*/
      button = document.createElement('button');
      button.innerText = "Show Details";
      let divButton=document.createElement('div');
      divButton.classList.add('more_Detalis');
      slideShowDiv.appendChild(divButton);
      button.classList.add("btn_more_Detalis");
      divButton.appendChild(button);
      button.setAttribute('id',i);
      button.addEventListener('click',function(e){
        detailsDialog(result,e.target.id);
      });
      /*create indicator*/
      indicatorElement = document.createElement('span');
      indicatorElement.classList.add('dot');
      indicatorElement.setAttribute('onclick', `showSlide(${number})`);
      indicator.appendChild(indicatorElement);

    }
    containerSlide.firstChild.style.display = "block";
    document.querySelector('.prev').style.display = "block";
    document.querySelector('.next').style.display = "block";
    document.querySelector('.dot').className += ' active';
  }
  // console.log(url);
  fetchAPI(url, display_result);
});

function displaySource(id) {
  let url = `https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=cf55683a37b348acb635772cba756300`;
  fetchAPI(url, showDivResult);
}

function showDivResult(response) {
  console.log(response);
  let containerSocurces = document.getElementById('results_container');
  let divResult,imgSource,title,show;
  const sourceLenght = response.articles.length;
  if (sourceLenght > 10)
    sourceLenght = 10;
  for (let i = 0; i < sourceLenght; i++) {
    divResult = document.createElement('div');
    divResult.classList.add('source_result');
    containerSocurces.appendChild(divResult);
    imgSource = document.createElement('img');
    imgSource.classList.add('img_source');
    imgSource.src = getImage(response, i);
    divResult.appendChild(imgSource);
    title = document.createElement('p');
    title.classList.add('title_source');
    title.textContent = getTitel(response,i);
    divResult.appendChild(title);
    show = document.createElement('button');
    show.classList.add('btn_source');
    show.textContent = "Show Details";
    show.setAttribute('id',i);
    divResult.appendChild(show);
    show.addEventListener('click',function(e){
      detailsDialog(response,e.target.id);
    })
  }
}

let detailsDialog = (response,index)=>{
  let dialog = document.getElementById('dialog');
  let close = document.getElementById('close');
  let title = document.getElementById('title');
  title.textContent = getTitel(response,index);
  let imgDetails = document.getElementById('img_details');
  imgDetails.src = getImage(response,index);
  let publish = document.getElementById('public');
  publish.textContent = publishAt(response,index);
  let content = document.getElementById('content');
  content.textContent = getContent(response,index);
  let iframe = document.getElementById('inlineFrameExample');
  iframe.src = getPostUrl(response,index);

        dialog.showModal();
  close.addEventListener('click',()=>{
    title.textContent = "";
    imgDetails.src = "";
    iframe.src = "";
    publish.textContent = "";
    content.textContent = "";
    dialog.close();
  })
}
