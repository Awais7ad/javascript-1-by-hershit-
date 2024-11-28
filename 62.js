// Every method

const numbers=[2,4,6,8,10]
//mjy check krna jitny bi element is array  hain even hain ky nhi
// callback return true or false
// every also return boleans
// true tb dy jb sary even hon gy every
// function isEven(number){
//     return number%2===0;
// }

// const evennumber=numbers.every(isEven)
// console.log(evennumber)

// arrow function as a callback function

const ans=numbers.every((number)=>number%2===0)
// console.log(ans)

// real word example

const userCart=[
    {productId:1,productName:"mobile",price:'12000'},
    {productId:2,productName:"laptop",price:'1300'},
    {productId:3,productName:"tv",price:'14000'}   
]

// check krna her ek product price hai 30000 sy km hai ky nhi

const items=userCart.every((cartitem)=>{
    return cartitem.price<30000;

})

console.log(items)