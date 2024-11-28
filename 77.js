// proto
// prototype
//class

// oop
// object oriented programming
// ab oop dekhen gy ky hmary code m kia kami hai
// us ko solve kr ky

// const user={
//     firstName:'harshit',
//     lastName:'kumar',
//     email:"hr@gmail.com",
//     age:2,
//     address:"House Number,colony,pincode,state",
//     about:function(){
//         return `${this.firstName} is ${this.age} years`
//     },
//     is18:function(){
//         return this.age>=18;
    
//     }

// }

// jesa ky oper bna user object
// ab mjy istra ky lakhon object chache
// user1,user2,user3
// thousend chaheye to hmm bar bar yhi kren gy object bnay alehda
// ye approach thk nhi hai
// iska solution dekhty hai ab hmm

// constructor function
// ye as a input ly cheezen
// ye as a output m object return kry ga

// pehla treqa
function User(first,last,email,age,address,){
    this.firstName=first;
    this.lastName=last;
    this.email=email;
    this.age=age;
    this.address=address;
    this.about=function(){
                return `${this.firstName} is ${this.age} years`
            };
   this.is18=function(){
    return this.age>=18;
   }

    
}
User.prototype.nationality="pakstan";
const user1=new User('Awais','Anwar','22','awais@gmail.com','multan')
console.log(user1.firstName)
user1.class="8"
// hmm asy kr user1 object add kr skty hain kuch addtional
// but hmm diretly constuctor function m nhi add kr skty asy
console.log(user1.class)
console.log('user1',user1)
let is18=user1.is18();
console.log('is18', is18)

// dosra treeqa
// function createUser(first,last,email,age,address,){
//     const user={}
//     user.firstName=first;
//     user.lastName=last;
//     user.email=email;
//     user.age=age;
//     user.address=address;
//     user.about=function(){
//                 return `${this.firstName} is ${this.age} years`
//             };
//     user.is18=function(){
//     return this.age>=18;
//    }
//    return user;
// }

// const user11=createUser("a",'b','ab@gmail.com',18,'isb')
// console.log('user11', user11)
// let age=user11.is18();
// console.log('age', age)
// const about=user11.about()
// console.log('about', about)