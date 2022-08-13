$(function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
})

$("#saveBtn").click()(function () {
    console.log(this)
})
let = text(this).siblings(".hi").val();
let = time(this).parent("id");

localStorage.setItem(time, text);

$("#hour9 .hi").val(localStorage.getItem("hour9"));
$("#hour10 .hi").val(localStorage.getItem("hour10"));
$("#hour11 .hi").val(localStorage.getItem("hour11"));
$("#hour12 .hi").val(localStorage.getItem("hour12"));
$("#hour13 .hi").val(localStorage.getItem("hour13"));
$("#hour14 .hi").val(localStorage.getItem("hour14"));
$("#hour15 .hi").val(localStorage.getItem("hour15"));
$("#hour16 .hi").val(localStorage.getItem("hour16"));
$("#hour17 .hi").val(localStorage.getItem("hour17"));

function timetracker() {
    let currentHour = moment().hours();

    $(".time-block").each(function () {
        let blockTime = parseInt($(this).attr("id").split("hours"));
        console.log(blockTime, currentHour)
    })
}

if (blockTime < currentHour) {
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
}

else if (blockTime === currentHour) {
    $(this).addClass("present");
    $(this).removeClass("past");
    $(this).removeClass("future");
}

else (blockTime > currentHour) 
    $(this).addClass("future");
    $(this).removeClass("past");
    $(this).removeClass("present");


timetracker();

