// agr javascript ko ap browser p run kr rhy hain
// to this ap ka window object ho ga
// javascript ka global object hota hai window object

// console.log('this', this)
// console.log('window', window)
// this and window same object in javascript
// this===window  true
 'use strict'
function myfunc(){
    //  'use strict'
     // isky lgany sy ab my myfunc() ko cl krn ga to undefine dy ga
     // window.myfunc() krna pra ga
    // console.log(`hello`)
    console.log(this)// ye na kbi kbi hmary lie msla paida kr ska 
    // isky lie 'use strict'
    // window object a rha hai
}

myfunc()

// console.log(window)
// myfunc jo hai mery window object m add ho chuka
// ab m isko asy bi cl ke skta hn

window.myfunc()
//same output ay gi
