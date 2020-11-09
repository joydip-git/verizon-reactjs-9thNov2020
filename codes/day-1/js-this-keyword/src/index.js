function person(fname, lname, location) {
    console.log(this)
    this.firstName = fname;
    this.lastName = lname;
    this.location = location;
    this.printInfo = function () {
        return this.firstName + ', ' + this.lastName + ', ' + this.location;
    };
}

var joydipFCObj = person('joydip', 'mondal', 'bangalore');
//window
console.log(window.firstName)
//console.log(joydipFCObj.printInfo())

// function printInformation(printFnRef) {
//     console.log(this)
//     console.log(printFnRef)
//     console.log(printFnRef());
// }

// printInformation(joydipFCObj.printInfo);