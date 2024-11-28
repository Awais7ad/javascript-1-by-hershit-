// getter and setter
// method ko call krty ()
// property ko call nhi krty
// to jb hm chahty hon ko kisi method ko as a propert access krna ho to hmm getter setter use krty hai

class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
//   fullName(){
//     return `${this.firstName}  ${this.lastName}`
//   }
get  fullName(){
    return `${this.firstName}  ${this.lastName}`;
  }
set fullName(fullName){
    // fullName.split("")
    // array distructurining
    
    const [firstName , lastName]=fullName.split(" ")
    this.firstName=firstName;
    this.lastName=lastName;
}
}

const person1= new Person('awais','anwar',22)
// console.log(person1)
// // console.log(person1.fullName()) //as a method 
// console.log(person1.fullName)  // as a property using get

// man lo m ny object person1 bna liya or bd m firstName or lastName change krna hai to m us ky lie setter use krengy 
// kesy use kren dekh lety hai 

console.log(person1.firstName)
console.log(person1.lastName)
person1.fullName="mohit sharmaaaa"
console.log(person1.firstName)
console.log(person1.lastName)





// person1.setName('mohit','sharma'); // below two line work same
// // person1.firstName="mohit";
// // person1.lastName="sharma";
// // ab is m kia setName as mehtod call kr rha hn 
// // m istra krna chahta hn person1.setName="mohit sharma"
// // ab ye as property chly rha hai
// // m chahta hn isko bi as a property access krn too m set use krn ga
