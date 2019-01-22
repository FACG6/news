
var url = "https://newsapi.org/v2/everything?q=Apple&from=2019-01-22&sortBy=popularity&apiKey=20c56b22de144ba0b71294e40745723f";

var x = document.getElementById("images");
var image  = document.createElement("img");


function rel(result){
    var image_source = result.articles[0].urlToImage;
    image.src = image_source;
    x.appendChild(image);

}
fetch(url,rel);
// fetch('GET')


