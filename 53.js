// parameter destructureining
// object 
// react

const person={
    firstName:'herhsit',
    gender:'male'
}

// function getDetail(obj){
//     console.log(obj.firstName)
//     console.log(obj.gender)
//     console.log(obj.age)
// }


function getDetail({firstName,gender,age=22}){
    console.log(firstName)
    console.log(gender)
    console.log(age)
}

getDetail(person)