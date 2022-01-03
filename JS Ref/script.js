
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


