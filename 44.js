// functions
// noker hain apky
// ek noker dosry noker ki madad bi kr skta hi
// function decleration

// console.log('happy birthday to you....')

function singHappyBirhtday(){
    console.log('happy birthday to you....')

} 

// singHappyBirhtday()
// reuseable nhi hai
function twoPlusFour(){
    console.log(2+4)
}
// twoPlusFour()

//return 

function givereturn(){
  return 2+4
}

// console.log(givereturn())
// const a=givereturn();
// console.log(a)

// parameter and agrument 

function sumtwonumber(number1,number2){
  return number1+number2
}

// let b=sumtwonumber(4,5)
// console.log(b)

// odd and even

function oddandeven(number){
    // if(number%2==0){
    //     console.log('even')
    // }else{
    //     console.log('odd')
    // }
    return number%2===0;
}
// console.log(13%2===0)
// let a=oddandeven(3)
// console.log(a)

// function
// input
//output:firstCharacter

function firstChr(str){
   return str[0]
}
// let a=firstChr("awais")
// console.log(a)

//function
//input:array,target(number)
//output :index of target if present in array

function findTarget(arr,target){
for(let i=0; i<arr.length; arr++){
   if(arr[i]==target){
       return i;
   }else{
    return `${target} is not in array`
   }
}

}

let a=findTarget([1,2,4,5,5],9)
console.log(a)