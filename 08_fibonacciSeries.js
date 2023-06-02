



let n1 = 0;
let n2 = 1;
let nextNum;

console.log("Fibonacci Series");
console.log(n1); // Print the initial value of n1 (0)

for (let index = 0; index < 10; index++) {
    console.log(n2); // Print the current value of n2
    
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
}