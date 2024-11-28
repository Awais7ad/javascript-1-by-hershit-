// splice method
// start , delete , insert 
// change orignal
// array ky bech m sy kuch delete yan insert krna hai

const myArray=['item1','item2','item3']

// delete item2
// delete return m bi dy ga jo delete kiya
// const delte=myArray.splice(1,1)
// console.log(delte)


// insert
// myArray.splice(1,0,'inserted items')
// console.log(myArray)

// delete insert ek sath
// 1,2
// myArray.splice(1,2,'inserted items')
const deleteitem=myArray.splice(1,1,'inserted items')
console.log(myArray)
console.log(deleteitem)