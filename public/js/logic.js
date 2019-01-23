function fetchAPI(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = ()=> {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      cb(response);
    }
  }
  xhr.open("GET", url, true);
  xhr.send();

};

/*get image*/
const getImage=(response, i) => response.articles[i].urlToImage;
const getPostUrl = (response, i) =>response.articles[i].url;
const getTitel =(response, i) => response.articles[i].title;
const getContent = (response, i) => response.articles[i].content;
const publishAt = (response, i) => response.articles[i].publishedAt;

if (typeof module !== "undefined") {
  module.exports = {
    fetchAPI,
    publishAt,
    getContent,
    getTitel,
    getPostUrl,
    getImage
  };
}
