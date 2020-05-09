// Wrapped jQuery code in document ready to ensure that all HTML is loaded prior to running the jQuery code
$(document).ready(function () {

  // Get current time and date variables
  var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  var day = new Date().getDay()
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var numMonth = new Date().getMonth()

  // Set the current date (#currentDay)
  $('#currentDay').text(weekday[day] + ', ' + months[numMonth] + ' ' + day)

  // Current time loop function to update background colors
  function updateTimeBlock() {

    // Loop over all the .time-blocks to find current time
    $('.time-block').each(function () {

      // Get the current hour
      var currentHour = new Date().getHours()

      // Get the div's id value
      var divID = parseInt($(this).attr('id'))

      // Compare div's id value to the current hour
      if (divID === currentHour) {
        $(this).addClass('present')
      } else if (divID < currentHour) {
        $(this).addClass('past')
      } else {
        $(this).addClass('future')
      }
    })
  }

  updateTimeBlock()

});

