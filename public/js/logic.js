if (typeof module !== "undefined") {
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
}

function fetchAPI(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      cb(response);
    }
  }
  xhr.open("GET", url, true);
  xhr.send();

};

/*get image*/

function getImage(response, i) {
  return response.articles[i].urlToImage;
}

function getPostUrl(response, i) {
  return response.articles[i].url;
}

function getSourceId(response, i) {
  return response.articles[i].source.id;
}

function getSourceName(response, i) {
  return response.articles[i].source.name;
}

function getTitel(response, i) {
  return response.articles[i].title;
}


function getContent(response, i) {
  return response.articles[i].content;
}

function publishAt(response, i) {
  return response.articles[i].publishedAt;
}


if (typeof module !== "undefined") {
  module.exports = {
    fetchAPI,
    publishAt,
    getContent,
    getTitel,
    getAuthor,
    getSourceId,
    getPostUrl,
    getImage
  };
}
