const test = require('tape');

// test('ones',function(e){
// e.equal(1,1,"should be true");
// e.end();
// })

test('ones',function(e){
 let  expected = "https://newsapi.org/v2/everything?q=Apple&from=2019-01-22&sortBy=popularity&apiKey=20c56b22de144ba0b71294e40745723f";
 let deal  = result.articles[0].urlToImage;
 e.deepEqual(expected,deal,"the page is done ");
 e.end();
 })
