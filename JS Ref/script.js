
// initialize count to 0
// listen for clicks on the increment button
// increment the count variable when button is clicked
// change the count-el variable to reflect the new count
let countEl = document.getElementById('count-el')
let count = 0
function increment(){
    count = count + 1
    countEl.innerText = count
}

// 1. Create a function, save(), which logs out the count when it's called
function save(){
    count = count
    // console.log(count);
}

