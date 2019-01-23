
 var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function fetchAPI(url,cb){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        var response =  JSON.parse(xhr.responseText);
         cb(response);
    }
    }
    xhr.open("GET",url,true);
    xhr.send();
    
};



    module.exports = fetchAPI;


