let input=require("readline-sync")
var num=input.questionInt("enter the question")
if (num<10){
    console.log("number is less then 10")
}
else if (num>10 && num<20){
    console.log("number is less then 20")
}
else if (num>20){
    console.log("greater then 20")
}