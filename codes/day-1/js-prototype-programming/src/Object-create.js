//2. 
var joydipObj = Object.create({});
joydipObj.firstName='Joydip'
joydipObj.lastName='Mondal'
joydipObj.location='Bangalore'
joydipObj.printInfo=function(){
    return this.firstName + ', ' + this.lastName + ', ' + this.location;
}

console.log(joydipObj.__proto__)

// var copyObj = Object.create(joydipObj);
// console.log(copyObj)