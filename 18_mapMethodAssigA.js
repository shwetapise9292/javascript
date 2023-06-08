



const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log(""); 

console.log("After adding 10 to each array element");
const arrayNumbersTrans = arrayNumbers.map( (element) => {
    return element+10;
} );
console.log(arrayNumbersTrans);
console.log("----------------------------------------------------------------------");

console.log(""); 
console.log("After squaring each array element");
const arrayNumbersTransform = arrayNumbers.map( (element) => {
    return element*element;
} );
console.log(arrayNumbersTransform);
console.log("----------------------------------------------------------------------");

console.log("");
console.log("After adding the index value into its corresponding each array element");
const arrayNumbersTransformed = arrayNumbers.map( (element, index) => {
    return element+index;
} );
console.log(arrayNumbersTransformed);
console.log("----------------------------------------------------------------------");



