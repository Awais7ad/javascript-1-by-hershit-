// nested if else

//winning number 19

//19 your guess is right
//17 too low
//20 too high
// prompt string m data leta hai
// isko number m convert kren gy pahly
let winningNumber = 19 ;
let userGuess=+prompt('Guess a number')
console.log(typeof userGuess,userGuess)
if(userGuess===winningNumber){
    console.log("your guess is right")
}else{
    //nested
     if(userGuess<winningNumber){
          console.log("your guess is too low")
    }else{
        console.log("your guess is too high")
    }
}