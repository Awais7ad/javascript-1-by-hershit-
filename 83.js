//new keyword
// 3 kam
// empty object create kr rha 
// this refer to empty object {}
// return kry ga {}
// new keyword object.create(createUser.prototype) wala kam khud kry ga
// ye [[prototype]] or __proto__ ki value khud set kr dy
// User m jo is m sy ni mily ga wo [[protype]] sy dekhy ga
// ye relation new keyword auto krta ha
//pahly hm connection create krna hota tha

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
// console.log(user1.firstName)
user1.class="8"
// hmm asy kr user1 object add kr skty hain kuch addtional
// but hmm diretly constuctor function m nhi add kr skty asy
// console.log(user1.class)
// console.log('user1',user1)
// let is18=user1.is18();
// console.log('is18', is18)


for(let key in user1){
    // console.log(key)
    //agr ap prototype wali added nhi dekhna chahty to
   if(user1.hasOwnProperty(key)){
    console.log(key)
   }
}
// __proto__ isko asy likha hwa  
// official ecma script [[prototype]]