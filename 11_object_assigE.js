



let sbiBank = {
    bankName : "State Bank of India",
    location : "Pune",
    accountNo : 78956423841,
    ifsc : "sbibk489675",
    interestRate : "9%",
    showDetails: function () {  
        console.log(`SBI Bank Details--> Name: ${this.bankName}, Location: ${this.location}, Account No.: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`);  
      },
};

let axisBank = {
    bankName : "Axis Bank",
    location : "Mumbai",
    accountNo : 8671223841,
    ifsc : "axisbk45823",
    interestRate : "10%",
    showDetails: function () {  
        console.log(`Axis Bank Details--> Name: ${this.bankName}, Location: ${this.location}, Account No.: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`);  
      },
};

let hdfcBank = {
    bankName : "HDFC Bank",
    location : "Satara",
    accountNo : 17542368,
    ifsc : "hdfcbk852",
    interestRate : "9.5%",
    showDetails: function () {  
        console.log(`HDFC Bank Details--> Name: ${this.bankName}, Location: ${this.location}, Account No.: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`);  
      },
};

let yesBank = {
    bankName : "Yes Bank",
    location : "Karad",
    accountNo : 6325894,
    ifsc : "yesbk7512",
    interestRate : "11%",
    showDetails: function () {  
        console.log(`YES Bank Details--> Name: ${this.bankName}, Location: ${this.location}, Account No.: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}`);  
      },
};

sbiBank.showDetails();
console.log("---------------------------------------------------------------------------------------------------------------------------------");

axisBank.showDetails();
console.log("---------------------------------------------------------------------------------------------------------------------------------");

hdfcBank.showDetails();
console.log("---------------------------------------------------------------------------------------------------------------------------------");

yesBank.showDetails();