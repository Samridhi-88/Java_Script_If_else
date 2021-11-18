let input=require("readline-sync")
var day=input.question("enter the day")
var time=input.question("enter the time")
if (day == "monday") {
    if (time=="lunch"){
  console.log("poha")
    }

    else if (time=="breakfast"){
  console.log("Kheer puri")
    }
    else if (time=="dinner"){
  console.log("chicken rice")
    }
    else{
        console.log("Please enter valid week time")
    }
}

else if (day == "tuesday") {
    if (time=="lunch"){
  console.log("kheer")
    }
    else if (time=="breakfast"){
  console.log("puri")
    }
    else if (time==dinner){
  console.log("rice")
    }
    else{
        console.log("Please enter valid week time")
    }
}

else if (day == "wednesday") {
    if (time=="lunch"){
  console.log("sprouds")
    }
    else if (time=="breakfast"){
  console.log("Kheer puri")
    }
    else if (time==dinner){
  console.log("chicken rice")
    }
    else{
        console.log("Please enter valid week time")
    }
}
