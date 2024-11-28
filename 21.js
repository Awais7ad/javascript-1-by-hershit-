// // example while loop
// // sum of first 10 number
// let num=1;
// let sum=0;
// // let i=1;
// while(num<=10){
//     sum=sum+num;
//     console.log(sum)
//     num++;

// }
// console.log(sum)

// //formula for this 
// let n=10;
// let total=(n*(n+1))/2;
// console.log(total)


// function factorialIterative(n) {
//   if(n<0) return undefined;
// //   if(n===0) return 1;
//   let result=1;
//   for(let i=1; i<=n; i++){
//      result*=i;

//   }
//   return result;
// }

// // Example usage:
// console.log(factorialIterative(5)); // Output: 120
// console.log(factorialIterative(0)); // Output: 1


// function factorialRecursive(n) {
//     if (n < 0) return undefined; // Factorial is not defined for negative numbers
//     if (n === 0) return 1;       // Base case: factorial of 0 is 1
//     return n * factorialRecursive(n - 1); // Recursive case
// }

// // Example usage:
// console.log(factorialRecursive(4)); // Output: 120
// console.log(factorialRecursive(0)); // Output: 1


function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare the cleaned string with its reverse
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // Output: true
console.log(isPalindrome("racecar"));                          // Output: true
console.log(isPalindrome("hello"));                            // Output: false
