

//Array dest.

// let fruits = ['apple' , 'guava' , 'mango' , 'banana' , 'lichi' , 'pineapple']

// earler way / older way
// let first = fruits[0]; //apple
// let second = fruits[1];
// console.log(first);
// console.log(second);

// destructure an array

// let [ sachin , manish , third, forth ] = fruits;

// console.log(sachin);
// console.log(manish);


//default value
// let fruits = ['apple' , 'guava' , 'mango' ];

// let [ sachin , manish , third, forth='ananas' ] = fruits;
// console.log(sachin)
// console.log(manish)
// console.log(third)
// console.log(forth) //ananas


//override
// let fruits = ['apple' , 'guava' , 'mango' , 'grapes' ];
// let [ sachin , manish , third, forth='ananas' ] = fruits;
// console.log(sachin)
// console.log(manish)
// console.log(third)
// console.log(forth) //grapes


// ------------------------------------


//Object dest.

// let car = {
//     name: 'nano',
//     price: 100000
// }

//older way
// let n = car.name;
// let p = car.price;

// console.log(n)
// console.log(p)

// better way

//object destructuring

// let {n,p} =  car; //wrong way(because objects are unordered it doesnot know where is n and p . While, in the case of array, array is ordered and we can make any name of variable at the time of destructuring)

// let {name,price} =  car; //right way
// console.log(name)
// console.log(price)


//key changing
// let {name:n , price:p} =  car; //right way
// console.log(n)   //right way
// console.log(name) //wrong way(name is not defined)
// console.log(p)   //right way
// console.log(price) //wrong way(price is not defined)


//default values
// let{name:naam="maruti" , price} = car;
// console.log(naam);
// console.log(price);


console.log("aaj hum nodejs krenge");
console.log("nodejs ka bhuakaal kaafi hai");