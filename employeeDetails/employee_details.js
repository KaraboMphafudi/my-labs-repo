// Updated employee array with specialization
const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Recruitment' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Accounting' },
];

// Function 1: Display all employees
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary} - ${employee.specialization}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// Function 2: Calculate total salaries
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: ${totalSalaries}`);
}

// Function 3: Display HR employees
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary} - ${employee.specialization}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// Function 4: Find employee by ID
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =
            `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - ${foundEmployee.salary} - ${foundEmployee.specialization}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'No employee found with this ID';
    }
}

// Function 5: Find by Specialization ✅ NEW!
function findBySpecialization(specialization) {
    const specializedEmployees = employees.filter(employee => employee.specialization === specialization);
    if (specializedEmployees.length > 0) {
        const specializedDisplay = specializedEmployees
            .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary} - ${employee.specialization}</p>`)
            .join('');
        document.getElementById('employeesDetails').innerHTML = specializedDisplay;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'No employees found with this specialization';
    }
}