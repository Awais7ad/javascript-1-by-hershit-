//undefined when we work with let var and not assign a value to them then their typeof is undefined
// but const gives us a error
let firstName; //not assign value data type undefined ho gi
console.log(typeof firstName)

firstName ="Harshit";
console.log(typeof firstName,firstName)
//null (kuch nhi)
//zero mtlb zero //null mtlb (kuch nhi)
//typeof null is object this is a bug in javascript
let myVariable=null;
console.log(typeof myVariable,myVariable)
 myVariable="awais";
 console.log(typeof myVariable,myVariable)

//BigInt
//limit 
//age hm koi operation perform like plus minus etc
// to hm datatype BigInt ko kisi dosri data type ky sth mix nhi kr skty
//like number+BigInt this gives us a error msg we can not mix BigInt with other data type
let myNumber=BigInt(1231234134341432423441412343);
let sameMyNumber=12n;
console.log(typeof myNumber)
console.log(typeof sameMyNumber)

console.log(Number.MAX_SAFE_INTEGER)
