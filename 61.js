// find method

const myArray=['hello','catt','dogf','lion']
// function isLength(string){
//     return string.length===3;

// }
// //first occurence ki bat kry ga
// const ff=myArray.find(isLength)
// console.log(ff)
// // agr asi koi string na hui to undefine dy ga
// const ans=isLength('aaa')
// console.log(ans)

const ff=myArray.find((string)=>{
    return string.length===4;
})
console.log(ff)

//real word example

const users=[
    {userID:1,userName:"awais"},
    {userID:2,userName:"ramzan"},
    {userID:3,userName:"noor"},
    {userID:4,userName:"mureed"},
]

const uniqueuser=users.find((user)=>{
  return user.userID===3;

})

console.log(uniqueuser);