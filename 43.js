// nested destructurining


const users=[
    {userId:1,firstName:'awais',gender:'male'},
    {userId:2,firstName:'ramzan',gender:'male'},
    {userId:3,firstName:'noor',gender:'male'}, 
]

// const [user1,user2,user3]=users;
// console.log(user1)

//array m sy object ki value destructure krnihai

const [{firstName:user1name,userId}, ,{gender:user3gender}]=users;
console.log(user1name,userId)
console.log(user3gender)