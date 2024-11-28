// callback function
// function as a input acceopt krna or 
// or us ko call krsjty hain ab hmm

function myfunc2(name){
    console.log('inside myfunc 2')
    console.log(`your name is ${name}`)
}


function myfunc(callback){
    
    console.log('hellow there i am a func and i can...')
    callback("aw")
}



myfunc(myfunc2)