const test = require('tape');
const logic = require("./logic.js")
const response = {
  "status": "ok",
  "totalResults": 4579,
  "articles": [
  {
  "source": {
  "id": null,
  "name": "Newsbtc.com"
  },
  "author": "Martin Young",
  "title": "Would Crypto Markets React if Bithumb Went Public in The US?",
  "description": "One of the world’s largest crypto exchanges could soon be publicly traded in the US through a reverse merger. A Singapore based holdings company which has a majority stake in one of Korea’s top exchanges is looking to get listed by acquiring an already public…",
  "url": "https://www.newsbtc.com/2019/01/23/would-crypto-markets-react-if-bithumb-went-public-in-the-us/",
  "urlToImage": "https://www.newsbtc.com/wp-content/uploads/2019/01/bithumb2.jpg",
  "publishedAt": "2019-01-23T09:00:44Z",
  "content": "One of the worlds largest crypto exchanges could soon be publicly traded in the US through a reverse merger. A Singapore based holdings company which has a majority stake in one of Koreas top exchanges is looking to get listed by acquiring an already publicly… [+2203 chars]"
  },
  {
  "source": {
  "id": null,
  "name": "Be-it.co.uk"
  },
  "author": null,
  "title": "How blockchain technology can benefit the marketing world.",
  "description": "Guest blog on how blockchain technology can benefit the marketing world.",
  "url": "https://www.be-it.co.uk/blog-news/view/5464/how-blockchain-technology-could-benefit-the-marketing-world.aspx",
  "urlToImage": "https://www.be-it.co.uk/webdocs/BEITNew/CompanySettings/1/Social_Sharing_Logo/BeIT%20Logo%201.png",
  "publishedAt": "2019-01-23T08:50:23Z",
  "content": "How blockchain technology could benefit the marketing world.\r\nPosted on 22nd January 2019\r\nBy now, most people have heard something about blockchain tech. If you haven’t heard the term bandied about, you’re sure to be familiar with Bitcoin. It made headlines … [+3287 chars]"
  }]}



test('test getImage function', (test)=> {

  let actual = logic.getImage(response, 0);
    let expected = "https://www.newsbtc.com/wp-content/uploads/2019/01/bithumb2.jpg";
    test.equal(actual, expected, "the image not the same ");
    test.end();
});

test('test getPostUrl function', (t)=> {

  let actual = logic.getPostUrl(response, 1);
    let expected = "https://www.be-it.co.uk/blog-news/view/5464/how-blockchain-technology-could-benefit-the-marketing-world.aspx";
    t.equal(actual, expected, "the url not the same ");
    t.end();
});
  
test('test getTitel function',(t)=> {

  let actual = logic.getTitel(response, 0);
    let expected = "Would Crypto Markets React if Bithumb Went Public in The US?";
    t.equal(actual, expected, "the Titele not the same ");
    t.end();
});

test('test getContent function', (t)=> {

  let actual = logic.getContent(response, 0);
    let expected = "One of the worlds largest crypto exchanges could soon be publicly traded in the US through a reverse merger. A Singapore based holdings company which has a majority stake in one of Koreas top exchanges is looking to get listed by acquiring an already publicly… [+2203 chars]";
    t.equal(actual, expected, "the Contentnot the same ");
    t.end();
});

test('test publishAt function', (t)=> {
  let actual = logic.publishAt(response, 0);
    let expected = "2019-01-23T09:00:44Z";
    t.equal(actual, expected, "the publishAt not the same ");
    t.end();
});