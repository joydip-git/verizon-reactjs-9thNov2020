export class employee {
    constructor(name = null, id = 0, basicpay = 0, dapay = 0, hrapay = 0) {
        this._name = name;
        this._id = id;
        this._basicPayment = basicpay;
        this._daPayment = dapay;
        this._hraPayment = hrapay;
    }


    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get basicPayment() {
        return this._basicPayment;
    }
    set basicPayment(value) {
        this._basicPayment = value;
    }
    get daPayment() {
        return this._daPayment;
    }
    set daPayment(value) {
        this._daPayment = value;
    }
    get hraPayment() {
        return this._hraPayment;
    }
    set hraPayment(value) {
        this._hraPayment = value;
    }

    calculateSalary() {
        return this._basicPayment + this._daPayment + this._hraPayment;
    }
}

export const add = (a, b) => (a + b)

// module.exports = {
//     employeeCls: employee,
//     addFn: add
// }
