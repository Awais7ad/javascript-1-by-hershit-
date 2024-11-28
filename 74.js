const user1={
    firstName:"harshit",
    age:8,
    about: function(hobby,favMusic){
        // console.log(this)
        // this window object ko represent kr rha hai
        console.log(this.firstName, this.age,hobby,favMusic)
    }

}

// don't do this mistake

// user1.about()

// const myfunc=user1.about;

// myfunc()
// undefine undefine undefine undefine
// is code m yhi ho rha hai // const myfunc=user1.about
// is m this ki binding nhi hui
// this ki binding kaise krte hain

// const myfunc=function(){
//     // console.log(this)
//     // this window object ko represent kr rha hai
//     console.log(this.firstName, this.age,hobby,favMusic)
// }


const myfunc=user1.about.bind(user1);
myfunc()