/**function declaration */
function hisAge(ages){
    console.log(ages);
}
hisAge(23)


// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function
function myNumber(){
    console.log(42)
}
myNumber()


function square(number){
    return number * number
}
const squared = square(90)
console.log(squared);

/**function expression */
const herAge = function(aged){
    return aged * 2
}
const sheAges = herAge(23)
console.log(sheAges);


let lap1 = 23
let lap2 = 45
let lap3 = 10

function sumLaps(){
    let totalLaps = lap1 + lap2 + lap3
    console.log(totalLaps);
}
sumLaps()

function fruitProcessor(apples, oranges){
    const juice = `Fruit juice with ${apples} apples and ${oranges} oranges`
    return juice
}
const appleOrangeJuice = fruitProcessor(34,2)
console.log(appleOrangeJuice);

// objects
const person = {
    firstname: 'jamein',
    age: 23,
    subjects: {
        eng: 56,
        math: 90
    },
    greet: function(){
        console.log(`Hello ${this.firstname}`)
    },
    totalMarks: function(){
        console.log(`You managed ${this.subjects.eng + this.subjects.math} marks`)
    }
}
console.log(person.age)
person.greet()
person.totalMarks()


const tracks = {}
// adding a property
tracks.gospel = 'Jireh'
// adding a method 
tracks.playedMost = function(){
    console.log(`${this.gospel} is the most played track`)
}
console.log(tracks)
tracks.playedMost()