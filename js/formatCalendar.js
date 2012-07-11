function formatCalendar(cal_settings){
    if(cal_settings["border"] == true){
    $('.calendar').css('border','1px solid black');
    $('.weekdays').css('border','1px solid black');
    $('.weekdays td').css('border','1px solid black');
    $('.weekday').css('border','1px solid black');
    $('.weekday td').css('border','1px solid black');
 }else{
    $('.calendar').css('border','none');
    $('.weekdays').css('border','none');
    $('.weekdays td').css('border','none');
    $('.weekday').css('border','none');
    $('.weekday td').css('border','none');
 }
 if(parseInt(cal_settings["width"]) != 0){
     var dayWidth = (parseInt(cal_settings["width"])/7);
     $('.weekdays td').css('width', parseInt(dayWidth) + "px");
     $('.calendar').css('width', parseInt(cal_settings["width"]) + "px");
 }
 if(parseInt(cal_settings["height"]) != 0){
     var rowHeight = (parseInt(cal_settings["height"]-30))/6;
     $('.currentmonth').css('height', "15px");
     $('.weekdays').css('height', "15px");
     $('.weekday').css('height', rowHeight + "px");
     $('.calendar').css('height', parseInt(cal_settings["height"]) + "px");
 }
 if(cal_settings['num_align'] != null){
     $('.weekday td').css('text-align', cal_settings['num_align']);
 }
 if(cal_settings['weekday_align'] != null){
     $('.weekdays td').css('text-align', cal_settings['weekday_align']);
 }
 if(cal_settings['month_align'] != null){
     $('.currentmonth th').css('text-align', cal_settings['month_align']);
 }
}