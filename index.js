let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let countStr = count + " - "

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    let reset = 0;
    countEl.textContent = reset;
    count = reset;
}

function refresh(){

    saveEl.textContent =  "Previous entries: "; // reset
}