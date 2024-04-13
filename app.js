// // ===========================Question 1===================
// var number = parseFloat(prompt("Enter a number:"));

// if (number > 0) {
//     console.log("The number entered is positive.");
// } else if (number < 0) {
//     console.log("The number entered is negative.");
// } else {
//     console.log("The number entered is zero.");
// }



// // ================================Question 2=============================
// // Prompt the user to enter two integers
// var num1 = parseInt(prompt("Enter the first integer:"));
// var num2 = parseInt(prompt("Enter the second integer:"));

// // Check if the numbers are equal or not
// if (num1 === num2) {
//     console.log("The two integers are equal.");
// } else {
//     // Display the larger integer
//     if (num1 > num2) {
//         console.log("The larger integer is: " + num1);
//     } else {
//         console.log("The larger integer is: " + num2);
//     }
// }
// ===========================Question 5=========================


// var pass= prompt("Ente the password")
// var cpass= prompt("Ente the confirm password")

// if(pass == cpass){
//     alert("Correct")
// }
// else{
//     alert('Please check the confirm password ')
// }


// ===================== Question 7===========================


// var time = prompt("Enter the timme")

// if(time >= 0 && time < 6){
//     alert("Good Morning")
// }
// else if(time >= 6 && time < 13 ){
//     alert("Good aftternoon")
// }
// else if(time >= 13 && time < 17 ){
//     alert("Good Evening")
// }
// else if(time >= 17 && time < 22 ){
//     alert("Good Night")
// }
var greeting;
var hour = 19;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}
console.log(greeting)