class Person {
    constructor(name) {
        this.name = name;
    }

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name)
        }, 100)
    }

    printNameFunction() {
        setTimeout(function () {
            console.log('Function: ' + this.name)
        }, 100)
    }
}


let person = new Person('Bob');
person.printNameArrow(); // print:      Arrow: Bob
person.printNameFunction(); // print:   Function:
console.log(this.name); // print:       <nothing>
// It is because of the scope of "this"!!!
