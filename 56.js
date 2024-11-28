// important array method

//forEach
//map
//filter
//reduce


//forEach
// return m new array nhi deta

const numbers=[4,2,5,3];

function indexx(number,index){
  
         console.log("index is",index);
         console.log("number is",number)
    }

// // indexx(numbers)

numbers.forEach(indexx)


// numbers.forEach(function(number,index){

//     console.log("index is",index);
//     console.log("number is",number*3)
// })

// index dy ga or us index p value dy ga


const users=[
    {firstName:'awais',age:22},
    {firstName:'noor',age:23},
    {firstName:'ramzan',age:24},
]

users.forEach(function(users){
  console.log(users.firstName)
})


// for (let user of users){
//     console.log(user.firstName)
// }

//arrow function
// users.forEach((users)=>{
//     console.log(users.firstName)
//   })
  
// // sing parameter and 
//   users.forEach(users=>console.log(users.firstName))
  


