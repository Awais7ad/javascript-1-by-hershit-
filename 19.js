3//switch statement
//if else if also use for this

// let day=+prompt("enter number")
// switch(day){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednessday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("invalid");
    
// }


let dayInput = prompt("Enter a number");

// Check if the input is empty or not a number
if (dayInput === null || dayInput.trim() === "" || isNaN(dayInput)) {
    console.log("Invalid input. Please enter a number.");
} else {
    let day = +dayInput;  // Convert input to number

    switch(day) {
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day. Please enter a number between 0 and 6.");
    }
}
