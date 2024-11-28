// optional chaining

const user={
    firstName:"harshit",
    // address:{houseNumber:'1234'}
    // address khud ek object hai 
    // key address hai or us m object store hai

}

// console.log(user.firstName)
// console.log(user.address) // ADDRESS ko comment kr ky dekhy
// console.log(user.address.houseNumber) // ADDRESS ko comment kr ky dekhy

//undefine p m houseNumber ko find kr rha hn
//hm kun access kren gy ase chz hai nhi hmary object m
// hmy nhi pta mery object m ye hai ky nhi lkn kuch time bd exist kry gi
// to hmm chahty hain ye error na dy undefine dy dy

// to hm optional chaining use kr skty hain
// ? mark lga den gy exist kry ga show kr dy ga nhi to error nhi dy undefine dy dy ga


// agr user bi undefine ho to
// let user;
console.log(user?.firstName)
console.log(user?.address) 
console.log(user?.address?.houseNumber) // ADDRESS ko comment kr ky dekhy
