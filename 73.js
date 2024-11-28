function hello(){
    console.log("Hello World");
}

// hello();
// hello.call()

// call,apply,bind
 function about(hobby,favMusic){
    console.log(this.firstName, this.age,hobby,favMusic)
}
const user1={
    firstName:"harshit",
    age:8,
    // about: function(hobby,favMusic){
    //     console.log(this.firstName, this.age,hobby,favMusic)
    // }

//is function ko m bhr rkh ky bi dono ky lie use kr skta hn
}

const user2={
    firstName:"awais",
    age:9,
    
}

// user1.about.call(user2,"guitar","moazart")
// ye above tb tha jb about user1 m tha 
// ab object sy bhr hai 
// about.call(user1,"radha","gg")
// about.call(user2,"kishan","ff")

// console.log(user1.about())

//apply 
// apply bi call ki tra hai
// internally apply bi call ko use krta hai
// call m extra parameter hmm alag alag pass kr rhy lkn
// apply m hm ek array pass kr skty hn
// about.apply(user1,["guitar","moazart"])
// about.apply(user2,["radha","gg"])

// about.apply(user1,["guitar","bech"])

//bind
// bind asy likhy gen to kuch nhi kry ga 
// bind hmy ek function return krta hi

// about.bind(user1,"guitar","bach")

// asy likhy gen
const func= about.bind(user1,"guitar","bach")
func()
const func2= about.bind(user2,"guitar","bach")
func2()

