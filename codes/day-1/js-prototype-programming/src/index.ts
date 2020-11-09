class employee {
    private _name: string;
    private _id: number;
    private _basicPayment: number;
    private _daPayment: number;
    private _hraPayment: number;

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get basicPayment(): number {
        return this._basicPayment;
    }
    public set basicPayment(value: number) {
        this._basicPayment = value;
    }
    public get daPayment(): number {
        return this._daPayment;
    }
    public set daPayment(value: number) {
        this._daPayment = value;
    }
    public get hraPayment(): number {
        return this._hraPayment;
    }
    public set hraPayment(value: number) {
        this._hraPayment = value;
    }

    constructor(name: string = null, id: number = 0, basicpay: number = 0, dapay: number = 0, hrapay: number = 0) {
        this._name = name;
        this._id = id;
        this._basicPayment = basicpay;
        this._daPayment = dapay;
        this._hraPayment = hrapay;
    }

    calculateSalary() {
        return this._basicPayment + this._daPayment + this._hraPayment;
    }
}
// console.log(employee.prototype)
class developer extends employee {
    private _incentivePayment: number;
    public get incentivePayment(): number {
        return this._incentivePayment;
    }
    public set incentivePayment(value: number) {
        this._incentivePayment = value;
    }
    // constructor() {
    //     super();
    // }
    constructor(name: string = null, id: number = 0, basicpay: number = 0, dapay: number = 0, hrapay: number = 0, incentivepay: number = 0) {
        super(name, id, basicpay, dapay, hrapay);
        this._incentivePayment = incentivepay;
        this.calculateSalary = this.calculateSalary.bind(this);
    }

    calculateSalary() {
        return super.calculateSalary() + this._incentivePayment;
    }
}
class hr extends employee {
    private _gratuityPayment: number;
    public get gratuityPayment(): number {
        return this._gratuityPayment;
    }
    public set gratuityPayment(value: number) {
        this._gratuityPayment = value;
    }
    constructor(name: string = null, id: number = 0, basicpay: number = 0, dapay: number = 0, hrapay: number = 0, gratuitypay: number = 0) {
        super(name, id, basicpay, dapay, hrapay);
        this._gratuityPayment = gratuitypay;
    }
    calculateSalary = () => {
        return super.calculateSalary() + this._gratuityPayment;
    }
}

const suresh = new developer('suresh', 1, 1000, 2000, 3000, 4000);
const mahesh = new hr('mahesh', 2, 1500, 2500, 3500, 4500);
const joy = new developer();
joy.name = 'joydip'
joy.id = 100;
joy.basicPayment = 1000;
joy.daPayment = 25000;
joy.hraPayment = 2340;
joy.incentivePayment = 1200;

//console.log(suresh.__proto__)
//console.log(mahesh.__proto__)
//type salaryFnRefType = () => number
function printSalary(salaryFnRef: () => number) {
    var salary = salaryFnRef();
    console.log(salary)
}

printSalary(suresh.calculateSalary);
printSalary(mahesh.calculateSalary);

const copyOfSuresh = Object.create(suresh);
//spread operator
const copyOfMahesh = {
    ...mahesh
}

const numbers1 = [1, 2, 3, 4];
const numbers2 = [10, 20, 30, 40];
const copyOfNumbers = [...numbers1, 100, 200, ...numbers2];

const add = (a, b, c) => (a + b + c);
const multi = (a, b) => (a * b);
const test = () => "test fn";
//rest parameter
//optional parameter with default value
type fnRefType = (a: number, b: number) => number;
const calculate = (fnRef: fnRefType, ...args: number[]) => {
    return fnRef(args[0], args[1])
};
//calculate(add, 10, 20, 30)
calculate(multi, 10, 20)
//calculate(test);