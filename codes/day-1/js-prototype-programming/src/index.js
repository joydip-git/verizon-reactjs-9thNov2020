//3. constructor function
// Object.prototype.show = function () {
//     console.log('show')
// }

function person(fname, lname, location) {
    this.firstName = fname;
    this.lastName = lname;
    this.location = location;
    this.printInfo = function () {
        return this.firstName + ', ' + this.lastName + ', ' + this.location;
    };
    // this.show = function () {
    //     console.log('show')
    // }
}
// person.prototype.show = function () {
//     console.log('show')
// }
//console.log(person.prototype)
var joydipFCObj = new person('joydip', 'mondal', 'bangalore');
//console.log(joydipFCObj.__proto__)
//{__proto__:null,firstName:'joydip', lastName:'mondal',location:'bangalore', prinInfo:function(){....}}
//console.log(person.prototype===joydipFCObj.__proto__)
// joydipFCObj.show = function(){
//     console.log('show')
// }


console.log(Object.prototype.hasOwnProperty('show'));
console.log(person.prototype.hasOwnProperty('show'))
console.log(joydipFCObj.hasOwnProperty('show'))
joydipFCObj.show()
var sunilObj = new person('snuil', 'gupta', 'chennai');
sunilObj.show()