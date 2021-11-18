var age=require("readline-sync");
var age1=age.questionInt("enter the age:-");

var age = require("readline-Sync");
var age2= age.questionInt("enter the age:-")

var age = require("readline-Sync");
var age3= age.questionInt("enter the age:-")

if (age1<age2 && age1<age3){
	console.log("first person is youngest")
}
else if (age2<age1 && age2<age3){
	console.log("second person is youngest")
}
else{
	console.log("third person is youngest")
}