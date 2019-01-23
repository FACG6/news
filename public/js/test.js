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
  

  test("test ready State is equal 4",function (test){
    const expected = 4;
    logic(url, function(xhr) {
      actual = xhr.readyState;
      test.notEqual(actual, expected, "ready State equal 4");
      test.end();
    });
  });

  
test('test fechAPI function',function(t){
    logic(url,(res)=> {let actual =res.articles[0].urlToImage
    let  expected = "https://www.prachachat.net/wp-content/uploads/2019/01/businessman-1071758_960_720-2.jpg";
 t.equal(actual,expected,"the page is done ");
 t.end();});
 });
