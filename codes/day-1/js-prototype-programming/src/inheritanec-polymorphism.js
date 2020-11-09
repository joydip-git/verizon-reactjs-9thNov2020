function employee(name, id, basicpay, dapay, hrapay) {
    this.name = name;
    this.id = id;
    this.basicPayment = basicpay;
    this.daPayment = dapay;
    this.hraPayment = hrapay;
}
employee.prototype.calculateSalary = function () {
    return this.basicPayment + this.daPayment + this.hraPayment;
}
console.log(employee.prototype)

function developer(name, id, basicpay, dapay, hrapay, incentivepay) {
    employee.call(this, name, id, basicpay, dapay, hrapay);
    this.incentivePayment = incentivepay;
    this.calculateSalary = function () {
        return this.__proto__.calculateSalary.apply(this) + this.incentivePayment;
    }
    this.calculateSalary = this.calculateSalary.bind(this);
}
Object.setPrototypeOf(developer.prototype, employee.prototype);

function hr(name, id, basicpay, dapay, hrapay, gratuitypay) {
    // employee = employee.bind(this, name, id, basicpay, dapay, hrapay);
    // employee();
    employee.call(this, name, id, basicpay, dapay, hrapay);
    this.gratuityPayment = gratuitypay;
    this.calculateSalary = function () {
        return this.__proto__.calculateSalary.apply(this) + this.gratuityPayment;
    }
    this.calculateSalary = this.calculateSalary.bind(this);
}
Object.setPrototypeOf(hr.prototype, employee.prototype);

var suresh = new developer('suresh', 1, 1000, 2000, 3000, 4000);
var mahesh = new hr('mahesh', 2, 1500, 2500, 3500, 4500);

console.log(suresh.__proto__)
console.log(mahesh.__proto__)
// console.log(suresh.calculateSalary())
// console.log(mahesh.calculateSalary())

function printSalary(salaryFnRef) {
    var salary = salaryFnRef();
    console.log(salary)
}

printSalary(suresh.calculateSalary);
printSalary(mahesh.calculateSalary);