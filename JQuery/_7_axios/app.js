


//method-3 (Axios)
axios.get('https://api.tvmaze.com/search/shows?q=girls')
    .then(function(resp){
        console.log(resp);
    })
    .catch(function(err){
        console.log(err);
    })



