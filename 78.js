const userMethod={
about:function(){
        return `${this.firstName} is ${this.age} years`
},
is18:function(){
return this.age>=18;
}
}

function createUser(first,last,email,age,address,){
    const user={}
    user.firstName=first;
    user.lastName=last;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=userMethod.about;
    user.is18=user.is18 ;
   return user;
}

const user11=createUser("a",'b','ab@gmail.com',18,'isb')
const user12=createUser("c",'d','cd@gmail.com',18,'isb')
const user13=createUser("e",'f','ef@gmail.com',18,'isb')
console.log(user12.about())
//is m kami hai 
// man lo ky user11 bna isky lie method bna about or is18
// man lo ky user12 bna isky lie method bna about or is18
// man lo ky user13 bna isky lie method bna about or is18
// ab man lo ky 1 million user hain
// to 1 million bar hi in method ki copy bny or memory m store ho gi 
// or space occupy kry gi 

// hmmy sirf in method ki ek copy chahye
// jb ye sb ky lie sme hai
// to hmmy isky lie 1 object bny lety hain oper or us m ye method bny
// ab ye mthod kahen store ho chuky hain
// hmm inka address use kr rhy haim
// javascript kia kry ga inky address p ja ky cl kr dy ga
// ab her br store nhi hon 




