// computed properties

const key1="objkey1"
const key2="objkey2"

const value1="myvalue1"
const value2="myvalue2"

// ist 
const obj={
    [key1]:value1,
    [key2]:value2
}

// console.log(obj)
//2nd way
// const obj={}
// obj[key1]=value1;
// obj[key2]=value2;
// console.log(obj)

for(let key in obj){
    console.log(key,":",obj[key])
}
console.log(obj)
// console.log(Object.entries(obj))
// console.log(Object.key(obj))
// console.log(Object.values(obj))

// for (let key of Object.keys(obj)){
//     console.log(key,obj[key])
// }

// console.log(obj)