function gen_cal_settings(){
    var cal_settings = new Array(); 
    cal_settings["month"]=document.forms['cal_form']['month'].value;     
    cal_settings["year"]=document.forms['cal_form']['year'].value;   
    cal_settings["border"]=document.forms['cal_form']['border'].checked; 
    cal_settings["width"]=document.forms['cal_form']['width'].value;   
    cal_settings["height"]=document.forms['cal_form']['height'].value;   
    return cal_settings;    
}

function monthName(numMonth){
    var mName;
    switch(numMonth){
        case 0:
            mName = "January";
            break;
        case 1:
            mName = "February";
            break;
        case 2:
            mName = "March";
            break;
        case 3:
            mName = "April";
            break;
        case 4:
            mName = "May";
            break;
        case 5:
            mName = "June";
            break;
        case 6:
            mName = "July";
            break;
        case 7:
            mName = "August";
            break;
        case 8:
            mName = "September";
            break;
        case 9:
            mName = "October";
            break;
        case 10:
            mName = "November";
            break;
        case 11:
            mName = "December";
            break;
    }
    return mName;
}

function dayName(numDay){
    var dName;
    switch(numDay){
        case 0:
            dName = "Sunday";
            break;
        case 1:
            dName = "Monday";
            break;
        case 2:
            dName = "Tuesday";
            break;
        case 3:
            dName = "Wednesday";
            break;
        case 4:
            dName = "Thursday";
            break;
        case 5:
            dName = "Friday";
            break;
        case 6:
            dName = "Saturday";
            break;
    }
    return dName;
}

function calendar(cal_settings){  
 //Variables to be used later.  Place holders right now.
 document.getElementById("calendar").innerHTML = "";
var padding ="";
var totalFeb ="";
var i = 1;
var testing="";

 var current = new Date(cal_settings["year"], cal_settings["month"], "01");
 var month = current.getMonth();
 var day = current.getDate();
 var year = current.getFullYear();
 var tempMonth = month+1; //+1; //Used to match up the current month with the correct start date.
 var prevMonth = month -1;

 //Determing if Feb has 28 or 29 days in it.  
 if (month == 1){
	if ( (year%100!=0) && (year%4==0) || (year%400==0)){
	  totalFeb = 29;
	}else{
	  totalFeb = 28;
	}
 }

//////////////////////////////////////////
// Setting up arrays for the name of 	//
// the	months, days, and the number of	//
// days in the month.			//
//////////////////////////////////////////

 var monthNames = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov", "Dec"];
 var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"];
 var totalDays = ["31", ""+totalFeb+"","31","30","31","30","31","31","30","31","30","31"]

//////////////////////////////////////////
// Temp values to get the number of days//
// in current month, and previous month.//
// Also getting the day of the week.	//
//////////////////////////////////////////

 var tempDate = new Date(tempMonth +' 1 ,'+year);
 var tempweekday= tempDate.getDay();
 var tempweekday2 = tempweekday
 var dayAmount = totalDays[month];
// var preAmount = totalDays[prevMonth] - tempweekday + 1;	
 
//////////////////////////////////////////////////
// After getting the first day of the week for	//
// the month, padding the other days for that	//
// week with the previous months days.  IE, if	//
// the first day of the week is on a Thursday,	//
// then this fills in Sun - Wed with the last	//
// months dates, counting down from the last	//
// day on Wed, until Sunday.			//
//////////////////////////////////////////////////

 while (tempweekday>0){
	padding += "<td></td>";
	//preAmount++;
 	tempweekday--;
 }
//////////////////////////////////////////////////
// Filling in the calendar with the current 	//
// month days in the correct locatiif(cal_settings["border"] == true){on along.	]
// //
//////////////////////////////////////////////////

 while (i <= dayAmount){

	//////////////////////////////////////////
	// Determining when to start a new row	//
	//////////////////////////////////////////

	if (tempweekday2 > 6){
		tempweekday2 = 0;
		padding += "</tr><tr class='weekday'>";
	}

	//////////////////////////////////////////////////////////////////////////////////////////////////
	// checking to see if i is equal to the current day, if so then we are making the color of	//
	//that cell a different color using CSS.  Also adding a rollover effect to highlight the 	//
	//day the user rolls over. This loop creates the acutal calendar that is displayed.		//
	//////////////////////////////////////////////////////////////////////////////////////////////////

	if (i == day){
		padding +="<td>"+i+"</td>";
	}else{
		padding +="<td>"+i+"</td>";	

	}
	
	tempweekday2++;
	i++;
 }


 /////////////////////////////////////////
 // Ouptputing the calendar onto the	//
 // site.  Also, putting in the month	//
 // name and days of the week.		//
 /////////////////////////////////////////

 var calendarTable = "";
 calendarTable = "<table class='calendar'> <tr class='currentmonth'><th colspan='7'>"+monthNames[month]+" "+ year +"</th></tr>";
 calendarTable +="<tr class='weekdays'>  <td>Sunday</td>  <td>Monday</td> <td>Tuesday</td> <td>Wednesday</td> <td>Thursday</td> <td>Friday</td> <td>Saturday</td> </tr>";
 calendarTable += "<tr class='weekday'>";
 calendarTable += padding;
 calendarTable += "</tr></table>";
 document.getElementById("calendar").innerHTML=calendarTable;
 formatCalendar(cal_settings);
}

