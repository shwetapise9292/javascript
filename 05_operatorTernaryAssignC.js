




var maleMarriageEligibility = function(gender, age, boyName){
    var result = (gender=="male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : `Hey ${boyName} you are not eligible for marriage`;
    return(result);   
}
var returnValue = maleMarriageEligibility("male",25,"Billgates");
console.log(returnValue);

var returnValue = maleMarriageEligibility("male",17,"Stew Jobs");
console.log(returnValue);
console.log("----------------------------------------------------");

var femaleMarriageEligibility = function(gender, age, girlName){
    var result = (gender=="female" && age>=18) ? `Hey ${girlName} you are eligible for marriage` : `Hey ${girlName} you are not eligible for marriage`;
    return(result);   
}
var returnValue = femaleMarriageEligibility("female",16,"Jenifer");
console.log(returnValue);

var returnValue = femaleMarriageEligibility("female",27,"Malinda Gates");
console.log(returnValue);


