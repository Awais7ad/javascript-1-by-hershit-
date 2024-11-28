// arrow function

// const singHappyBirhtday=function(){
//     console.log('happy birthday to you....')

// }


const singHappyBirhtday=()=>{
    console.log('happy birthday to you....')

}

singHappyBirhtday();


// const sumThreeNumber=function(num1,num2,num3){
//     return num1+num2+num3;

// }


const sumThreeNumber=(num1,num2,num3)=>{
    return num1+num2+num3;
}
let a=sumThreeNumber(2,3,4)
console.log(a)



// const isEven=function(num){
//     return num%2===0;

// }

// arrow function m bi jb apka function ek hi input ly ga to usy asy likh skty hai
// app ye() bracket hta skty hain 
// ye sirf tb kr skty jb 1 parameter ho
// zero ky case m bi lgani () hain ye
// agr ek hi line m return kr raha ap ka function to ap ye {} hta skty hain or same line m
// m la kr return ko bi remove kr skty hi
const isEven=num=>num%2===0;

let b=isEven(3)
console.log(b)