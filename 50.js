// block scope vs function scope


//let or const are block scope 
// var is function scope

// if (true){
//     var firstName="harshit";
//     console.log(firstName)
// }
// console.log(firstName)

function myApp(){
    if(true){
       let firstName="harshit";
        console.log(firstName)
    }
    console.log(firstName)
}
myApp()