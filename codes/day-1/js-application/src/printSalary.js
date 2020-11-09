function printSalary(salaryFnRef) {
    var salary = salaryFnRef();
    console.log("salary: " + salary)
}
//module.exports["default"] = printSalary;
export default printSalary;