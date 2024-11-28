// 80 ky bd 79

const obj1={
    key1:'value1',
    key2:'value2',
}
const obj3={
    // ...obj1,  //spread operator
 key3:'value3'
}
// console.log(obj3)




// console.log(obj2.key3)

// console.log(obj2.key1) // is case m m key1 hi hi nhi to ye undefine dy ga kun wo to obj1 m hai
// ab m chahta hn jb m kuch asa likhon
// jo obj2 m na ho like
// obj2.key1 too ye khud obj1 ky pass jy or whnn check kry
// whn mili to print kry 
// whn nhi to undefine dy ga

// const obj2={} // object bnany ka new treqa
// obj.key1="value1";

// there is another way to create empty object
const obj2=Object.create(obj1);
obj2.key3="value3"
obj2.key1="uni"
console.log(obj2)
// obj ka obj1 sy connection ban chuka hai
// key1 or key2 ko access kr skta hn
console.log(obj2.key1)
//this is happening
// javascript ko jo chz us object nhi milti to 
// us ko search krta hai prototype m
// --proto--,[[Prototype]] ye dono same hai ek object hai
// --proto-- m jo bhi object hai ussy access kr skta han
// prototype is something different it comes in  function (constructor function)

// const obj1 = { a: 1 };
// const obj12 = { b: 2 };
// obj12.__proto__ = obj1;

// console.log(obj12.a); // Output: 1
// console.log(obj12.__proto__);
console.log(obj2.__proto__)
// console.log(obj2[[Prototype]])
console.log(Object.getPrototypeOf(obj2));









// difference between prototype and __proto__
// prototype is a property of a constructor function (not an instance) that is used to set the prototype for all objects created with that constructor.
// When you create an instance of a constructor function using new, the prototype property of the constructor function becomes the __proto__ of the new instance.
// It is used to define methods and properties that should be inherited by all instances of the constructor.
function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  const person1 = new Person('Alice');
  person1.sayHello(); // Output: Hello, my name is Alice
  
  console.log(person1.__proto__ === Person.prototype); // Output: true