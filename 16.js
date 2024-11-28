// and or operator
let firstName="harshit";
let age="17";
// if(firstName[0]==="h" ){
//     console.log('yours name is start with h')
// }
// if(age>18){
//     console.log("you are above 18")
// }

if(firstName[0]==="h" || age>18){
    console.log(`your name is start with h and your age is ${age}`)
}
if(firstName[0]==="h" && age>18){
    console.log(`your name is start with h and your age is ${age}`)
}