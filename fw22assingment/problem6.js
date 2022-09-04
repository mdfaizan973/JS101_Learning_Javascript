// Problem 5: Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ...

let days = "Mon";

switch (days) {
      case "Sun" : console.log("Sunday");
    break;
      case "Mon" : console.log("Monday");
    break;
      case "Tues": console.log("Tuesday");
    break;
      case "Wed" : console.log("Wedday");
    break;
      case "Thur": console.log("Thursday");
    break;
      case "Fri" : console.log("Friday");
    break;
      case "Sat" : console.log("Saturday");
    break;
  default: console.log("Wrong Input");
}

