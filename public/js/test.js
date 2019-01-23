const test = require('tape');
var logic = require("./logic.js")
const key = require("./config.js")
const url = `https://newsapi.org/v2/top-headlines?language=en&category=business&apiKey=${key}`;

test('test fechAPI function', function(t) {
  t.equal(1, 1, "the page is done ");
  t.end();
});

test("test Status is equal 200", function(test) {
  logic.fetchAPI(url, function(xhr) {
    test.equal(xhr.status, 'ok', "State equal 200");

    test.notEqual(xhr.readyState, 4, "ready State equal 4");
    test.end();
  });
});

test('test fechAPI function', function(t) {
  logic.fetchAPI(url, (res) => {
    let actual = logic.getImage(res, 0);
    let expected = "https://www.alaraby.co.uk/File/GetImageCustom/567df8bb-1dbf-44cb-80d5-e8ac606cffb7/600/338";
    t.equal(actual, expected, "the image not the same ");
    t.end();
  });
});
