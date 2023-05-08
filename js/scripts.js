  // get current date
  var currentDate = new Date();

  // define an array for the suffixes of dates
  var suffixes = ["th", "st", "nd", "rd"];

  // get the day, date, month and year
  var day = currentDate.toLocaleDateString("en-US", { weekday: "long" }) + ",";
  var date = currentDate.getDate();
  var month = currentDate.toLocaleDateString("en-US", { month: "long" });
  var year = currentDate.getFullYear();

  // get the suffix for the date and wrap it in a <sup> element
  var suffix = "<sup>" + (suffixes[(date-20)%10] || suffixes[date] || suffixes[0]) + "</sup>";

  // create the formatted date string
  var formattedDate = day + " " + date + suffix + " " + month + " " + year;

  // get elements where you want to display the date
  var dateElement = document.getElementById("date");

  // set the innerHTML of the element to the formatted date string
  dateElement.innerHTML = formattedDate;