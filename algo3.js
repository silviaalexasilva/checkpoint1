/*
Given a number that represents the position of the minute hand on a clock (number of minutes from 0 - 60) write a program that returns the angle that is formed by the minute hand and 12.

If the user enters a number that is above 60, your program should fail, and log a friendly message to the console, informing the user of their error. 
(Hint: Create an HTML UI to capture input and display the result of running you algorithm)
*/
function minuteAngle(hours, minute) {
    if (minute >= 60) {
        console.log("Ups! Only below 60");
        return;
    }
    var angleHour = (360/12) * hours;
    var angleMinute = (360/60) * minute;
    var difference;
    
    if (angleHour > angleMinute) {
        difference = angleHour - angleMinute;
    } else {
        difference = angleMinute - angleHour;
    }
    
    if (360 - difference < difference) {
        return 360 - difference;
    } else {
        return difference;
    }
}
