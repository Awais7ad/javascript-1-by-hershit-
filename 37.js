// diffrence between dot and bracket notation
const key="email";//ye wali email wlai key person m add krni hai

// const person={
//     name:'Awais',
//     "age":22.5,
//     person_hobbies:["dhapi","animal lover","cricket lover"],// is ko dot notation sy access kr skty hain
//     "person hobbies":["dhapi","music"] // isko ko access krny ky lie bracket notaion use ho gi

// }


// const emailValue = "awaissandhu659@gmail.com";
// console.log(person.person_hobbies)
// console.log(person["person hobbies"])
// person[key]="awais@gmail.com";
// person[key]=emailValue;
// person["person hobbies"][0]="lo"
// console.table(person)

// console.log(person)
// person.email="aaaaaaaaaaaaaa"
// console.log(person) 




// for...in Loop
// The for...in loop is used to iterate over the enumerable properties of an object. It goes through the keys of the object
// Use it to iterate over the keys (properties) of an object.
// Remember to use hasOwnProperty() to avoid iterating over inherited properties.

const person = {
    name: 'Awais',
    age: 22.5,
    hobbies: ["dhapi", "animal lover", "cricket lover"]
};

// // Using for...in to iterate over properties of an object
// for (const key in person) {
//     if (person.hasOwnProperty(key)) { // Check if the property belongs to the object itself
//         console.log(`${key}: ${person[key]}`); // Outputs the key and its corresponding value
//     }
// }



// for...of Loop
// The for...of loop is primarily used for iterating over iterable objects like arrays, strings, maps, and sets. It cannot be used directly with objects. However, if you want to iterate over the values of an object, you can use Object.values() to get an array of the object's values and then iterate over that array.
// Use it to iterate over iterable objects like arrays or strings.
// When working with objects, convert them to an iterable form (e.g., using Object.values(), Object.keys(), or Object.entries()) to utilize for...of.
// Object.keys(obj): For keys.
// Object.values(obj): For values.
// Object.entries(obj): For both keys and values.
// const person = {
//     name: 'Awais',
//     age: 22.5,
//     hobbies: ["dhapi", "animal lover", "cricket lover"]
// };

// console.log(Object.values(person))



// // Using for...of to iterate over the values of an object
// for (const value of Object.values(person)) {
//     console.log(value); // Outputs each value of the person object
// }



// const person = { name: 'Alice', age: 25, city: 'New York' };

// for (const [key,value] of Object.entries(person)) {
    // console.log(key)
  // console.log(`${key}: ${value}`);
  // Outputs:
  // name: Alice
  // age: 25
  // city: New York
// }

// const person = { name: 'Alice', age: 25, city: 'New York' };

// for (const key of Object.keys(person)) {
//   console.log(key);             // Outputs each key: "name", "age", "city"
//   console.log(person[key]);      // Outputs each value: "Alice", 25, "New York"
// }




// Summary
// Use for...in to iterate over the keys in an object.
// Use for...of to iterate over the values of an iterable like an array, string, Map, or Set.

// Enumerable Properties: Regular properties of objects that you want to be easily accessible and visible when iterating.
// const obj = { name: 'Alice', age: 25 };

// // Default properties are enumerable
// for (const key in obj) {
//   console.log(key);  // Outputs: "name", "age"
// }
// console.log(Object.keys(obj)); // Outputs: ["name", "age"]
// Non-Enumerable Properties: Useful for "private" or "hidden" properties that should not show up in standard iteration or enumeration, such as metadata or internal properties in an object.
// const obj = { name: 'Alice' };

// // Add a non-enumerable property
// Object.defineProperty(obj, 'age', {
//   value: 25,
//   enumerable: false
// });

// console.log(typeof obj.age);         // Outputs: 25
// console.log(Object.keys(obj)); // Outputs: ["name"] (does not include "age")

// for (const key in obj) {
//   console.log(key);            // Outputs: "name" (does not include "age")


// }



