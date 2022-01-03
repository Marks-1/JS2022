
// initialize count to 0
// listen for clicks on the increment button
// increment the count variable when button is clicked
// change the count-el variable to reflect the new count

// code refactoring
let count = 0
let countEl = document.getElementById('count-el')
let incrementBtn = document.getElementById('increment-btn')
let saveEl = document.getElementById('save-el')
let saveBtn = document.getElementById('save-btn')

// increment
incrementBtn.addEventListener('click', function(){
    count += 1
    countEl.textContent = count
})

// save and clear field
saveBtn.addEventListener('click', function(){
    let countStr = `${count} - `
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
})

