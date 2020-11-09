function add(x, y) {
    console.log(x + y)
}

var add = (x, y) => console.log(x + y);
//2015 (ES6)

function person(fname, lname, location) {
    console.log(this)
    this.firstName = fname;
    this.lastName = lname;
    this.location = location;
    this.printInfo = () => {
        return this.firstName + ', ' + this.lastName + ', ' + this.location;
    };
}

var joydipFCObj = new person('joydip', 'mondal', 'bangalore');
console.log(joydipFCObj.printInfo())

function printInformation(printRef) {
    //window
    console.log(printRef())
    console.log(this)
}

//joydipFCObj.printInfo =  joydipFCObj.printInfo.bind(joydipFCObj);
//printInformation(joydipFCObj.printInfo.bind(joydipFCObj));
printInformation(joydipFCObj.printInfo);
