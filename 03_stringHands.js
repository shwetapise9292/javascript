



function stringHandsOn(){
    var str = "     Hey you are doing good, keep it up     ";
    console.log("Given string:",str);
    console.log("");

    var strLength = str.length;
    console.log("Length of the string:", strLength);
    console.log("");

    var trimStr = str.trim();
    console.log("String after trim:", trimStr);
    console.log("");

    var trimStrLength = trimStr.length;
    console.log("Length of the trimmed string:", trimStrLength);
    console.log("");

    console.log("Trimmed total spaces:",strLength - trimStrLength);
    console.log("");


    var charAtZeroIndex =trimStr.charAt(0);
    var charAtLastIndex = trimStr.charAt(trimStrLength - 1);
    console.log("Character at 0 index:", charAtZeroIndex, ",", "Character at last index:", charAtLastIndex);
    console.log("");

    var splitStr = trimStr.split(" ");
    var splitStrLength = splitStr.length;
    console.log("Total number of words in a string after trimmed:",splitStrLength);
    console.log("");


    var indexofGood = str.indexOf("good");
    console.log("Index of good:",indexofGood);
    console.log("");

    var subStringResult = trimStr.substring(22);
    console.log("Substring result is: ", subStringResult);
    console.log("");

    var sliceResult = trimStr.slice(22);
    console.log("Slice Result is: ", sliceResult); 
    console.log("");

    var strEndsWith = trimStr.endsWith("up");
    console.log("Is string ends with up:",strEndsWith);
    console.log("");

    var strStartWith = trimStr.startsWith("Hey");
    console.log("Is string starts with Hey:",strStartWith);
}
stringHandsOn();