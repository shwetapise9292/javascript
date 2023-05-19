




var isEligible = function(gradScore, hscScore, sscScore, candidateName){
    var result = (gradScore>=70 || hscScore>=80 || sscScore>90) ? `Congrates ${candidateName}, you are eligible for TCS interview.` : `Unfortunately ${candidateName}, you are not eligible for TCS interview.`;
    console.log(`${result}`);
}
console.log(" ");
console.log("            ***TCS Interview Eligibility***");
console.log(" ");
isEligible(80, 86, 90, "Shweta");
console.log(" ");
isEligible(70, 65, 55, "Dhanashri");
console.log(" ");
isEligible(60, 79, 88, "Snehal");





// function swapVariables(valueOne, valueTwo) { //Arguments
//     console.log("Before swap:", valueOne, valueTwo);
//     var temp = valueOne;
//     valueOne = valueTwo;
//     valueTwo = temp;
//     console.log("After swap:", valueOne, valueTwo)
// }
// swapVariables(numOne, numTwo); //100 200
// swapVariables(name1, name2);
// swapVariables(fruitApple, fruitMango)