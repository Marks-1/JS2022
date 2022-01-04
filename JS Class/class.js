class User {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }
}

const person = new User('Mark', 123)
person.greet()

class Car {
    constructor(year, name){
        this.year = year
        this.name = name
    }
    get age(){
        return this.calcAge()
    }
    calcAge(){
        let date = new Date()
        let Yr = date.getFullYear()
        return Yr - this.year
    }
}
// instantiate objects
const car1 = new Car(1927, 'Ford')
const car2 = new Car(2002, 'Bolt')

const aged = car2.calcAge()
console.log(aged);
console.log(car1.age)

let demoCar = document.getElementById('demo')
demoCar.textContent = `${car2.name} was built in the year ${car2.year}, and is aged ${car2.age} years`
