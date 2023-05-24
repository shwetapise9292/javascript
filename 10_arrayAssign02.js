



const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`***Given array: ${arrayNumbers}***`);
console.log("");

let lengthOfArray = arrayNumbers.length;
console.log(`1. Total number of element available in array: ${lengthOfArray}`);
console.log("------------------------------------------------------------------------------------------");

const firstElement = arrayNumbers[0];
console.log(`2. First element of an array: ${firstElement}`);

const lastElement = arrayNumbers[lengthOfArray-1];
console.log(`   Last element of an array: ${lastElement}`);
console.log("------------------------------------------------------------------------------------------");

const thirdLastElement = arrayNumbers[lengthOfArray - 3];
console.log(`3. Third Last element of an array: ${thirdLastElement}`);
console.log("------------------------------------------------------------------------------------------");

console.log(`4. Even numbers in array:`);
for (const index in arrayNumbers) {    
    if (arrayNumbers[index] % 2 == 0) {            
        console.log(`${arrayNumbers[index]}`);
    }
}
console.log("------------------------------------------------------------------------------------------");

console.log(`5. Odd numbers in array:`);
for (const index in arrayNumbers) {    
    if (arrayNumbers[index] % 2 != 0) {            
        console.log(arrayNumbers[index]);
    }
}
console.log("------------------------------------------------------------------------------------------");

console.log(`6. Even indexed numbers in array:`);
let sumEvenIndexNo = 0;
for (const index in arrayNumbers) {
    if (index%2==0) {
    console.log(arrayNumbers[index]);
    sumEvenIndexNo += arrayNumbers[index];  
    }
    
 }  
 console.log(`Sum of even indexed numbers: ${sumEvenIndexNo}`);
 console.log("------------------------------------------------------------------------------------------");

 console.log(`7. Odd indexed numbers in array:`);
 let sumOddIndexNo = 0;
for (const index in arrayNumbers) {
    if (index%2!=0) {
     console.log(`${arrayNumbers[index]}`);
     sumOddIndexNo += arrayNumbers[index];
    }
 }
 console.log(`Sum of odd indexed numbers: ${sumOddIndexNo}`);
 console.log("------------------------------------------------------------------------------------------");

 let sumOfAllNo = 0;
 for(const index in arrayNumbers) {
    sumOfAllNo += arrayNumbers[index];
    
 }
 console.log(`8. Sum of all numbers in array: ${sumOfAllNo}`);
 console.log("------------------------------------------------------------------------------------------");

 console.log("9. Numbers of an array which are multiple by 5:")
 for (const index in arrayNumbers) {
    if (arrayNumbers[index]%5 == 0) {
        console.log(arrayNumbers[index]);
        
    }
 }
 console.log("------------------------------------------------------------------------------------------");

let include115 = arrayNumbers.includes(115);
console.log(`10. Is 115 is available in array: ${include115}`);
console.log("------------------------------------------------------------------------------------------");

let include23 = arrayNumbers.includes(23);
console.log(`11. Is 23 is available in array: ${include23}`);
console.log("------------------------------------------------------------------------------------------");

arrayNumbers.splice(3, 0, 55, 66)
console.log(`12. After adding 55 and 66 before index 3: ${arrayNumbers}`);
console.log("------------------------------------------------------------------------------------------");

let arrSpliced = arrayNumbers.splice(4, 3);
console.log(`13. After deleting 3 elements starting from index 4: ${arrayNumbers}`);
