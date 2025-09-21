//TODO - Create Employee Module here and export to use in index.js
class Employee {
    static nextID = 5;
     static employees = [
        { id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", salary: 5000 },
        { id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", salary: 4000 },
        { id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", salary: 5500 },
        { id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", salary: 9000 }
    ];
    
    constructor(fName, lName, email, salary){
        this.id = Employee.nextId++;
        this.firstName = fName;
        this.lastName = lName ;
        this.email = email;
        this.salary = salary;
    }

    static getAllEmployees = () => {
        return Employee.employees;
    }

    static getAllEmployeeNames = () => {
        return Employee.employees.map(emp => `${emp.firstName} ${emp.lastName}`);
    }

    static getTotalSalary = () => {
        return Employee.employees.reduce((total, emp) => total + emp.salary, 0);
    }
}
module.exports = Employee;
