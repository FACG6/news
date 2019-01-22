
function fetch(url,cb){

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(status);
             var result = JSON.parse(xhr.responseText);
         cb(result);
        }
    }
    xhr.open("GET",url,true);
    xhr.send();
    
};

