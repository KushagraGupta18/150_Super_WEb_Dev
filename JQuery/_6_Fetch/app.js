

//method-2 (fetch() method)
//using fetch for calling an api
fetch('https://api.tvmaze.com/search/shows?q=girls')
    .then(function(response){
        // console.log(response);//partial data is came after this by .json() method i will get full data and .json() will also return a promise 
        return response.json(); //return a promise
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })


