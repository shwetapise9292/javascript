



const arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];

console.log(`Given array: ${arrayFruits}`);
console.log("");

const firstElementValue = arrayFruits[0];
console.log(`1. First element of array: ${firstElementValue}`);

let arrayLength = arrayFruits.length;
const lastElementValue = arrayFruits[arrayLength-1];
console.log(`Last element of array: ${lastElementValue}`);
console.log("");

arrayFruits.unshift("Papaya");
console.log(`2. After adding Papaya: ${arrayFruits}`);
console.log("");

const arraySpliced = arrayFruits.splice(4, 1);
console.log(`3. After removing Mango: ${arrayFruits}`);
console.log("");

arrayFruits.push("Pineapple");
console.log(`4. After adding Pineapple at last position: ${arrayFruits}`);
console.log("");

const spliceArray = arrayFruits.splice(4, 0, "Dragan Fruit");
console.log(`5. After adding Dragan Fruit before Water Melon: ${arrayFruits}`);
console.log("");

arrayFruits[2] = "Kiwi";
console.log(`6. After replacing Orange with Kiwi: ${arrayFruits}`);
console.log("");

const sliceArr = arrayFruits.slice(1, 5);
console.log(`7. Array elements starting from index 1 to 4: ${sliceArr}`);
console.log("");

const lastElement = arrayFruits[arrayLength-1];
const secondLastElement = arrayFruits[arrayLength-2];
const thirdLastElement = arrayFruits[arrayLength-3];
console.log(`8. Last 3 element: ${thirdLastElement},${secondLastElement},${lastElement}`);


