let input=require("readline-sync")
var a=input.questionFloat("Marks of physics")
var b=input.questionFloat("Marks of chemistry")
var c=input.questionFloat("Marks of biology")
var d=input.questionFloat("Marks of mathematics")
var e=input.questionFloat("Marks of computer")

attained_marks=a+b+c+d+e
total=1000
percentage=attained_marks/total*100
if (percentage>=90){
	console.log("Grade A")
}
if (percentage>=80){
	console.log("Grade B")
}
else if (percentage>=70){
	console.log("Grade C")
}
else if (percentage>=60){
	console.log("Grade D")
}
else if (percentage>=50){
	console.log("Grade E")
}
else if (percentage<40){
	console.log("Grade F")
}
else{
	console.log("Not defined")
}