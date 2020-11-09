// const { addFn } = require('./employee')
// const { developer } = require('./developer')
// const hr = require('./hr')
// const print = require('./printSalary')
import { add as addFn } from './employee'
import { developer } from './developer'
import hr from './hr'
import print from './printSalary'
//console.log(module)

const suresh = new developer('suresh', 1, 1000, 2000, 3000, 4000);
const mahesh = new hr('mahesh', 2, 1500, 2500, 3500, 4500);

print(suresh.calculateSalary);
print(mahesh.calculateSalary);
console.log(addFn(10, 20))

// const joy = new developer();
// joy.name = 'joydip'
// joy.id = 100;
// joy.basicPayment = 1000;
// joy.daPayment = 25000;
// joy.hraPayment = 2340;
// joy.incentivePayment = 1200;

// var anil = {
//     name: 'anil',
//     id: 1,
//     age: 20
// }
//object destructuring
//const { name } = anil;
// const name = anil.name;
// const id = anil.id;
// const age = anil.age;


