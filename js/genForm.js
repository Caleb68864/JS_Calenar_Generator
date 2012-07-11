function genForm(){
    var x="",i;
    x += '<form name="cal_form">';
    x += '<table>';
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
    x += "<select name='width' id='width'>";
    for (i=5;i<=25;i++)
    {
        x += "<option value='" + i + "'>" + i + " in</option>";
    }
    x += "</select>";
    x += '</td>';
    x += '</tr>';
    x += '<tr>';
    x += '<td>Calendar Height:</td>';
    x += '</td>';
    x += '<td>';
    x += "<select name='height' id='height'>";
    for (i=5;i<=25;i++)
    {
        x += "<option value='" + i + "'>" + i + " in</option>";
    }
    x += "</select>";
    x += '</td>';
    x += '</tr>';
    x += '<tr>';
    x += '<td>Month Alignment:</td>';
    x += '</td>';
    x += '<td>';
    x += "<select name='month_align'>";
    x += "<option value='center'>Center</option>";
    x += "<option value='left'>Left</option>";
    x += "<option value='right'>Right</option>";
    x += "</select>";
    x += '</td>';
    x += '</tr>';
    x += '<tr>';
    x += '<td>Weekday Alignment:</td>';
    x += '</td>';
    x += '<td>';
    x += "<select name='weekday_align'>";
    x += "<option value='center'>Center</option>";
    x += "<option value='left'>Left</option>";
    x += "<option value='right'>Right</option>";
    x += "</select>";
    x += '</td>';
    x += '</tr>';
    x += '<tr>';
    x += '<td>Number Alignment Horizontal:</td>';
    x += '</td>';
    x += '<td>';
    x += "<select name='num_align_h'>";
    x += "<option value='left'>Left</option>";
    x += "<option value='center'>Center</option>";
    x += "<option value='right'>Right</option>";
    x += "</select>";
    x += '<tr>';
    x += '<td>Number Alignment Vertical:</td>';
    x += '</td>';
    x += '<td>';
    x += "<select name='num_align_v'>";
    x += "<option value='top'>Top</option>";
    x += "<option value='middle'>Middle</option>";
    x += "<option value='bottom'>Bottom</option>";
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
    x += '<button id="draw_button" type="button">Draw Calendar</button>';
    x += '<button id="print_button" type="button">Print Calendar</button>';
    x += '</td>';
    x += '</tr>';
    x += '</table>';
    x += '</form>';
    $('div#form').html(x);
    $('select#width').val('8');
    $('select#height').val('10');
    
}