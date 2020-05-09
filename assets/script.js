$(document).ready(function () {

  // Get current time
  var currentDateAndTime = Date(Date.now()); // exp: Fri Oct 25 2019 17:40:56 GMT-0400 (Eastern Daylight Time)
  var currentHour = new Date().getHours(); //Current hour in military time
  console.log(currentDateAndTime)
  console.log(currentHour)
  console.log(typeof currentHour)

  // Set the current date & time (#currentDay)
  $('#currentDay').text(currentDateAndTime)

  

  // Listener for the save buttons

});





