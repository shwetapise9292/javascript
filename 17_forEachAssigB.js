



class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("");
console.log("TCS Employee Details :");
console.log("");
employees.forEach((employee) => {
  if (employee.emp_company === "TCS") {
    console.log(`Name: ${employee.emp_name}, Company: ${employee.emp_company}`);
  }
});
console.log("----------------------------------------------------------------------------------------");

console.log("");
console.log("Employee details with salary greater than or equal to 50000 :");
console.log("");
employees.forEach((employee) => {
    if (employee.emp_salary >= 50000) {
      console.log(`ID: ${employee.emp_id}, Name: ${employee.emp_name}, Department: ${employee.emp_dept}, Salary: ${employee.emp_salary}, Company: ${employee.emp_company}`);
    }
  });
  console.log("----------------------------------------------------------------------------------------");

console.log("");
let sumOfSalary = 0;

employees.forEach((employee) => {
    sumOfSalary += employee.emp_salary;
});

console.log("Sum of all employees Salary:", sumOfSalary);
console.log("----------------------------------------------------------------------------------------");

console.log("");
let sumSalary = 0;
employees.forEach( (employee) => {
    sumSalary = sumSalary + employee.emp_salary;
});
let averageSalary = sumSalary / employees.length;
console.log(`Average Salary : ${averageSalary}`);
console.log("----------------------------------------------------------------------------------------");

console.log("");
console.log("Employee Details from IT and HR department whoes salary is greater thar or equal to 75000:");
console.log("");
employees.forEach((employee) => {
    if ((employee.emp_dept === "IT" || employee.emp_dept === "HR") && employee.emp_salary >= 75000) {
      console.log(`ID: ${employee.emp_id}, Name: ${employee.emp_name}, Department: ${employee.emp_dept}, Salary: ${employee.emp_salary}, Company: ${employee.emp_company}`);
    }
  });