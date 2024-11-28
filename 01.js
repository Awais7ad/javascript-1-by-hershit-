console.log("Hello world");
// comment
// arrray(26)
// spread operatior in array(29)
//
// for of loop // autometic tb tk chaly gi jitni lenght ho gi 
// index p jo value yan element hai wo dy gi (33)
// const fruits=['apple','mango','grapes','fruit4','fruit5']
// let fruit2=[];
// for(let fruit of fruits){
//     fruit2.push(fruit.toUpperCase())
//     console.log(fruit)
// }
// console.log(fruit2)
// for in loop in array
// index dy gi only 0,1,2,3 tb tk chaly gi jb tk last index na a jy (34)
// const fruits=["apple",'mango','grapes','fruits4'];
// const fruits2=[];

// for(let index in fruits){
//     console.log(index)
//     fruits2.push(fruits[index].toUpperCase())
// }
// console.log(fruits2)
// array destructure(35)


// primitive type  immutable
// non-primitive type  mutable

// Mutable types allow changes to their content after creation, meaning the same object reference can be modified (like arrays and objects in JavaScript). In contrast, immutable types remain constant; any change creates a new object instead of altering the original (like strings and numbers).
// let person = { name: "Alice", age: 30 };
// person.age = 31; // Modifying a property
// console.log(person); // Output
// let greeting = "Hello";
// greeting = greeting +c ", World!"; // Creates a new string
// console.log(greeting);

// In the mutable example, the person object is modified directly, while in the immutable example, a new string is created instead of altering the original string.

// mutable example with function
// This function modifies an array in place, demonstrating mutability:


// function addToArray(arr, item) {
//     arr.push(item); // Modifies the original array
// }

// let numbers = [1, 2, 3];
// addToArray(numbers, 4);
// console.log(numbers); // Output: [1, 2, 3, 4]


// This function returns a new string instead of modifying the original, demonstrating immutability
// function appendToString(str, suffix) {
//     return str + suffix; // Returns a new string
// }

// let originalString = "Hello";
// let newString = appendToString(originalString, ", World!");
// console.log(originalString); // Output: "Hello" (unchanged)
// console.log(newString);      // Output: "Hello, World!" (new string)
// Summary
// In the mutable example, the original array is modified by the addToArray function.
// In the immutable example, the original string remains unchanged, and the appendToString function returns a new string instead.


// Feature	           Mutable	     Immutable
// Can Modify Directly?	Yes	           No (create a new instance instead)
// Common Examples	Arrays objects	 , Strings numbers
// Memory Efficiency	Potentially more efficient,	Can create extra memory overhead
// Safety	Risk of unexpected changes	Less risk, as original data can't change 




// Summary Table of Hoisting Behavior
// Type         	      Declaration Hoisted	Initialization Hoisted	TDZ Applies?
// var	                  Yes	                 No	                     No
// let and const	      Yes	                 No	                     Yes
// Function Declaration   Yes	                 Yes	                  No
// Function Expression	  Yes (var hoisted)	     No	                      Yes (for let/const)



// Difference Between Function Declaration and Function Expression
// Feature	                    Function Declaration	           Function Expression
// Hoisting	                     Fully hoisted	                    Variable is hoisted, but function is not initialized
// Syntax	                      Starts with the function keyword	Can be assigned to a variable or passed as an argument
// Anonymous Function Allowed	   No	                             Yes
// Can Call Before Definition	  Yes	                               No


// Global Scope
// Variables declared outside of any function or block have global scope.
// They are accessible from anywhere in the code.
// In browsers, global variables are added to the window object.



// Function Scope
// Variables declared inside a function are function-scoped.
// They are only accessible within that function.

// Block Scope
// Variables declared with let or const inside a block ({}) are block-scoped.
// They are only accessible within that block.

// Lexical Scope
// Inner functions have access to variables defined in their outer functions (closure).
// Lexical scope is determined at the time of code writing, not runtime.


// Module Scope
// Variables declared in a JavaScript module are scoped to that module.
// They are not accessible globally unless explicitly exported.