




console.log("1. Write a function expression to get square of the number Ex - 5, 6, 25, 100");
var square = function(num){    
    var result = num * num;
    return `Square of ${num} is : ${result}`;     
}
var result = square(5);
console.log(result);

var result = square(6);
console.log(result);

var result = square(25);
console.log(result);

var result = square(100);
console.log(result);
console.log("");

console.log("2. Check and log type of function");
var typeOfFunction = typeof square;
console.log(`Type of Function: ${typeOfFunction}`);
console.log("");

console.log("3. Write a FE to get the area of rectangle plot [length=499 and width= 917]");
var areaOfRectanglePlot = function(length, width){    
    var result = length * width;
    return `Area of Rectangle Plot is : ${result}`;     
}
var result = areaOfRectanglePlot(499, 917);
console.log(result);
console.log("");

console.log("4. Write a FE with two args and should swap the passed values and log on console before swap and after swap values inside function itself.");
var swapValues = function(val1, val2){
    console.log(`Values before swap: ${val1}, ${val2}`);
    var temp = val1;
    val1 = val2;
    val2 = temp;
    return `Values after swap: ${val1}, ${val2}`;
}
var result = swapValues("Virat", "Anushka");
console.log(result);
console.log("");
var result = swapValues(1000, 2000);
console.log(result);
console.log("");

console.log("5. Write a FE which can perform the below steps for string - JS the most popular language of internet");
var stringHandsOn = function(){
    var string = "JS the most popular language of internet";

    var lengthOfString = string.length;
    console.log(`A. Total character available in the string : ${lengthOfString}`);    

    var charAtSixIndex = string.charAt(6);
    console.log(`B. Character at 6 index: ${charAtSixIndex}`);

    var charAtElevenIndex = string.charAt(11);
    console.log(`C. Character at 11 index: ${charAtElevenIndex}`);

    var lastCharacter = string.charAt(string.length-1);
    console.log(`D. Last character of string: ${lastCharacter}`);

    var charAtFirst = string.charAt(0);
    console.log(`E. First character of string: ${charAtFirst} `);

    var splitString = string.split(" ");
    var splitStrLength = splitString.length;
    console.log(`F. Total number of words in a string: ${splitStrLength}`);
   


    
}
stringHandsOn();
