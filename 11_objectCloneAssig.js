



let bankSbi = {
    bankName : "State Bank of India",
    location : "Pune",
    accountNo : 78956423841,
    ifsc : "sbibk489675",
};

let bankLocation = {
    street : "Grant Road",
    city : "Mumbai",
    pin : 431532,
};

let rateOfInterest = {
    homeLoanInterest : "8.5%",
    personalLoanInterset : "9%",
    dueInterest : "10%",
};

console.log("1. Cloned Object:");
Object.assign(bankSbi, bankLocation);
console.table(bankSbi);
console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------");

console.log("2. Merger Object sbiDetails:");
const sbiDetails = Object.assign(bankSbi, bankLocation, rateOfInterest);
console.table(sbiDetails);
console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------");

console.log("3. Traversing merged object sbiDetails:")
for (const key in sbiDetails) { 
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value = sbiDetails[key];
        console.log(`${key}, ${value}`);
    }
}