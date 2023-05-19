



var greet = "Good Morning";
var greetLength = greet.length;
console.log("Total number of characters in given string is:", greetLength);

var charAtZeroIndex =greet.charAt(0);
console.log("Character at 0 index:", charAtZeroIndex);

var charAtLastIndex = greet.charAt(greet.length - 1);
console.log("Character at last index:", charAtLastIndex);

var indexOfM = greet.indexOf("M");
console.log("Index of M is:", indexOfM);

var indexofo = greet.indexOf("o");
console.log("Index of o is:", indexofo);

var replaceValue = greet.replace("Morning", "Afternoon");
console.log("After replace:", replaceValue);

var firstName = "Shweta"
var lastName = "Pise";

var concatString = firstName.concat(lastName);
console.log("Concated string is", concatString);

var firstName = "  Shweta   ";
var firstNameLength = firstName.length;
console.log("Before trim length is:",firstNameLength);

var trimmedFirstName = firstName.trim();
var lengthAfterTrim = trimmedFirstName.length;
console.log("After trim First Name is:", trimmedFirstName, trimmedFirstName.length);
console.log("Trimmed total spaces:",firstNameLength - lengthAfterTrim);


var firstName = "Shweta";
var nameLength = firstName.length;
console.log("Total number of characters in given string is:", nameLength);

var greet = "Good Morning";
var includeResult = greet.includes("ing");
console.log("Is ing string available inside : ", includeResult); 

var searchResult = greet.search("Mor");
console.log("Search result : ", searchResult); 

var sliceResult = greet.slice(4, 6);
console.log("Slice Result is: ", sliceResult); 

var subStringResult = greet.substring(4, 6);
console.log("Substring result is: ", subStringResult);