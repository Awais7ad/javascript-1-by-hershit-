// arrow function

// const user1={
//     firstName:"harshit",
//     age:8,
//     about: function(){
//         console.log(this.firstName, this.age,hobby,favMusic)
//     }

// }

// user1.about()
// yhn tk to thk tha

const user1={
    firstName:"harshit",
    age:8,
    about: ()=>{
        // arrow function ka this keyword nhi hota 
        // wo this ly ga apny surrounding sy
        // user1 iska this nhi hoga
        // iska this hoga ek level up 
        // window hoga
        // arrow function ky this ko ap change nhi kr skty

        console.log(this)
        console.log(this.firstName, this.age)
    }

}


user1.about.call(user1)
//ap call lga kr bi nhi change kr skty this ky level 
// agr arrow function na hota or asy call krta to this mera user1 hota 
// ab 1 level up window hai

// user1.about()
