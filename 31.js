// use const for creating arrays
// const not assign again
// fruits m ek address p store hai
// main array heap m store hai ['apple','mango']
// fruits=0x11 // hmm isky address ko change kia nhi kia us address p pri chz ko change kia
// 
const fruits=['apple','mango']; // 0x11
// fruits=['grapes','pineapple'] // const ky case m ye nhi kr skty but let ky case m kr skty hain
//baqi array ky method apply kr skty hai sary available
fruits.push('banana')
fruits[0]='banaana'
console.log(fruits)


//note
//const use kro array ko bnany ky lie

