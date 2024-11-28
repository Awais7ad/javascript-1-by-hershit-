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


class Dog extends Animal{
   constructor(name,age,speed){
    super(name,age) // ye kia kry ga name or age super class ko sonp dy ga
    // baqi bachi speed
    // wo hmm khud add kren len gy
    this.speed=speed;

   }
  run(){
    return `${this.speed} is running at ${this.speed} km/h speed`
  }
}
// object or instance same 
// Dog class kuch or propert add krni hian like tommy ki speed
// isky lie hmmy khud is class ka constructor bnana pry ga
// animal class is also called super class
// name age ky lie animal class ka constructor use kr skty hai
// to isky super kewword ka use kren gy
const tommy=new Dog('tommy',3,45)
console.log(tommy)
console.log(tommy.run())
