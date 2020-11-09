// const empModule = require('./employee')
import { employee } from './employee'
/**
 * {
 *  employeeCls:employee,
 *  addFn:add
 * }
 */

// class developer extends empModule.employeeCls {
export class developer extends employee {
    constructor(name = null, id = 0, basicpay = 0, dapay = 0, hrapay = 0, incentivepay = 0) {
        super(name, id, basicpay, dapay, hrapay);
        this._incentivePayment = incentivepay;
        this.calculateSalary = this.calculateSalary.bind(this);
    }
    get incentivePayment() {
        return this._incentivePayment;
    }
    set incentivePayment(value) {
        this._incentivePayment = value;
    }
    calculateSalary() {
        return super.calculateSalary() + this._incentivePayment;
    }
}
// module.exports = {
//     developer: developer
// }
