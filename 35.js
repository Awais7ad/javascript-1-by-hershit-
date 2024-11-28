// // array destructuring
const myArray=['value1','value2','value3','value4'];
// const var1=myArray[0];
// const var2=myArray[1];
// console.log('var1',var1)
// console.log('var2',var2) 

//






// let [a,b,...myNewArray]=myArray;// array destructure // agr m const name dta to neachy m change nhi kr pata isko
// a="value changed"
// console.log('value of a',a,'value of b',b,myNewArray)
// // agr mery array m ek hi value hai or destructure krty wqt m ny
// // us ko a,b dy diya to 0 index a ko assign ho jy ga or baqi undefined ay ga
// //agr ap koi index skip krna chahty hai 
// // like this a, ,b => 0, ,2  1     index skip 

// const [c, ,d,...ary]=myArray;// array destructure // agr m const name dta to neachy m change nhi kr pata isko
// c="value changed"
// console.log(c)
// a
// let myNewArray=myArray.slice(2)
// console.log(myNewArray)
// // new array that stroe value from myArray value from index 2 onward

// // a: This will be assigned the first element of myArray.
// // b: This will be assigned the second element of myArray.
// // ...myNewArray: The rest operator will collect all the remaining elements of myArray (starting from the third element) and assign them to a new array called myNewArray.
// // Note
// //Array Destructuring allows you to unpack values from an array into individual variables.
// // The rest operator (...) allows you to capture the "rest" of the elements of an array into a new array.



// practice

// const arr = [1, 2, 3, 4];
// for (let i = 0; i < arr.length; i++) {
//     setTimeout(function() {
//         console.log('Index: ' + i);
//     }, 1000);
// }

// const arr = [1, 2, 3, 4];

// function printIndex(i) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Index:', i);
//             resolve();
//         }, 1000);
//     });
// }

// async function logIndices() {
//     for (var i = 0; i < arr.length; i++) {
//         await printIndex(i);
//     }
// }

// logIndices();


