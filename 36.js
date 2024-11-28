// object // reference type

// arrays are good but not sufficient
//for real world data
//object stores key values pairs
//objects dont have index
//how to create objects 
// javascript m key always in string  lkn hmm likhty nhi hai like 'name' ,'age'
//how to access data from object //dot notation // square bracket
//access
const person={
    name:'Awais',
    "age":22.5,
    hobbies:["dhapi","animal lover","cricket lover"
    ]

}
// console.log(person.name)// access property of object
console.log(person.age)// access property of object
// console.log(person.hobbies)// access property of object
// console.table(person)
//access using square bracket notation
// access krty wqt "" lazmi lgani hain agr nhi lgay gy to error dy ga
// console.table(person["name"])
// console.table(person["age"])

// person["gender"]="Male";
// how to add key value pairs to objects
// person.gender='Male';//add 
// person.name='Anwar'//update

console.table(person)
let a=null;
console.log(typeof a)