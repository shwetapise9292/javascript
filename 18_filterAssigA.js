



const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log("");
console.log("Numbers which are greater than 50 :");
const arrayGreaterThan50 = arrayNumbers.filter( (element)=> {
    return element>50;
} );
console.log(arrayGreaterThan50);

console.log("");
console.log("Even numbers :");

const arrayEven = arrayNumbers.filter((element) => {
    return element % 2 === 0;
  });  
  console.log(arrayEven);

  console.log("");
console.log("Odd numbers :")
  const arrayodd = arrayNumbers.filter((element) => {
    return element % 2 != 0;
  });
  
  console.log(arrayodd);

  console.log("");
console.log("Numbers which are multiple of 5 :")
  const arrayMultiplesOf5 = arrayNumbers.filter((element) => {
    return element % 5 == 0;
  });  
  console.log(arrayMultiplesOf5);


  console.log("");
console.log("Numbers which are between 20 and 50 :")
  const arrayBetween20And50 = arrayNumbers.filter((element) => {
    return element >= 20 && element <= 50;
  });
  
  console.log(arrayBetween20And50);