let input=require("readline-sync")
let num = input.questionInt("Enter your number:- ")
    if (num > 0){
        console.log("it is positive")
    }
    else if (num < 0){
        console.log("it is negative")
    }
    else {
        console.log("zero")
    }