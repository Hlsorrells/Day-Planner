// Wrapped jQuery code in document ready to ensure that all HTML is loaded prior to running the jQuery code
$(document).ready(function () {

  // Get current time and date variables
  var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
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

  // Timer interval to recall the updateTimeBlock function every minute
  var timerInterval = setInterval(updateTimeBlock, 60000)

  // Listener for the save buttons
  $('.saveBtn').on("click", function () {

    // Get the text from the textarea tag
    var task = $(this).siblings('.description').val()

    // Get div id value
    var divID = $(this).parent().attr('id')

    // Store user input using key value of divID and text value of text
    localStorage.setItem(divID, task)
  })

  // Retrieve data saved to local storage
  $('#9 .description').val(localStorage.getItem('9'))
  $('#10 .description').val(localStorage.getItem('10'))
  $('#11 .description').val(localStorage.getItem('11'))
  $('#12 .description').val(localStorage.getItem('12'))
  $('#13 .description').val(localStorage.getItem('13'))
  $('#14 .description').val(localStorage.getItem('14'))
  $('#15 .description').val(localStorage.getItem('15'))
  $('#16 .description').val(localStorage.getItem('16'))
  $('#17 .description').val(localStorage.getItem('17'))
});

