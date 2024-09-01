

let ul=document.querySelector('ul');


//Method1--->XMLHTTPRequest()

let req=new XMLHttpRequest();

//Connection bana hai basically
req.open('GET','https://api.tvmaze.com/singlesearch/shows?q=girls');


//bhejni hai apni request
req.send();

//jab shi se data mil jaye.
req.onload=function(){
    // console.log(this,'KUSH');

    let data=JSON.parse(this.response);
    // console.log(data);
    let li=document.createElement('li');
    li.innerHTML=`
        <img src=${data.image.medium} height="100px">
        <span>${data.rating.average}</span>
    `
    ul.appendChild(li);
}

//lekin agr error aaye to
req.onerror=function(){
    console.log(this,'Vishu');
}





