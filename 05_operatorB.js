




var greaterNumber = function(num1, num2){
    var result = num1>=num2 ? num1 : num2;
    console.log("Greater Number between", +num1, "and" +num2,"is:",result);
    
}
greaterNumber(10, -10);
greaterNumber(800,899);
console.log("----------------------------------------------------");

var isEvenOrOdd = function(num){
    var result = num%2 == 0 ? true : false;
    console.log("Is the number", +num, "even?:",result); 
    return(result);
}
isEvenOrOdd(29);
isEvenOrOdd(44);
isEvenOrOdd(0);
isEvenOrOdd(101);
console.log("----------------------------------------------------");

var wordLength = function(word){
    var len = word.length;
    var result = len%2==0 ? "Even" : "Odd";
    return result;
}
var returnValue = wordLength("JavaScript");
console.log("Length of JavaScript is:",returnValue);

var returnValue = wordLength("developer");
console.log("Length of developer is:",returnValue);

var returnValue = wordLength("Google");
console.log("Length of Google is:",returnValue);


