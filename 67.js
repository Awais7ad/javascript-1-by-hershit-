// new iterable ky bary m bt kren gy
// sets (it is iterable)
// sets also have its own iterable methods
// no index-based access
// order is not guaranteed
// unique item only(no duplication allowes)
//() koi bi iterable dal den string array etc



// const numbers=new Set([1,2,3,3]);
// const numbers=new Set("abc");
// console.log('numbers', numbers)
// console.log(numbers[2])// undefine not access index based


// mostly cases m set ko empty rkhty hain
const items=['item1','item2','item3']
const numbers=new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
// numbers.add(2) ye add nhi ho ga
numbers.add(['item1','item2'])
numbers.add(['item1','item2'])
// above add ho jyen gi dono kun ky address separate hi same nhi hai
numbers.add(items)
numbers.add(items)// ye ek hi mrtba add ho kun ky same array hai address wohi hai dono ka memory m
console.log(numbers)
// set tb use krna hai jb ap ky pass uniqe values hon apko pta ho

for (let number of numbers){
    console.log(number)
}


//set m check krna koi data or numbr hai ky nhi bolean m ans dy ga
const hasnumber=numbers.has(1)
console.log('hasnumber', hasnumber)

const myArray=[1,2,4,4,5,6,6,5,6];
const uniquearray=new Set(myArray)
console.log(uniquearray)
console.log(myArray.length)
let length=0;

for(let element of uniquearray){
length++
}
console.log('length', length)