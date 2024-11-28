// object destructuring

const band={
    bandName:"led zepplin",
    famousSong:"stairway to heaven",
    age:22,
    year:1968,
    anotherfamousSong:"kashmir"
}

// let waly change hon const waly nhi
//previous techique

// const bandName=band.bandName;
// const famousSong=band.famousSong;
// console.log(bandName)
// console.log(famousSong)

//by dafault usi name ka variable bnta jis name ka keys hoti hain object m
// const {bandName,famousSong,}=band;
// console.log(bandName)
// console.log(famousSong)
const {bandName:var1,famousSong:var2,age,...obj}=band;
console.log(typeof var1,var1)
console.log(typeof var2,var2)
console.log(typeof age,age)
console.log(typeof obj,obj)