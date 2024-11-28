// how to clone array

//how to cancatinate two arrays

// let array1=['item1','item2',['aaaa']];

// // let array2=['item1','item2'];//clone krny ka ye treqa wrong hai because hmari pas array bht bri bi ho skti han to tb issue ho ga
// // let array2=array1.slice(0)// 0 sy start or end tk dy ga
// // let array2=[].concat(array1)// dosra treqa 
// //new way
// // let array2=[...array1]  //spread operator
// //i want to cancatinate more element
// // let array2=array1.slice(0).concat(["item23",'item24'])
// // let array2=[].concat(array1,["item23",'item24'])//dosra treqa

// 
// let array1=['item1','item2','item3',['item4']]
// let array2=[...array1]
// // array1[3][0]='ddddd'
// console.log(array1)
// console.log(array2)


// let obj1={
//     name:'awais',
//     age:22,
//     address:["multan","aaaa"]
// }
// let obj2={...obj1}
// obj1.address[0]="app"
// console.log(obj1)
// console.log(obj2)
//

// let oneMoreArray=['item4','item5']
// let array2=[...array1,...oneMoreArray,'item23','item24']

// array1[2]='item3'
// // array2.push("item4")
// // console.log(array1===array2)

// console.log(array1)
// console.log(array2)


// This creates a shallow copy of array1. This means array2 will be a new array with the same values as array1, but changes to one won't affect the other 
// (as long as the values are primitive types like numbers or strings).
// in this case

//Note
// When working with the spread operator, the phrase "as long as the values are primitive types like numbers or strings" refers to the fact that primitive values (like numbers, strings, booleans, etc.) are copied by value. This means each element in the copied array is independent of the original array.

// However, when the array contains non-primitive types like objects or arrays, only a shallow copy is made. This means the spread operator will copy the references of those objects or arrays, not their actual values, which can lead to unexpected behavior if you modify the copied objects.

// Example with non-primitive types (objects):
//  let array1 = [{ a: 1 }, { b: 2 }]; // Array contains objects
// let array2 = [...array1]; // Spread operator to copy array1 into array2

// array2[1].b = 100; // Modify the object in array2

// console.log(array1); // Output: [{ a: 100 }, { b: 2 }] (original array also changes)
// console.log(array2);


// Conclusion:
// Primitive types (numbers, strings, booleans): They are copied by value, so modifying one array does not affect the other.
// Non-primitive types (objects, arrays): They are copied by reference, so changes in one array will affect the other if the elements are objects or arrays.





// spreading object 
// let obj1 = { a: 1, b: 2 };
// let obj2 = { ...obj1 };
// obj1.c=3;

// console.log(obj2);   
// console.log(obj1)


// let numbers = [1, 2, 3];
// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(...numbers));

// let numbers = [1, 2, 3];
// function sum(number) {
//     let [a,b,c]=number;
//   return a + b + c;
// }

// console.log(sum(numbers));


// let obj1 = { a: 1, b: 2 };
// obj1 = { ...obj1, c: 3 }; // Spread obj1 into a new object, then update obj1

// console.log(obj1); // Output: { a: 1, b: 2, c: 3 }


// let obj1 = { a: 1, b: 2 };
// Object.assign(obj1, { c: 3 }); // Update obj1 by adding property "c"

// console.log(obj1); // Output: { a: 1, b: 2, c: 3 }


// let obj1 = { a: 1, b: 2 };
// obj1.c = 3; // Add a new property "c"

// console.log(obj1); // Output: { a: 1, b: 2, c: 3 }



// Which Method to Use?
// Shallow Cloning: If your array only contains primitive values (numbers, strings, etc.), you can use any of the first four methods (slice(), concat(), spread operator, or Array.from()).
// Deep Cloning: If your array contains nested arrays or objects, and you need a deep copy, use JSON.parse(JSON.stringify()). However, be cautious with this method because it won't work properly with non-JSON-compatible data like functions, undefined, NaN, etc.


// Example of Shallow vs Deep :

// let arr = [{ name: 'Alice' }, { name: 'Bob' }];

// // // Shallow clone // const or let lga ky dekho
// const shallowClone = [...arr];
// console.log(shallowClone)
// // shallowClone=[]
// console.log(shallowClone)

// // // Deep clone
// // let deepClone = JSON.parse(JSON.stringify(arr));

// // // Modify original array
// arr[1].name = 'Charlie';
// console.log(arr)
// console.log(shallowClone); // [{ name: 'Charlie' }, { name: 'Bob' }]
// console.log(deepClone); // [{ name: 'Alice' }, { name: 'Bob' }]


// Shallow Clone: The change in the original array affects the shallow clone.
// A shallow copy copies only the top-level properties of an object or array. If the original object contains nested objects or arrays, the shallow copy will still reference the same inner objects or arrays. This means that modifications to the inner objects or arrays will reflect in both the original and the copied version.
// let original = {
//     name: "Alice",
//     details: {
//       age: 25,
//       city: "New York"
//     }
//   };
  
//   // Shallow copy
//   let shallowCopy = { ...original };
  
//   // Modify the nested object in the original
//   original.details.age = 30;
  
//   console.log(original.details.age); // 30
//   console.log(shallowCopy.details.age); // 30 (also changes)


// const original = {
//     name: "John",
//     age: 30,
//     address: {
//       city: "New York",
//       country: "USA"
//     }
//   };
  
//   // Deep copy using JSON methods
//   const deepCopy = JSON.parse(JSON.stringify(original));
  
//   // Modifying the address in the deep copy
//   deepCopy.address.city = "Los Angeles";
  
//   console.log(original.address.city); // Output: "New York"
//   // The original object's address remains unchanged
  

// Deep Clone: The deep clone remains unaffected by changes to the original array.


// Conclusion:
// In a deep copy, changes made to the original object do not affect the copy because they are stored in separate memory locations and have no shared references. In contrast, with a shallow copy, any changes to nested objects or arrays will affect both the original and the copy due to shared references.

// practice



// In this example, merged contains the properties from obj1, obj2, and obj3, but obj1, obj2, and obj3 remain unaffected. Using {} as the first argument creates a new object for the combined result.
// const obj1 = { a: 1 };
// const obj2 = { b: 2 };
// const obj3 = { c: 3 };

// const merged = Object.assign({}, obj1, obj2, obj3);
// console.log(merged); // Output: { a: 1, b: 2, c: 3 }
// console.log(obj1);   // Output: { a: 1 } (unchanged)