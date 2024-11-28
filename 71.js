// method
// function inside object
// person  about jo hai method hai

// this keyword 
// agr m kisi object m usi ki property ko access kr rha hn  to m
// this. kr uski propert likh skta hn 
// this.age
// direct access nhi kr skty ye clear like ${firstName} ${age} X wrong approach
// this koi object hai jo us ko cl kr raha
// this pora object hai 
// this pora person object hai
// this.age
// person.about()


// method ko bhr bi bna skta hn or define kr stka hn
function personInfo(){
    return this.firstName.toUpperCase()
}


const person1={
    firstName:'harshit',
    age: 8,
    // about: function(){
    // //    return person1.firstName.toUpperCase()
    //    return this.firstName.toUpperCase()
    // }

    //  about(){
    // //    return person1.firstName.toUpperCase()
    //    return this.firstName.toUpperCase()
    // }
    about:personInfo,
}


const person2={
    firstName:'awais',
    age: 22,
    // about: function(){
    // //    return person2.firstName.toUpperCase()
    //    return this.firstName.toUpperCase()
    // }

    //  about(){
    // //    return person2.firstName.toUpperCase()
    //    return this.firstName.toUpperCase()
    // }
    about:personInfo,
}


const person3={
    firstName:'rana ammar',
    age: 23,
    // about: function(){
    // //    return person3.firstName.toUpperCase()
    //    return this.firstName.toUpperCase()
    // }

    //  about(){
    // //    return person3.firstName.toUpperCase()
    //    return this.firstName.toUpperCase()
    // }
    about:personInfo,
}
console.log(person1.about())
console.log(person2.about())
console.log(person3.about())



