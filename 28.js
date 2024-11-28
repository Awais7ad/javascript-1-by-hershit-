// primitive vs reference data types
// let num1=6;
// let num2=num1;
// console.log("value of num1 is",num1)
// console.log("value of num2 is",num2)
// num1++;
// console.log("after incrementing num1")
// console.log("value of num1 is",num1)
// console.log("value of num2 is",num2)

//reference type
//array
let array1=["item1","item2"];
let array2=array1;
console.log("array1",array1)
console.log("array2",array2)
// array1.pop();
array1.push('item3');
console.log('after pushing element to array 1')
console.log("array1",array1)
console.log("array2",array2)

//detail above code
//primitives
//kis tra store hoty hain memory m
//stack m store hoty hain



//reference
//kis tra store hoty hain memory m
// ye heap m store hoty hain or inka address stack m pointer hota hai or her pointer ka koi address hota hai
//array1 ka address like 0x11 hai or ['item1','item2']
//array2=array1; (mean)
//array2=0x11;  ['item1','item2']
//array1.push('item3');
//0x11 updated 
//also array2 updated because have same address
