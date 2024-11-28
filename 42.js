// object inside array
// very useful in real word application

const users=[
    {userId:1,firstName:'awais',gender:'male'},
    {userId:2,firstName:'ramzan',gender:'male'},
    {userId:3,firstName:'noor',gender:'male'},
  
]

console.table(users)

for (let user of users ){
    console.log(user.firstName)
}