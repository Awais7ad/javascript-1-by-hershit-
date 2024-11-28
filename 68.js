// Maps
// map is an iterable

// store data in order fashion
// duplicate keys are not allowed
// store key value pair (like object)

// duplicate keys are not allowed like object


// difference between maps and objects
// objects can only have string and symbol
// as key
// maps can have any data type as key and value like array , number , string
// objects are mutable
// maps are immutable
// objects are iterable
// maps are not iterable


// object litral
// key always in string or symbol
// symbol abhi nhi prha

const person={
    firstName:'harshit',
    age:1,
    1:"one"

}
// object p for of loop direct nhi lga skty lkn for in lga skty 

// for of Map p direct lga skty hai


// console.log(person.firstName)
// console.log(person['firstName'])
// console.log(person['1'])


// for(let key in person){
//     console.log(typeof key)
// }


// key value pair

// const persun=new Map();
// persun.set('firstName','harshit');
// persun.set('age',13);
// persun.set(1,'one');


// persun.set([1,2,3],'two'); // array key hai
// persun.set({1:'one'},'two'); // object litral key hai

// console.log(persun)
// console.log(persun.get('firstName'))
// console.log(persun.get('age'))
// console.log(persun.get(1))

// for(let key of persun.keys()){
//     console.log(typeof key,key)
// }

// direct for of on Map
// key value pair m dy ga
// array dy ga

// destructure krna hai
// key,value // ye error dy ga
// [key, value] ye thk hai


// for(let [key, value] of persun){
//     // console.log(typeof key,Array.isArray(key))
//     console.log(key,value)
// }

// ye p direct array pass kr skty hain
// or us m key value pair add kr skty hain


const person1={
    id:1,
    firstname:'harshit',
}
const person2={
    id:2,
    firstname:'awais',
}
// ab above m koi or extra info add krni hai lkn
// ye object m nhi krni mtlb person1 m nhi krni 
// kahen or krni hai

const userInfo=new Map();
userInfo.set(person1,{age:30,gender:'male'});
userInfo.set(person2,{age:22,gender:'male'});
console.log(userInfo)

//ab isko kesy use kr skty haain 
// for example gender chahye person1 ka
// to ye likh skty hain
console.log(userInfo.get(person1).age)
console.log(userInfo.get(person2).age)



// const persn=new Map([['firstName','harshit'],['age',7],[1,'one']]);
// console.log(persn)



// real word example