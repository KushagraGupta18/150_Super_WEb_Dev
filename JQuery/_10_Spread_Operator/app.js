


// let arr1=[10,20,30,40];
// let arr2=[50,60,70];


//concat
// console.log(arr1.concat(arr2));



//spread operator----modern way

//array
// arr2=[...arr1 , 50,60,70];
// console.log(arr2);

// arr1=[10,20,30,40,...arr2];
// console.log(arr1);



//object
// let obj={
//     l:10,
//     m:'kush', //i want to remove it
//     k:'gupta'
// }

// let obj2={
//     ...obj,
//     age:27
// }
// console.log(obj2);

// //before deleting m
// console.log(obj);

// //after deleting m
// delete obj.m;   //remove anything from an object
// console.log(obj);



// why we want spread operator?
// console.log(Math.min(0,1,2,3,4,5,6,7,8,9));//0
// console.log(Math.max(0,1,2,3,4,5,6,7,8,9));//9

let arr1=[0,1,2,3,4,5,6,7,8,9];
// console.log(Math.min(arr1));//i cant directly access array by name i will check min and max by the help of spread operator
// console.log(Math.max(arr1));

console.log(Math.min(...arr1));
console.log(Math.max(...arr1));
