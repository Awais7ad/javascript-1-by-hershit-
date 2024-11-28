//intro to arrays(mutable hain orignal m chnage ata hai)
//reference type(jitny bi reference type hoty hain object hoty hain)
//how to create arrays

//ordered collection of items (mean index)

// let number=[1,2,3,4]
// let mixarray=[1,2,4,5,"string",null,undefined]
// console.log(number)


// let fruits=['banana','apple','mango','grapes'] //object hai
// console.log(fruits);
// console.log(fruits[0]);


let fruits=['banana','apple','mango','grapes']  //object hai
let obj={} //object litral bolty hain
console.log(fruits)
fruits[1]="date";
console.log(typeof fruits)
console.log(typeof obj)
console.log(Array.isArray(fruits))
console.log(Array.isArray(obj))
console.log(fruits)



//array indexing