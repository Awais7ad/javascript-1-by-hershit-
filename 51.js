// default parameter

// before es6
// function addtwo(a,b){
//     if(typeof b==="undefined"){
//         b=0;
//     }
//     return a+b;
// }

// const ans=addtwo(4)
// console.log(ans)

// after es6
function addtwo(a,b=0){

    return a+b;
}

const ans=addtwo(4)
console.log(ans)
