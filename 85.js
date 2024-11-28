// let numbers=[1,2,3]
// console.log(Object.getPrototypeOf(numbers));
// let numbers=new Array(1,2,3)
// interanlly new sy ye kam ho rha hota 
// array constructor cl ho rha hota hai
// wo array create krta hai
// hmm new keyword lga kr

// console.log(Array.prototype)
// javascript ye method khn sy milty hain
// push pop shift unshit reduce fill some include replace
// map filter forEach find every some
// ye sab 
// ye prototype sy mil rhy hain
// or pechy hm ny kha tha prototpye sirf function ka hota hi
// hm function bnay thy pechy jo hmry lie object create kr rhy thy

// console.log(numbers)

function hello(){
    console.log('hello')
}

// prototype
console.log(hello.prototype)
// is case object hoga prototype {}
// array ka jo prototype tha wo array tha []
// console.log(Array.isArray(Array.prototype))
// true 
// actual m array ka prototype hai hi array
// or hmm pechy kha tha ka object ho prototype 
// hmm change krskty hai type
//console.log(hello.prototype) 

// hello.prototype=[];
// console.log(hello.prototype);
// hello.push('1');
