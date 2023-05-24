



var myName = "Shweta";   // variable declaration and initialization

var myName = "Shweta Pise";   // Re-declaration allowed

var myName = "Shweta A. Pise";   // Update

console.log(`${myName}`);   

let collegeName = "DACOE";

collegeName = "DACOE Karad";   //Re-declaration not allowed

const PI = 3.14;
//PI = 3.1412;   //Update not allowd
console.log(`${PI}`);

//Scope accessibility
let age = 25;
if(age == 25){
    let city = "Pune";
    console.log(`City ${city}`);
}
console.log(`City ${city}`);

function show(){
    var country = "India";
    let age = 25;
    if(age == 25){
        let city = "Pune";
        const PIN = 431267;
        var village = "Mulsi";
    }
        //console.log(`City ${city}`);
        //console.log(`PIN ${PIN}`);
        console.log(`Village ${village}`);
}
show();
console.log(`Country ${country}`);

