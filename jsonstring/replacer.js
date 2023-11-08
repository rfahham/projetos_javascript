const employee = {
    id: 1, 
    name: "Raj", 
    salary: 3500
};

const doubleSalary = (key, value) => {
    return key === "salary" ? value * 2 : value;
};

const result = JSON.stringify(employee, doubleSalary);
console.log(result);