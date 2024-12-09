window.addEventListener("load", calculateTime);

function calculateTime() {
  var date = new Date();
  var dayNum = date.getDay();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var ampm = hour <= 12 ? "am" : "pm";
  var daynames = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  //hour = hour % 12;
  hour = hour % 12;
  hour = hour ? hour : 12;
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  document.getElementById("day").innerHTML = daynames[dayNum];
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("second").innerHTML = second;
  document.getElementById("ampm").innerHTML = ampm;

  setTimeout(calculateTime, 700);

  //console.log(date);
}

calculateTime();
