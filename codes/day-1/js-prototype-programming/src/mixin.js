//mix-in (Mixin)
var hi = {
    sayHi: function () {
        console.log('Hi...')
    }
}

var bye = {
    sayBye: function () {
        console.log('Bye...')
    }
}

function person(name) {
    this.name = name;
    this.show = function () {
        return this.name;
    }
}

var anil = new person('anil');
Object.assign(person.prototype, hi, bye);
console.log(anil)
anil.sayHi()
anil.sayBye()