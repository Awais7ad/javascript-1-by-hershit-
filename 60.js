// sort method
// Ascii table
// char : ascii value

// '0' : 48
// '9' : 57


// 'A' : 65
// 'Z' : 90

// 'a' : 97
// 'z' : 122

// sort
// orignal ko change kry ga
// 5,9,1200,400,3000

// 5,9,400,1200,3000 expected  // javascript in ko number smj kr sort nhi kr rha wo in ko string smj kr sort kr rha hai

// const numbers=[5,9,1200,400,3000]
// // ["5","9","1200","400","3000"]
// // javascript asy string m convert kr ly ga 
// // or string ko sort krny ky lie javascript ascii code ko use krta hai
// // javascript string ka first character dekhy gi
// // or sort kry gi
// // 5 ascii code 53
// // 9 ascii code 57
// // 1200 ascii code 49
// // 400 ascii code 52
// // 3000 ascii code 51

// numbers.sort()  // 1200,3000,400,5,9
// console.log(numbers)


// const userNames=['harshit','abcd','Hss','mohit','nitesh']
// userNames.sort()
// console.log(userNames)

// callback function ly skta hai
// const numbers=[5,9,1200,400,3000]
// numbers.sort((a,b)=>{
//     // return a-b; //ascending
//     return b-a; //descending

// })
// console.log(numbers)



// output: [5,9,400,1200,3000]
// how above code work
//a 1200 b 400
// a-b 1200-400=800 positive (greater than zero)
// then b  ay ga pahly a next shift ho jy ga
// agr negative hota to ye wahen rehta pahly a ay ga phr b

// price low to high
// price high to low

const users=[
  // {productId:1,productName:'p1',price:300}, a
  // {productId:1,productName:'p2',price:3000}, b
  {productId:1,productName:'p3',price:200},
  {productId:1,productName:'p4',price:8000},
  {productId:1,productName:'p5',price:500},
]

return a.price-b.price
// users.sort((a,b)=>{
//     return a.age-b.age
// })


const lowtohigh=users?.sort((a,b)=>{
    return a.price-b.price
})

const hightolow=users?.slice(0)?.sort((a,b)=>{
    return b.price-a.price
})
console.log(hightolow)