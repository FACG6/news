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


