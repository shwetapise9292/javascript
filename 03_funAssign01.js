



function displayMsg() {
    console.log("Function 1 : Hello, Welcome to JavaScript...");
}
displayMsg();
console.log(" ");

function display() {
    console.log("Function 2 : Enjoy learning JavaScript...");
}
display();
console.log("---------------------------------------------------------------------");

function personalDetails(firstName, lastName, collegeName) {
    console.log("First Name:", firstName, ",", "LastName:", lastName, ",", "College Name:", collegeName);    
}
personalDetails("Shweta", "Pise", "DACOE Karad");
console.log("---------------------------------------------------------------------");

function swapValuesDude(value1, value2){
    console.log("Before swap:", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After swap:", value1, value2);
    
}
swapValuesDude("Virat", "Anushka");
console.log(" ");
swapValuesDude(1000, 2000);
console.log("---------------------------------------------------------------------");

function addThreeValues(num1, num2, num3) {
    var result  = num1 + num2 + num3;
    return result;
}
var returnValue = addThreeValues(10.23, 600, 40);
console.log("Addition of given numbers: ", returnValue);
console.log(" ");

var returnResult = addThreeValues("Hello", "Good", "Morning");
console.log("Addition of given string is: ", returnResult);
