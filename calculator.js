let input=require("readline-sync")
var num=input.questionInt("enter the number")
var num1=input.questionInt("enter the number")
var oprand=input.question("enter the oprand")

if (oprand =='+'){
    console.log(num+num1) 
}
else if (oprand=='-'){
    console.log(num-num1) 
}
else if (oprand=='*'){
    console.log(num*num1) 
}
else if (oprand=='%'){
    console.log(num%num1) 
}
else if (oprand=='/'){
    console.log(num/num1) 
}
else{
    console.log('nothing')
}