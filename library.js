let input=require("readline-sync")
var ex_day=input.questionInt("enter the returning day:-")
var ex_month=input.questionInt("enter the returning month:-")
var ex_year=input.questionInt("enter the returning year:-")
var act_day=input.questionInt("enter the actual returning day:-")
var act_month=input.questionInt("enter the actual returning month:-")
var act_year=input.questionInt("enter the actual returning year:-")
if (ex_day<=act_day){
	if (ex_month==act_month){
		if (ex_year==act_year){
			console.log("no charges")
        }
    }

}if (ex_day>act_day){
	if (ex_month==act_month){
		if (ex_year==act_year){
			late = ex_day-act_day
			fine=15*late
			console.log("₹ 15 for one day, so the fine is ₹",fine)
        }
    }
}if (ex_day>act_day){
	if (ex_month>act_month){
		if (ex_year==act_year){
			late=(ex_day-act_day)+(ex_month-act_month)
			fine=500*late
			console.log("₹ 500 for one day, so the fine is ₹",fine)
        }
    }
}if (ex_day>act_day){
    if (ex_month>act_month){
        if(ex_year>act_year){
	        fine=10000
	        console.log("₹",fine,"is fixed")
        }
    }
}


