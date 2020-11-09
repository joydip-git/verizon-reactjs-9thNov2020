//create objects in JS
//1. Object literal syntax
var joydip = {
    //value properties
    firstName: 'Joydip',
    lastName: 'Mondal',
    location: 'Bangalore',

    //functional property
    printInfo: function () {
        return this.firstName + ', ' + this.lastName + ', ' + this.location;
    }
}

console.log(joydip.firstName);
// console.log(joydip['location'])
joydip.profession = 'Freelance IT consultant'
for (var propName in joydip) {
    console.log(propName + ': ' + joydip[propName])
}

console.log(joydip.printInfo())

console.log(joydip.__proto__)