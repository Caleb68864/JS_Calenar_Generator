function genForm(){
    var x="",i;
    x += '<table>';
    x += '<form name="cal_form">';
    x += '<tr>';
    x += '<td>Month:</td>';
    x += '<td>';
    x += '<select name="month">';
    x += '<option value="00">January</option>';
    x += '<option value="01">February</option>';
    x += '<option value="02">March</option>';
    x += '<option value="03">April</option>';
    x += '<option value="04">May</option>';
    x += '<option value="05">June</option>';
    x += '<option value="06">July</option>';
    x += '<option value="07">August</option>';
    x += '<option value="08">September</option>';
    x += '<option value="09">October</option>';
    x += '<option value="10">November</option>';
    x += '<option value="11">December</option>';
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
    x += '<td>Calendar Width:</td>';
    x += '</td>';
    x += '<td>';
    x += "<select name='width'>";
    for (i=600;i<=5000;i++)
    {
        x += "<option value='" + i + "'>" + i + " px</option>";
    }
    x += "</select>";
    x += '</td>';
    x += '</tr>';
    x += '<tr>';
    x += '<td>Calendar Height::</td>';
    x += '</td>';
    x += '<td>';
    x += "<select name='height'>";
    for (i=250;i<=2500;i++)
    {
        x += "<option value='" + i + "'>" + i + " px</option>";
    }
    x += "</select>";
    x += '</td>';
    x += '</tr>';
    x += '<tr>';
    x += '<td>Border:</td>';
    x += '<td>';
    x += '<input type="checkbox" name="border" id ="border">';
    x += '</td>';
    x += '</tr>';
    x += '<tr>';
    x += '<td colspan="2">';
    x += '<button type="button" onclick="calendar(gen_cal_settings())">Draw Calendar</button>';
    x += '</td>';
    x += '</tr>';
    x += '</form>';
    x += '</table>';
    document.getElementById("form").innerHTML=x;
}