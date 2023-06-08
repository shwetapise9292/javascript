




const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log("");
console.log("Array element with it's index");

arrayNumbers.forEach((element, index) => {
    console.log(`Index : ${index}: Element : ${element}`);
  });
  console.log("-------------------------------------------------");

  console.log("");
  console.log("Positive numbers from the given array");
  arrayNumbers.forEach((element) => {
    if (element > 0) {
      console.log(element);
    }
  });
  console.log("-------------------------------------------------");

  console.log("");
  console.log("Array of negative numbers from the given array");
  const arraynegativeNums = [];
  arrayNumbers.forEach((element) => {
  if (element < 0) {
    arraynegativeNums.push(element);
  }
});
console.log(arraynegativeNums);
console.log("-------------------------------------------------");

console.log("");
console.log("Even numbers from the given array");
arrayNumbers.forEach((element) => {
    if (element % 2 === 0) {
      console.log(element);
    }
  });
  console.log("-------------------------------------------------");

console.log("");
console.log("Sum of all elements from the given array");
  let sumValue = 0;

  arrayNumbers.forEach((element) => {
    sumValue += element;
  });
  
  console.log(sumValue);
  console.log("-------------------------------------------------");

  console.log("");
  console.log("Even indexed elements from the given array");

  arrayNumbers.forEach((element, index) => {
    if (index % 2 === 0) {
      console.log(element);
    }
  });