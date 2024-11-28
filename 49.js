// lexical scope
// 
const myvar="value1";
function myapp(){
    // const myvar="value1";
    function myfunc(){
    // const myvar="value59"
    const myfunc2=function(){
        console.log('inside my myfunc',myvar)
    }
    myfunc2()
    }
 

  


   
    const myfunc3=()=>{}
    console.log(myvar)
    myfunc()
}
myapp()