// 2015 /es6
// class keyword
// class are fake
// class m hi hmm us ki property or method define kr den gy

class User{
   constructor(first,last,email,age,address){
    console.log("constructer called")
    this.firstName=first;
    this.lastName=last;
    this.email=email;
    this.age=age;
    this.address=address;
   }
   about(){
    return `${this.firstName} is ${this.age} years`
   }
   is18(){
    return this.age>=18;
   }
   sing(){
    return "la la la na na na la"
   }
   func(a){
       console.log(a)
   }
   
}
const user1=new User('Awais','Anwar','22','awais@gmail.com','multan')
const user2=new User('noor','Anwar','22','awais@gmail.com','multan')
const user3=new User('ramzan','Anwar','22','awais@gmail.com','multan')
console.log(user1.firstName)
console.log(user1.sing())
console.log(user1.is18())
console.log(user1.func("Aaaaaaaaaa"))
// console.log(user1);
console.log(Object.getPrototypeOf(user1))
// ye hmm jo prototype m add kr rhy thy class ye method khud ba khud prototype m add ho jyen gy
// jb hmm new keywrod lga ky new user bnay gy



// ye km ab class sy kren gy
//  function User(first,last,email,age,address,){
//     this.firstName=first;
//     this.lastName=last;
//     this.email=email;
//     this.age=age;
//     this.address=address;
  
// // return this;
// // yaha pe return this likhne ki jauraret nhi hai nhi hoti kun ky 
// // kun ky new keyword apne aap return karta hai
    
// }

// User.prototype.about=function(){
//     return `${this.firstName} is ${this.age} years`
// };
// User.prototype.is18=function(){
//  return this.age>=18;
// }
// ye jo hm oper kam kr rhy hain ye hmmy bar bar khud krna prh rha hi
// User.prototype.nationality="pakstan";
// const user1=new User('Awais','Anwar','22','awais@gmail.com','multan')
// const user2=new User('noor','Anwar','22','awais@gmail.com','multan')
// const user3=new User('ramzan','Anwar','22','awais@gmail.com','multan')
// console.log(user1);
