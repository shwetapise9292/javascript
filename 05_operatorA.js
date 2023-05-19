



function squareOfWordLength (str){
    
    var length = str.length;
    var square = length * length;
    console.log("Word:",str,",","Length:",length,",","Square of length",square);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Devloper Smart");
console.log("-------------------------------------------------------");

function strOperations (){
    var str = "I am Angular Developer";
    var lengthStr = str.length;
    var splitLen = str.split(" ");
    var totalWords = splitLen.length;
    var resultDivision = lengthStr/totalWords; 
    var resultMultiplication = lengthStr*totalWords;
    console.log("Given String:",str);
    console.log("Length of String:",lengthStr);
    console.log("Total no. of words:",totalWords);
    console.log("Result of string length divide by total no. of words in string:",resultDivision);
    console.log("Result of string length multiply by total no. of words in string:",resultMultiplication);

}
strOperations();
