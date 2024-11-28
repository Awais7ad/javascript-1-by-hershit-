// clone object using object.assign


// pahly hmm spread operator sy sy copy krty thy

const obj={
    key1:"value1",
    key2:"value2"
}

// const obj2=obj;
// obj2.key3="value3"
// console.log(obj); // behaviour sy bachny ky lie hmmy clone krna pra ek naya object bnana pry ga
// console.log(obj2);
// spread operator use for this
// const obj2={...obj}  // ab changes both m reflect nhi hon gi
// 2nd way to clone object old way hai spread new way hai
const obj2=Object.assign({},obj)
obj2.key3="value3";
console.log(obj);
console.log(obj2);
//both object have same address because object is refference type


