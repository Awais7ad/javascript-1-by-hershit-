// for in loop in array
// index dy gi only 0,1,2,3 tb tk chaly gi jb tk last index na a jy
const fruits=["apple",'mango','grapes','fruits4'];
const fruits2=[];

for(let i in fruits){
    fruits2.push(fruits[i].toUpperCase())
    console.log(fruits2)
}
console.log(fruits2)