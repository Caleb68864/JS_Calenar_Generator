function drawCalendar(cal_settings){
    
    if(cal_settings["border"] == "true"){
        var element = document.getElementById('cal_table').style;
        element.border = "10px solid black";
    }
    
    var calendarTable;
    calendarTable = '';
    calendarTable += '<table id="cal_table">';
    calendarTable += '<tr>';
    calendarTable += '<td id="cal_td" colspan="2">';
    calendarTable += cal_settings["month"] + " " + cal_settings["year"] + " " + cal_settings["border"];
    calendarTable += '</td>';
    calendarTable += '</tr>';
    calendarTable += '<tr>';
    calendarTable += '<td>';
    calendarTable += 'Sunday';
    calendarTable += '</td>';
    calendarTable += '<td>';
    calendarTable += 'Monday';
    calendarTable += '</td>';
    calendarTable += '<td>';
    calendarTable += 'Tuesday';
    calendarTable += '</td>';
    calendarTable += '<td>';
    calendarTable += 'Wednesday';
    calendarTable += '</td>';
    calendarTable += '<td>';
    calendarTable += 'Thursday';
    calendarTable += '</td>';
    calendarTable += '<td>';
    calendarTable += 'Friday';
    calendarTable += '</td>';
    calendarTable += '<td>';
    calendarTable += 'Saturday';
    calendarTable += '</td>';
    calendarTable += '</tr>';
    calendarTable += '<tr>';
    calendarTable += '<td>';
    calendarTable += '';
    calendarTable += '</td>';
    calendarTable += '<td>';
    calendarTable += '';
    calendarTable += '</td>';
    calendarTable += '</tr>';
    calendarTable += '</table>';
    document.getElementById("calendar").innerHTML=calendarTable;
}

function genForm(){
    var x="",i;
    x += '<table>';
    x += '<form name="cal_form">';
    x += '<tr>';
    x += '<td>Month:</td>';
    x += '<td>';
    x += '<select name="month">';
    x += '<option value="January">January</option>';
    x += '<option value="February">February</option>';
    x += '<option value="March">March</option>';
    x += '<option value="April">April</option>';
    x += '<option value="May">May</option>';
    x += '<option value="June">June</option>';
    x += '<option value="July">July</option>';
    x += '<option value="August">August</option>';
    x += '<option value="September">September</option>';
    x += '<option value="October">October</option>';
    x += '<option value="November">November</option>';
    x += '<option value="December">December</option>';
    x += '</select>';
    x += '</td>';
    x += '</tr>';
    x += '<tr>';
    x += '<td>Year:</td>';
    x += '</td>';
    x += '<td>';
    x += "<select name='year'>";
    for (i=2011;i<=3012;i++)
    {
        x += "<option value='" + i + "'>" + i + "</option>";
    }
    x += "</select>";
    x += '</td>';
    x += '</tr>';
    x += '<tr>';
    x += '<td>Border:</td>';
    x += '<td>';
    x += '<input type="checkbox" name="border">';
    x += '</td>';
    x += '</tr>';
    x += '<tr>';
    x += '<td colspan="2">';''
    x += '<button type="button" onclick="drawCalendar(gen_cal_settings())">Draw Calendar</button>';
    x += '</td>';
    x += '</tr>';
    x += '</form>';
    x += '</table>';
    document.getElementById("form").innerHTML=x;
}

function gen_cal_settings(){
    var cal_settings = new Array(); 
    cal_settings["month"]=document.forms['cal_form']['month'].value;     
    cal_settings["year"]=document.forms['cal_form']['year'].value;   
    cal_settings["border"]=document.forms['cal_form']['border'].checked;  
    return cal_settings;    
}