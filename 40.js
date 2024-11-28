// spread operator

const array1=[1,2,3]
const array2=[5,6,7]
// const newArray=[...array1,array2]  //Adds array2 as a nested array
// // const newArray=[...array1,...array2] // Combines array1 and array2 into a single,
// const newArray=[...array1,...array2,89,69]
// const newArray=[..."abc"]
// const  newArray=[..."12345678910"] //number iterable nhi hai "" string m ly gy isy
// console.log(newArray)

// spread operator in object case
// object m koi bi key 1 sy zaida bar nhi ho gi
const obj1={
    key1:'value1',
    key2:'value2',
    key1:'ch'  //key1 repeat  ye ho gi oper wali nhi ay gi
}
 // 2 object m same key ho to 
 // jo object bd m spread huwa us wali key ay gi
 // order change kr obj2 pahly or obj1 bad m spread hwa 
const obj2={ 
  key1:'uniquevalue',
    key3:'value3',
    key4:'value4',
}

// const obj3={...obj1,...obj2,key69:"value69"} 
// console.log(obj3)
// const newObj={..."abcdefghijklmnopqrstuvwxyz"} // 0 a 1 b 2 c
// index key ban jy ga or value a,b,c                                       
// const newObj={...["item1","item2"]}
const newObj = { 
  _id: 101, 
  ...["firstItem", { name: "secondItem" }, [1, 2, 3], true] 
};
console.log(newObj)