



//Selecting Elements----->

//tag
// console.log($('h1'));

//class
// console.log($('.kush'));

//id
// console.log($('#ki'));   //in ids it does not allow me to choose multiple element because it is id and id is unique.




//Manipulate Elemenets----->

//css adding

// $('h1').css('color','red');
// $('h1').css('background-color','green');


// $('h1').css({
//     color:'red' ,
//     backgroundColor:'plum'
// })//in js we will use camelCase (backgroundColor)



//accessing text
//getter
// console.log($('p').text());//text is a method

//setter
// console.log($('p').text('senorita'));//it act as a setter as well(text method---textContent)
// console.log($('p').text('<em> senorita </em>'));//it does not happen


// console.log($('p').html());
// console.log($('p').html('<em>Senorita</em>'));//text method---InnerHTML(in which tags are also working)



//Manipulating Attributes----->

//getter
// console.log($('a').attr('href'));

//setter
// console.log($('a').attr('href','http://bing.com'));



//Selecting particular elements out of all---->
// -->By Pseudo class
// $('h1:nth-of-type(3)').css('border','2px solid plum');

// $('h1:firstChild()').css('border','2px solid plum');//wrong
// $('h1:first()').css('border','2px solid plum');//right

// $('h1:lastChild()').css('border','2px solid plum');//wrong
// $('h1:last()').css('border','2px solid plum');//right

// ---> alternative way
// $('h1').last().css('border','20px solid plum');
// $('h1').first().css('border','20px solid plum');


//Getting Value of inputs--->

//getter
// $('input').val();
// console.log($('input').val());//it shows empty because of refreshing after refreshed our value gets empty . If we write anything in input box then at that time if we type $('input').val(); on browser than it will show me the value.

//setter
// $('input').val('Mai nhi bataunga');



//Manipulating Class Attribute

//addClass()
// $('h1').first().addClass('first');//single class
// $('h1').first().addClass('first second');//multiple class

//removeClass()
// $('h1').first().removeClass('second'); //single class
// $('h1').first().removeClass('first second');//multiple class


//toggleClass()
// $('h1').first().toggleClass('second');//single class
// $('h1').first().toggleClass('second kush');//multiple class

//hasClass()-->
// $('h1').first().hasClass('second');//single class(give me true or false)





//events----->

//click
// $('button').click(function(){
//     console.log("master jii");
// })


//new concept and important
//this is not same as that of your js
// event.target==this(same kaam krega almost)
//this points to element over which the event is even triggered in jQuery
//make sure never use arrow function it doesnot work here

// $('li').click(function(){
//     $(this).css('color','crimson');
// })

// $('li').click(()=>{ //wrong in the case of arrow function it does not work
//     $(this).css('color','crimson');
// })


//input--->
// $('input').keyup(function(){ //keyup means mai jaise hi key ko chodunga vo show hoga
//     console.log($(this).val());
// })


//addEventListener----->'on'
//Dom             ------>JQuery
// $('button').on('click',function(){
//     console.log("master ji");
// })

// $('input').keypress(function(e){
//     if(e.which==13){    //enter key
//         console.log($(this).val());
//     }
// })



//effects------->

// $('#fadeout').click(function(){
//     $('#container').fadeOut();
// })

// $('#fadein').click(function(){
//     $('#container').fadeIn();
// })

// $('#fadetoggle').click(function(){
//     $('#container').fadeToggle();
// })


