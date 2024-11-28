//trim();  // return new string 
//toUpperCase
//toLowerCase
//slice   // extract portion of array or string  without modifying the orignal one ,work with both,return new array or string

// strings in JavaScript are immutable and do not have a splice method
//splice orignal ko modify krta hai or removed element ki array return krta work only for array
// array.splice(startIndex, deleteCount, item1, item2, ...);  //deletecount start from 1
// arrayOrString.slice(startIndex, endIndex); // endIndex not include
// string.substr(startIndex, length); // startindex if 7 and lenght is 5 , from 7 to extract 5 characters 1,2,3,4,5


// trim

// let firstName = "harShit"
// console.log(firstName.length)               
// trim return new string (imuteable not change existing string give us new string)
// ham new string bi ly skty hain or usi previous wali string m bi store kr skty hain
// firstName=firstName.trim()
// console.log(firstName,firstName.length)
// let newString=firstName.trim();
// console.log(newString.length)
// console.log(firstName.length)

// toUpperCase

// firstName=firstName.toUpperCase()
// console.log(firstName)

//toLowerCase

// firstName=firstName.toLowerCase()
// console.log(firstName)

//slice(view particuler part of string)

//start index(include)
//end index (not include)
// let firstName = "harShit"
// let newString=firstName.slice(0,4)
// console.log(newString)
// let newStrin=firstName.slice(1,4)
// console.log(newStrin)






// let str = "JavaScriptabcd";

// console.log(str.slice(-10,9)); 
// // "va": The `slice()` method extracts a section of the string starting from index 2 up to (but not including) index 4.
// // Accepts negative indices (counts from the end), and does not swap arguments.

// console.log(str.substring(2, 4)); 
// // "va": The `substring()` method extracts characters between two indices, starting at index 2 and ending before index 4.
// // If the start index is greater than the end index, it swaps the two indices.

// console.log(str.substr(4, 6)); 
// "Scri": The `substr()` method extracts a substring starting at index 4 and continues for 6 characters.
// Note: `substr()` is considered deprecated in some contexts, so prefer using `slice()` or `substring()`.


// If you pass a negative index, substring() will treat it as 0, not a negative position.
// let str = "Hello, World!";
// console.log(str.substring(-3, 5)); // "Hello"
// Here, the start index -3 is treated as 0, so the result is the same as str.substring(0, 5)


// slice(start, end) accepts negative indices, allowing you to extract characters starting from the end of the string.
// let str = "Hello, World!";
// console.log(str.length)
// console.log(str.slice(-4,10)); 
// slice(-3, 12) extracts characters starting 3 positions from the end (the last 3 characters) and continues until the 12th position (end is exclusive).

// Summary of Differences:
// substring() treats negative indices as 0, while slice() allows negative indices to count from the end of the string.
// substring() swaps start and end if start > end, while slice() does not swap them and returns an empty string in such cases.
// These behaviors make substring() more restrictive in terms of handling negative indices, whereas slice() offers more flexibility.

// let str = "Hello, World!";
// console.log(str.indexOf("World")); // 7
// console.log(str.lastIndexOf("o")); // 8
// console.log(str.includes("Hello")); // true
// console.log(str.startsWith("Hell")); // true
// console.log(str.endsWith("!")); // true

// let str = "Hello World, World!";
// let newStr = str.replace("World", "JavaScript"); // "Hello JavaScript, World!"
// let newStrAll = str.replaceAll("World", "JavaScript"); // "Hello JavaScript, JavaScript!"

// let str = "apple,banana,orange";
// let fruits = str.split(","); // ["apple", "banana", "orange"]
// console.log(fruits)
// If you try to join a nested array (an array within an array), it will not flatten the array but include the inner array as an element in the resulting string.
// let nestedArr = [1,2,[3,4,6],5];
// let result = nestedArr.join("-"); 
// console.log(result); // "1-2-3,4,6-5"
// When you call join() on a top-level array, it processes each element in the array.
// If an element is a pr  imitive value (like a number or a string), it converts it to a string directly.
// If an element is another array (nested array), it calls join() on that nested array using the default separator (which is a comma).

// let arr = ["apple", undefined, "banana", null, "cherry"];
// let result = arr.join(",");
// console.log(result); // "apple, , banana, , cherry"

// let str = "Hi";
// console.log(str.repeat(3)); // "HiHiHi"

// let str = "Hello";
// str[0] = "h"; // This won't change the string


// str = "h" + str.slice(1); // "hello"
// console.log(str); // "Hello"




// var str = "awais anwar sandhu"; // Note: Changed 'srt' to 'str'
// str = str.slice(-10, -4); // Slicing the string from -10 to -4
// console.log(str); // Outputting the result war sa



// function isPalindrome(str) {
//     // Remove all non-alphanumeric characters and convert to lowercase
//     // let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
//     // Reverse the string
//     let reversedStr = str.split("").reverse().join("");
//     console.log(reversedStr)
//     // Check if the cleaned string is equal to the reversed string
//     return str === reversedStr;
//   }
  
//   // Test cases
//   console.log(isPalindrome("racecar"));  


// function generateSpiralMatrix(n) {
//     // Initialize an empty n x n matrix
//     let matrix = Array.from({ length: n }, () => Array(n).fill(0));
    
//     let left = 0, right = n - 1, top = 0, bottom = n - 1;
//     let num = 1;
  
//     while (left <= right && top <= bottom) {
//       // Fill the top row (left to right)
//       for (let i = left; i <= right; i++) {
//         matrix[top][i] = num++;
//       }
//       top++;
  
//       // Fill the right column (top to bottom)
//       for (let i = top; i <= bottom; i++) {
//         matrix[i][right] = num++;
//       }
//       right--;
  
//       // Fill the bottom row (right to left)
//       if (top <= bottom) {
//         for (let i = right; i >= left; i--) {
//           matrix[bottom][i] = num++;
//         }
//         bottom--;
//       }
  
//       // Fill the left column (bottom to top)
//       if (left <= right) {
//         for (let i = bottom; i >= top; i--) {
//           matrix[i][left] = num++;
//         }
//         left++;
//       }
//     }
  
//     return matrix;
//   }
  
//   // Example usage:
//   console.log(generateSpiralMatrix(3));
//   console.log(generateSpiralMatrix(4));
//   console.log(generateSpiralMatrix(5));
  


// function wordFrequency(paragraph) {
//     // Step 1: Normalize the paragraph by removing punctuation and converting to lowercase
//     const cleanedParagraph = paragraph
//       .replace(/[^\w\s]/g, "") // Remove punctuation
//       .toLowerCase(); // Convert to lowercase
    
//     // Step 2: Split the paragraph into words
//     const words = cleanedParagraph.split(/\s+/); // Split by whitespace
    
//     // Step 3: Count word frequencies
//     const frequency = {};
//     words.forEach(word => {
//       if (word) { // Ignore empty strings
//         frequency[word] = (frequency[word] || 0) + 1;
//       }
//     });
    
//     return frequency;
//   }
  
//   // Example usage
//   const paragraph = `
//     JavaScript is a programming language. JavaScript can be used for web development. 
//     Many developers love JavaScript!
//   `;
  
//   console.log(wordFrequency(paragraph));
  
// let str = "Hello";
// // To remove characters and create a new string:
// let newStr = str.slice(0, 2) + str.slice(3); // "Helo" (removes the third character)
// console.log(newStr);

// let str = "Hello";
// let arr = str.split(""); // Convert string to array of characters
// console.log(arr)
// let a=arr.splice(2, 1); 
// console.log(arr)
// console.log(a)
// // Remove the third character
// let newStr = arr.join(""); // Convert back to string
// console.log(newStr); // "Helo"






// 1. splice
// Use case: Modifies the original array by adding/removing elements.
// Data type: Works only on arrays.
// Returns: The removed elements as an array


// Example 2: Adding Elements

// let arr = [1, 4, 5];
// arr.splice(1, 0, 2, 3); // Add 2, 3 at index 1
// // agr replace krna hai to then 0 ki jga number deny pry ga index kis tk replace krna hai
// console.log(arr); // [1, 2, 3, 4, 5]


// for (let i = 0; i < 5; ++i) {
//   console.log(i); // Logs: 0, 1, 2, 3, 4
// }

// However, you can omit any part of the structure, but you must include the semicolons:

// let i = 0;
// for (; i < 5; i++) {
//     console.log(i);
// }

// for (let i = 0; i < 5; ) {
//   console.log(i++);
// }

// let i = 0;
// for (; i < 5; ) {
//     console.log(i++);
// }

// let i = 0;
// while (i < 5) {
//     // console.log(i++); // Logs: 0, 1, 2, 3, 4
//     console.log(++i); // Logs: 1, 2, 3, 4,5
// }