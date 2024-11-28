
function hello(){
    console.log('awais');
}

hello();

// java script m function ki tra ky object bi hoty hai
// javascript function === function+object 
// console.log(hello.name)

// you can add your own property
// hello.myOwnProperty="very unique value"
// console.log(hello.myOwnProperty)

// function provide more usefull properties
//mera mtlb call bind apply method bi provide krta hai function

// function hmy dety hain free space
// actual m free space jase kuch nhi hota
// free space m empty obejct {}
// function m empty object {} hota hai
// us ko m bol rha hn free space
// sirf smjany ke liye apko
// free sapce ek empty onbject hai
//  usko bolty hain prototype

// console.log(hello.name)
console.log(hello.prototype)

// only function provide prototype property
// const hello=[]


hello.prototype.abc="abc";
hello.prototype.zyx="xyz";
hello.prototype.sing=function(){
    return "nanana"
}
console.log(hello.prototype)
console.log(hello.prototype.sing());

// __proto__ ka connection with prototype