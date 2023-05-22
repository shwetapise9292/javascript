




var word = "I am very good IT developer";
console.log(`Given string: ${word}`);

var count = 0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index); // 
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
        count++;
    }  
}
console.log(`Total number of vowels: ${count}`);
console.log("-----------------------------------------");

function sumOfCubes(){
    var sum = 0;
    for (let index = 1; index <= 5; index++) {
        sum = sum + index * index * index;
    }
    console.log(`Sum of cubes: ${sum}`);
}
sumOfCubes();
console.log("-----------------------------------------");

function oddPositionedChars(givenString){
    var str = "";
    for (let index = 0; index < givenString.length; index++) {
       var char = givenString.charAt(index);
       if(index%2 != 0 && char!= " "){
        str = str + char
       }
       
    }
    console.log(`Given string: ${givenString}`);
    console.log(`Odd positioned characters: ${str}`);
    console.log("");
}

oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT Champ");