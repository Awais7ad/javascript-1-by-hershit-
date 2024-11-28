// reduce

const numbers=[1,2,3,4,5];

// aim: sum of all number in array
// reduce ko smjny ky lie ye kr rhy hain 



const sum=numbers.reduce((accumulator,currentValue)=>{
return accumulator+currentValue
},0)  
// above is initial value accumulator ki

// console.log('sum', sum)

//isko smjny ky lie hmy track krna ho ga 
// first time accumulator ki value ho 1 and currentValue ho gi 2
// dosri bar jo return kren hm last time wo accumulator ki value ho gi
// accumulator ,  currentValue,  return
// 1                2               3
// 3                3               6
// 6                4               10
// 10               5               15


// real time example

const userCart=[
    {productId:1,productName:"mobile",price:'12000'},
    {productId:2,productName:"laptop",price:'1300'},
    {productId:3,productName:"tv",price:'14000'}
    
]
// accumulator=totalprice
// currentValue=currentProduct
const Total=userCart.reduce((totalprice,currentProduct)=>{
  return totalprice+currentProduct.price;
}, 0)

console.log(Total)
