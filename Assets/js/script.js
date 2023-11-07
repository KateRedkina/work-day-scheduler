$("document").ready(function() {

  // Displays the time in the header of the page
  const today = dayjs();
  $("#currentDay").text(today.format('dddd' + ', ' + 'MMMM D YYYY'));

  // Event listener to buttons to able saving data in localStorage
  $(".saveBtn").on('click', function() {
      var hour = $(this).parent().attr("id");
      var event = $(this).siblings(".description").val();
      localStorage.setItem(hour, event);
  });

  // Current time variable
  let currentTime = dayjs().hour();

  // Add attribute for the background colors according to the time of the day
  inputEl = $("textarea").each(function(){

      var textEL = $(this).attr("id");
      if ( textEL < currentTime) {
          $(this).addClass("past");

      } else if ( textEL == currentTime) {
          $(this).addClass("present");

      } else if ( textEL > currentTime) {
          $(this).addClass("future");
      }

      // Excecutes the function continuously and for each textarea line
      setInterval(function(){
          inputEl
          }, 1000);

      });

  // Data is retrieved from localStorage even after refreshing the page 
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
});