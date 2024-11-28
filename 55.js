// function returning function

// function myfunc(){
//     // return "a";
//     // return [1,2,3,4,5];
//     // return {name:"awais"}
//     // istra 1 function return kr skta hai dosry function ko
// function hello(){
//     console.log('hello world')
// }
// return hello;
// }

//ans m function a gya 
// ans ko call kr liya 
const ans=myfunc()
console.log(ans())


function myfunc(){
//     // return "a";
//     // return [1,2,3,4,5];
//     // return {name:"awais"}
//     // istra 1 function return kr skta hai dosry function ko

return  function(){
    console.log('hello world')
};
}
