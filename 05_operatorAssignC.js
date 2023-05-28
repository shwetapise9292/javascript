




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
