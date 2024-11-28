// some method
// some kisi ek bi true ho gi true  mily ga

// const numbers=[3,5,8,9]

// // kya ek bi number asa hai jo even hai
// // true 

// const ans=numbers.some((number)=>{
//     return number%2===0
// })
// console.log(ans)

const userCart=[
    {productId:1,productName:"mobile",price:'12000'},
    {productId:2,productName:"laptop",price:'1300'},
    {productId:3,productName:"tv",price:'14000'},
    {productId:4,productName:"mac book",price:'1400000'}   
]

const ans=userCart.some((prodcut)=>{
    return prodcut.price>100000;
})
console.log('ans', ans)
