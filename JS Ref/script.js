
// initialize count to 0
// listen for clicks on the increment button
// increment the count variable when button is clicked
// change the count-el variable to reflect the new count
let countEl = document.getElementById('count-el')
let count = 0

function increment(){
    count += 1
    countEl.textContent = count
}

// countEl.addEventListener('click', function(){
//     count += 1
//     countEl.textContent = count
// })

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