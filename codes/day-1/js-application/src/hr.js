//const { employeeCls } = require('./employee')
import { employee } from './employee'

// class hr extends employeeCls {
class hr extends employee {
    constructor(name = null, id = 0, basicpay = 0, dapay = 0, hrapay = 0, gratuitypay = 0) {
        super(name, id, basicpay, dapay, hrapay);
        this._gratuityPayment = gratuitypay;
    }
    get gratuityPayment() {
        return this._gratuityPayment;
    }
    set gratuityPayment(value) {
        this._gratuityPayment = value;
    }
    calculateSalary = () => {
        return super.calculateSalary() + this._gratuityPayment;
    }
}
export default hr;
// const exporatbleObj = module.exports;
// exporatbleObj["default"] = hr;
//const sub = (a, b) => (a - b);
// module.exports["default"] = hr;
//module.exports["subFn"] = sub;
//module.exports = hr;

