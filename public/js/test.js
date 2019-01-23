const test = require('tape');
var logic = require("./logic.js")
const url ='https://newsapi.org/v2/top-headlines?language=en&category=business&apiKey=cf55683a37b348acb635772cba756300';

test('test fechAPI function',function(t){
 t.equal(1,1,"the page is done ");
 t.end();});

 test("test Status is equal 200", function(test) {
    const expected = "ok";
    logic(url, function(xhr) {
      actual = xhr.status;
      test.equal(actual, expected, "State equal 200");
      test.end();
    });
  });
  
test('test fechAPI function',function(t){
    logic(url,(res)=> {let actual =res.articles[0].urlToImage
    let  expected = "https://resources.stuff.co.nz/content/dam/images/1/t/k/1/n/u/image.related.StuffLandscapeSixteenByNine.1420x800.1tk192.png/1548205243109.jpg";
 t.equal(actual,expected,"the page is done ");
 t.end();});
 });
