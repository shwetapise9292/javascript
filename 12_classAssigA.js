



class vehicle {
    constructor(name, price, engine, transmission, fueltype){
        this.name = name;
        this.price = price;
        this.engine = engine;
        this.transmission = transmission;
        this.fueltype = fueltype;
    }
    
    showDetails(){
        console.log(`Name: ${this.name}, Price: ${this.price}, Engine: ${this.engine}, Transmission: ${this.transmission}, Fuel Type: ${this.fueltype} `);
    }    

}
console.log("------------------------------------Vehicle Details----------------------------------------");
console.log("");
const swiftDzire = new vehicle("Swift Dzire", "8 Lakh", "1197cc", "Manual", "Petrol");
const ecoSport = new vehicle("Eco Sport", "12 Lakh","1496cc","Manual","Diesel");
const creta = new vehicle("Creta", "18 Lakh", "1493cc", "Manual", "Diesel");
const nexon = new vehicle("Nexon", "10Lakh", "1199cc", "Manual", "Diesel");
const  innova = new vehicle("Innova", "20Lakh", "1958", "Manual", "Diesel");

const arrayOfVehicles = [swiftDzire, ecoSport, creta, nexon, innova];

for (const element of arrayOfVehicles) {
    element.showDetails();
 }

 console.log("");



class college {
    constructor(name, location, department, phoneNo){
        this.name = name;
        this.location = location;
        this.department = department;
        this.phoneNo = phoneNo;
    }  
}
console.log("------------------------------------College Details----------------------------------------");
const ycCollege = new college("Y. C.", "Karad", 5, 9532146824);
const dacoe = new college("Dacoe", "Karad", 6, 8546927412);
const siom = new college("SIOM", "Pune", 6, 7569842358);
const kit = new college("KIT", "Kolhapur", 4, 9584712365);

traverse(ycCollege);
traverse(dacoe);
traverse(siom);
traverse(kit);

function traverse(collegeObject){
    console.log("");
    for (const key in collegeObject) {
        if (Object.hasOwnProperty.call(collegeObject, key)) {
            const element = collegeObject[key];
            console.log(`${key} : ${element}`);
                    }
    }
}









