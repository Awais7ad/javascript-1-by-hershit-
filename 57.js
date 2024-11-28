// map


// always return new array
const numbers=[3,4,5,6,7];
// const square=function(number){
// // return number*number
// //agr simple ye function kuch na return kr rha ho
// // to wo new array m undefine return kry ga
// console.log(number*number)
// //abi return wali line ko commit kr dy 
// }

// const squareNumber=numbers.map(square)

// console.log(squareNumber)

// hm ye function mao () m bi bna skty hain


// const squareNumber=numbers.map(
//     function(number){
//         // return number*number
//         //agr simple ye function kuch na return kr rha ho
//         // to wo new array m undefine return kry ga
//         console.log(number*number)
//         //abi return wali line ko commit kr dy 
//         }
// )
// console.log(squareNumber)

//arrow function

// const squareNumber=numbers.map(
//     (number,index)=>{
//         return `index : ${index}, ${number*number}`
//         //agr simple ye function kuch na return kr rha ho
//         // to wo new array m undefine return kry ga
//         // console.log(number*number)
//         //abi return wali line ko commit kr dy 
//         }
// )
// console.log(squareNumber)

//real time example

const users=[
    {firstName:'awais',age:22},
    {firstName:'noor',age:23},
    {firstName:'ramzan',age:24},
]

const usersName=users.map((user)=>{
    return user.firstName
})

console.log(usersName)