



let professor = {
    name : "Shreya More",
    gender : "Female",
    department : "CSE",
    Salary : 35000,
    Designation : "HOD",
    degrees : {
        diploma : "IT",
        engineering : "CSE",
        mTech : "Cloud Computing",
        phd : "Advance Computing",
    },
    certificates : ["Hacker Rank Participation", "Certificate in IFE cource", "Certificate in Adv Programming"],
      
    gettotalDegrees : function() {
        let totalDegrees = `diploma: ${this.degrees.diploma}, engineering: ${this.degrees.engineering}, mTech: ${this.degrees.mTech}, phd: ${this.degrees.phd}`;
        return totalDegrees;
    },      
};
console.log("1. Object Properties:");
console.log(professor);
console.log("----------------------------------------------------------------------------------------------------------");

console.log("2. Nested object - Professor's Degrees:");
console.log(professor.degrees);
console.log("----------------------------------------------------------------------------------------------------------");

console.log("3. Array Properties:");
console.log(professor.certificates);
console.log("----------------------------------------------------------------------------------------------------------");

const totalDegrees = professor.gettotalDegrees();  
console.log(`4. Total Degrees are: ${totalDegrees}`); 
console.log("----------------------------------------------------------------------------------------------------------");

console.log("5. Added new property");
professor.totalExperience = "14 years";
console.log(`Total experience:${professor.totalExperience}`);
console.log("----------------------------------------------------------------------------------------------------------");

console.log("6. Updates property designation from HOD to vice principal");
professor.Designation = "Vice Principal";
console.log(professor);
console.log("----------------------------------------------------------------------------------------------------------");

console.log("7. Adding element in last position of array of an object:")
professor.certificates.push("Oracle certified");
console.log(`${professor.certificates}`);
console.log("----------------------------------------------------------------------------------------------------------");

const arrayLength = professor.certificates.length;
const lastElement = professor.certificates[arrayLength - 1];
console.log(`8. Last element of the array: ${lastElement}`);


