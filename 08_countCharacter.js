


function countCharA(string){
    var count = 0;
    for (let index = 0; index < string.length; index++) {
    var char = string.charAt(index); // 
    if (char == 'a' || char == 'A') {
        count++;
    }  
}
console.log(`Given string: ${string}`);
console.log(`Total number of characters 'a' or 'A': ${count}`);
console.log("");
}
countCharA("I AM Learning JavaScript, The Language of internet");
countCharA("My favourite movie is LAggAn");
