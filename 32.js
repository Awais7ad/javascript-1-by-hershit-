// while loop in array just for practice
const fruits=['apple','mango','grapes']
let i=0;
let newArray=[]
while(i<fruits.length){
    newArray.push(fruits[i].toUpperCase())
    i++;
}
console.log(newArray)