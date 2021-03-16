// Assign the data from `data.js` to a descriptive variable
var tdata = data;

// Select the button
var button = d3.select("#filter-btn");
var input_datetime = d3.select("#datetime");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Get the value property of the input element
  var inputDate = input_datetime.property("value");

  console.log(inputDate);
  

  var filteredDate = tdata.filter(data => data.datetime === inputDate);

  console.log(filteredDate);


};
