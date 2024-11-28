// abi is m bi problem hai
// ab man lo ky userMethod m hazaron method hain
// wo add kr diye 
// lkn hmm constructor function add
//krna bhool gya jis sy issue ho jy g
const userMethod={
    about:function(){
            return `${this.firstName} is ${this.age} years`
    },
    is18:function(){
    return this.age>=18;
    },
    sing:function(){
        return "too na la la la "
    }
    }
    
    function createUser(first,last,email,age,address,){
        const user=Object.create(userMethod)
        // above line give us empty object 
        // and also give us prototype chaining
        user.firstName=first;
        user.lastName=last;
        user.email=email;
        user.age=age;
        user.address=address;
    
       return user;
    }


  let users=createUser()

  console.log(users)
    const user11=createUser("a",'b','ab@gmail.com',18,'isb')
    const user12=createUser("c",'d','cd@gmail.com',18,'isb')
    const user13=createUser("e",'f','ef@gmail.com',18,'isb')
    console.log(user12.about())//about call hwa prototype sy
    console.log(user12.sing())

