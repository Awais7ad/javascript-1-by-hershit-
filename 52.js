// rest parameter



// function myfunc(a,b,...c){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)

//     console.log(`c is,`,c )
// }

// myfunc(3,4,5,6,7,8,9)

const addall=(...numbers)=>{
    // console.log(typeof number,Array.isArray(number))
 let total=0;
    for(let number of numbers){
        total=total+number;
    }
    return total;
}
const ans=addall(1,2,3,4,5,6,7,8,9)
console.log('ans', ans)