// Wrapped jQuery code in document ready to ensure that all HTML is loaded prior to running the jQuery code
$(document).ready(function () {

  // Get current time and date variables
  var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  var day = new Date().getDay()
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var numMonth = new Date().getMonth()
  var currentHour = new Date().getHours()

  // Set the current date & time (#currentDay)
  $('#currentDay').text(weekday[day] + ', ' + months[numMonth] + ' ' + day)

});

