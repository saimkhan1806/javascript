// // ==============================questioon 1==========================
// var value = prompt("Enter the city")
// if(value == "karachi"){
//     alert("Welcome to city of light")
// }
// else{
//     alert("welcome")
// }


// // ===========================Question2 =======================



// var Gender = prompt("Enter your Gender")

// if(Gender == "male"){
//     alert("Good morning sir");
// }
// else if(Gender == "female"){
//     alert("Good morning mam");

// }
// else{
//     alert("Good morning ")
// }

// ===========================Question3 =======================



// var Trafficlight = prompt("Enter your Trafficlight")

// if(Trafficlight == "red"){
//     alert("Must Stop");
// }
// else if(Trafficlight == "yellow"){
//     alert("Ready to move");
// }
// else if(Trafficlight == "green"){
//     alert("GO");
// }
// else{
//     alert("Stop ")
// }
// ===============================Question 4===========================

// var fuel = prompt("Enter the remaining fuel in car")

// if(fuel < 5){
//     alert("Please refill the fuel in your car")
// }
// else{
//     alert("enough petrol")
// }



// ======================== Question 5 ========================
// function calculatepercentage(marksobtained,totalMArks){
//     return(marksobtained / totalMArks ) * 100
// }
// function computerGrade(percentage){
//     if (percentage >= 90){
//         return 'A+';
//     }
//     else if (percentage>=80){
//         return A;
//     }
//     else if (percentage>=70){
//         return B;
//     }
//     else if (percentage>=60){
//         return C;
//     }
//     else if (percentage>=50){
//         return D;
//     }
//     else {
//         return'fail'
//     }
// }

// var mark1 = parseFloat(prompt("Enter mark 1:"));
// var mark2 = parseFloat(prompt("Enter mark 2:"));
// var mark3 = parseFloat(prompt("Enter mark 3:"));
// var totalMArks = parseFloat(prompt("Enter mark tota;:"));

// var marksobtained = mark1 + mark2 + mark3;


//  var percentage = calculatepercentage(marksobtained, totalMArks);
//  var grade = computerGrade(percentage)
 
// document.write("Total Marks Obtained: " + marksobtained);
// document.write(" <br>Percentage: " + percentage + "%");
// document.write("<br>Grade: " + grade);


// ==============================Quesion 6=============================

var number = prompt("Enter a number:");

if (number % 2 === 0) {
    console.log(`The number ${number} is even.`);
} else {
    console.log(`The number ${number} is odd`);
}
