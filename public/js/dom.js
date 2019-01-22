const searchInput =document.getElementById("search");
const lang =document.getElementById("lang");
const category=document.getElementById("cate");

const url=`https://newsapi.org/v2/top-headlines?q=${searchInput.value}&language=${lang}&category=${category}&apiKey=cf55683a37b348acb635772cba756300`;
