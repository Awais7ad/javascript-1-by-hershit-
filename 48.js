// function inside function

const App=()=>{
    const myfunc=()=>{
        console.log("hello from mufunc");
    }
    const addtwo=(num1,num2)=>{
        return num1+num2;
    }
    const multiplytwo=(num1,num2)=>{
        return num1*num2;
    }
    console.log('function inside app')
    myfunc()
    let a=addtwo(2,3);
    console.log(a)
    let b=multiplytwo(3,4)
    console.log(b)

}

App()