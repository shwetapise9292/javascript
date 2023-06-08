



class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("");
console.log("Employees from Wipro company :");
const arraywiproEmployees = arrayEmps.filter(employee => {
    return employee.emp_company === "Wipro"
});
const arraywiproEmployeeNames = arraywiproEmployees.map(employee => {
    return employee.emp_name;
});

console.log(arraywiproEmployeeNames);

console.log("");
console.log("Employees from IT or HR Department :");
const arrayitOrHREmployees = arrayEmps.filter(employee => {
    return employee.emp_dept === "IT" || employee.emp_dept === "HR";
});
const itOrHRDepartmentEmp = arrayitOrHREmployees.map(employee => {
    return employee.emp_name;
});

console.log(itOrHRDepartmentEmp);

console.log("");
console.log("Employees whoes id's are greater than 50 :");
const employeesWithIdsGreaterThan50 = arrayEmps.filter(employee => {
    return employee.emp_id > 50
});
const arrayempsWithIdsGreaterThan50 = employeesWithIdsGreaterThan50.map(employee => {
    return employee.emp_name;
});
console.log(arrayempsWithIdsGreaterThan50);

console.log("");
console.log("Employees whoes name start with letter 'A' 'V' or 'M'");
const filteredEmployees = arrayEmps.filter(employee => {
    if (employee.emp_name.startsWith('A') || employee.emp_name.startsWith('V') || employee.emp_name.startsWith('M')) {
        return true;
    }
    return false;
});

const employeeNames = filteredEmployees.map(employee => {
    return employee.emp_name;
});

console.log(employeeNames);

console.log("");
console.log("Average salary :");

// Step 1: Calculate sum of salaries for all employees
const totalSalarySum = arrayEmps.reduce((sum, employee) => {
    return sum + employee.emp_salary;
 }, 0);
 
 // Step 2: Count the total number of employees
 const totalEmployeeCount = arrayEmps.length;
 
 // Step 3: Calculate average salary across all departments
 const averageSalary = totalSalarySum / totalEmployeeCount;
 
 console.log(averageSalary);

 console.log("");
 console.log("Average salary for IT department :");
 // Step 1: Filter the employees in the IT department
const itDepartmentEmployees = arrayEmps.filter(employee => {
    return employee.emp_dept === 'IT';
});

// Step 2: Calculate the sum of salaries for IT department employees
const arrtotalSalarySum = itDepartmentEmployees.reduce((sum, employee) => sum + employee.emp_salary, 0);

// Step 3: Calculate the average salary for the IT department
const itaverageSalary = arrtotalSalarySum / itDepartmentEmployees.length;

console.log(itaverageSalary);
