/*
This code calculates the Fahrenheit temperature based on Celsius and Kelvin degrees.
*/

var kelvin = 293; // Here que defined the constant value for Kelvin degrees.
console.log("The value of Kelvin is: " + kelvin);
var celsius = kelvin - 273; // Here we calculate the celsius degrees based on kelvin.
console.log("The value of Celsius is: " + celsius);
var fahrenheit = celsius * (9/5) + 32; //Here we calculate the fahrenheit degrees based on celsius.

console.log("The value of Fahrenheit is: " + getFloor(fahrenheit)); //Here we print the Fahrenheit degrees calling previously the getFloor function.

// We define this simple function with the method floor() to avoid decimals in the result.
function getFloor(x) {
  return Math.floor(x);
}
