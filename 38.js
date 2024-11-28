// how to iterate object 
const person={
    name:"awais",
    age:22,
    "person hobbies":["guitar","sleeping","listening"]
}

//for in loop
// for(let key in person){
//     console.log(`${key} : ${person[key]}`)
//     // console.log(key,":", person[key])
//     // person[key] compute kry ga
// }
//Object.keys
// Object.values(), Object.keys(), or Object.entries()
// console.log(Object.entries(person))

//for of in object 
for(let key of Object.keys(person)){
console.log(key, person[key])
}





// // Non-enumerable Properties
// // You can create non-enumerable properties using Object.defineProperty(). Non-enumerable properties will not be included when iterating through an object using loops like for...in.
// // const person = {
// //     name: 'Awais',
// //     age: 22.5
// // };

// // Adding a non-enumerable property
// // Object.defineProperty(person, 'gender', {
// //     value: 'male',
// //     enumerable: false // Set enumerable to false
// // });

// // for (const key in person) {
// //     console.log(key); // Only logs 'name' and 'age', not 'gender'
// // }

// console.log(person.gender); // You can still access 'gender', but it's not enumerable

// console.log(person.propertyIsEnumerable('name')); // true
// console.log(person.propertyIsEnumerable('gender')); // false


// Enumerable properties are properties that can be iterated over using loops like for...in and methods like Object.keys().
// Non-enumerable properties are hidden from these loops but can still be accessed directly.
// By default, most properties are enumerable unless you specifically mark them as non-enumerable using Object.defineProperty().


Object.defineProperty(person, 'gender', {
    value: 'male',
    enumerable: false,  // Not enumerable
    writable: false,    // Cannot change the value
    configurable: false // Cannot change property descriptors or delete the property
}
["1","abc"]
);

console.log(person.gender); // Outputs: male

// // Trying to change the value will not work because writable is false
// person.gender = 'female';
// console.log(person.gender); // Still outputs: male

// // Trying to delete the property will not work because configurable is false
// delete person.gender;
// console.log(person.gender); // Still outputs: male


// for(let key in person){
//     console.log(`${key} : ${person[key]}`)
//     console.log(key,":", person[key])
//     // person[key] compute kry ga
// }


//for of in object 
// for(let key of Object.keys(person)){
// console.log(key, person[key])
// }




// Define multiple properties using Object.defineProperties
Object.defineProperties(person, {
    gender: {
        value: 'male',
        enumerable: true,  // Not enumerable
        writable: false,    // Cannot change the value
        configurable: false // Cannot change descriptors or delete the property
    },
    additionalData: {
        value: ["1", "abc"], // You can set an array as a value
        enumerable: true,    // This one is enumerable
        writable: true,      // Can modify this array
        configurable: true   // Can delete or change this property
    }
});

// Output the person object
// console.log(person);

// Check if gender is enumerable (won't show up in loops)
// for (const key in person) {
//     console.log(key); // Will log 'name', 'age', and 'additionalData', but not 'gender'
// }

// Check the additionalData property
// console.log(person.additionalData); // Outputs: ["1", "abc"]

// for(let key in person){
//     console.log(`${key} : ${person[key]}`)
//     console.log(key,":", person[key])
//     // person[key] compute kry ga
// }


// for of in object 
// for(let key of Object.keys(person)){
// console.log(key, person[key])
// }