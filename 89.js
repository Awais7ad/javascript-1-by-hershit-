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
    return `${this.name} is running at ${this.speed} km/h speed`
  }
  // ab m chahta hn animal class wala eat
  // eat() dog class ky lie modify ho wo nih chahyhe
  // to m us ko yhn p bna dn ga
  // ho ga ye javascritp constructor wo isi class m mil jy wo run kr dy ga wo super class m nhi jy ga
  eat(){
    return `Modified eat: ${this.name} is eating`
  }
}

const tommy=new Dog('tommy',3,45)
console.log(tommy.run()) // javascript ny dekha ky run() mehtod Dog m hai agr hai to run kr diya
console.log(tommy.eat())
console.log(tommy.isSuperCute())