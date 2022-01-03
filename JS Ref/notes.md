Functions:
    Functions declaration
Example 1:
function hisAge(ages){
    console.log(ages);
}
hisAge(23)

Example 2:

// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

function myNumber(){
    console.log(42)
}
myNumber()

Example 3:

function square(number){
    return number * number
}
const squared = square(90)
console.log(squared);

Example 4:

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


    Function Expression:
Example 1:

const herAge = function(aged){
    return aged * 2
}
const sheAges = herAge(23)
console.log(sheAges);


    OBJECTS:

Example 1:

let mySymbol = symbol() //used to hide some information

const person = {
    firstname: 'jamein',
    age: 23,
    partTime: false,
    [mySymbol]: 'secretinfo',
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
    showInfo: function(){
        console.log(this.age)
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

//working with strings

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById('welcome-el')
console.log(welcomeEl);

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
let hisName = 'Marrk'
let greeting = 'Welcome back'

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = `${greeting} ${hisName},
I suppose you're well this morning!
`
welcomeEl.innerText += '👋'



// Function declaration
function showMessage(){

}
showMessage()

// Function expression
const logMessage = function loggedMessage(message){
    console.log(message)
}
logMessage('Check Mails');

// Return
// function getSecretCode(value){
//     let code = 42 * value
//     return code
// }
// console.log(getSecretCode(33))

// function salesOff(percentage){
//     document.getElementById('percent-off').textContent = `${percentage}% OFF`
//   }
//   salesOff(38)

//   let mySymbol = Symbol()
//   const car = {
//       [mySymbol]: 'secretinfo'
//   }
//   console.log(car.mySymbol)

const btnTo = document.getElementById('see-review')
btnTo.addEventListener('click', function(){
    const review = document.getElementById('review')
    if(review.classList.contains('d-none')){
        review.classList.remove('d-none')
        btnTo.textContent = 'CLOSE REVIEW'
    }else{
        review.classList.add('d-none')
        btnTo.textContent = 'SEE REVIEW'
    }
})


let countEl = document.getElementById('count-el')
let count = 0

function increment(){
    count += 1
    countEl.textContent = count
}
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById('save-el')
console.log(saveEl);

// 1. Create a function, save(), which logs out the count when it's called
function save(){
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let saved = `${count} - `
// 3. Render the variable in the saveEl using innerText
    saveEl.textContent += saved

    countEl.textContent = 0
    count = 0
}