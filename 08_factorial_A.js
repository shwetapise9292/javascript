




function factorialOfNum(num){
    if(num == 0){
        console.log(`Factorial of o: 1`);
        return;
    }

    let factorial = 1;
    if (num == null || num == undefined || num == NaN) {
        console.log(`Invalid input: ${num}`);
    }else{
        for (let index = num; index >= 1; index--) {
            factorial = factorial * index;        
        }
        return factorial;
        
    }
    
}
let factOf5 = factorialOfNum(5);
console.log(`Factorial of 5: ${factOf5}`);
console.log("");

let factOf3 = factorialOfNum(3);
console.log(`Factorial of 3: ${factOf3}`);
console.log("");

factorialOfNum(null);
console.log("");

let factOf8 = factorialOfNum(8);
console.log(`Factorial of 8: ${factOf8}`);
console.log("");


factorialOfNum(undefined);
console.log("");

let factOf9 = factorialOfNum(9);
console.log(`Factorial of 9: ${factOf9}`);
console.log("");

factorialOfNum(0);