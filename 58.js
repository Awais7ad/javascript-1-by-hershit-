// filter method

// filter ka callback hmesha return krna chahye bolean value true or false
const numbers=[1,3,2,6,4,8]
// function isEven(number){
// return number%2===0;
// }
// const newarray=numbers.filter(isEven)
// console.log(newarray)


const newarray=numbers.filter((number)=>{
    return number%2===0;
})

console.log(newarray)