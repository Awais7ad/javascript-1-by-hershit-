// class

class Animal{
    constructor(name , age){
        this.name=name;
        this.age=age;

    }
    eat(){
        return `${this.name} is eating`
    }
    isSuperCute(){
        return this.age<=1;
    }
    isCute(){
        return true;
    }

}

// const animal1=new Animal('tom',1)
// console.log(animal1)
// console.log(animal1.eat())
// console.log(animal1.isSuperCute())

// dog class
// dog class m wohi km kr rha hn jo animal m kiay
// kun na m us ko use kr ln 

// class Dog{
//     constructor(name , age){
//         this.name=name;
//         this.age=age;

//     }
//     eat(){
//         return `${this.name} is eating`
//     }
//     isSuperCute(){
//         return this.age<=1;
//     }
//     isCute(){
//         return true;
//     }
// }

class Dog extends Animal{

}
// ab hmari Dog class bn chuki hai or usky pass animal class ki sari property or mathod hain
// yhn ab is case m hm dog class ka object bna rhy hain
// new keyword use kr ky lkn is class ka constructor function nhi hai
// javascript kia ry ga jo class extend kr rhy hain us ky constructor ko cl kry ga
// animal class ka constructor use hwa or Dog class ka object bn gya
// ab koi method jo asa hai jo Dog class m nhi hai 
// lkn hmm ny cl kr dia to extends walli cls m dekhy agr hwa to run kr dy ga
// Dog subclass/derived class hogi animal parent class/base class
// subclass kesy bnti hai base class ko extend kr ky

const tommy=new Dog('tommy',3)
console.log(tommy)
console.log(tommy.eat())
console.log(tommy.isSuperCute())
