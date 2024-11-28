// typeof operator

//data types (primitive data types)
// string "harshit"
// number 2,3,4
// boleans true,false
// undefined
// null 
// BigInt
// Symbols
let age=22;
let firstName="harshit";
// console.log(typeof age)
// console.log(typeof firstName)
// console.log(typeof false)

//convert number into string
//one trick for this add empty string in number
age=age+"";
// console.log(typeof age,age)
//convert string to number
//+ sign lga dijy before string trick hai
let myString="34"; //direct pluus put before this 
let myStr=+myString;//other wise this work well


// console.log(typeof myString)
console.log(typeof myStr)

//2nd method to perform this
//convert number into string
let number=34;
let newNumber=String(number)
console.log('newNumber',typeof newNumber)

//string into number
let string="34";
let newString=Number(string)
console.log('newString',typeof newString)