const countOutput = document.getElementById("countOutput");
const additionBtn = document.getElementById("additionBtn");
const resetBtn = document.getElementById("resetBtn");
const subtractBtn = document.getElementById("subtractBtn");
let count = 0;

additionBtn.onclick = function() {
    count++
    countOutput.textContent = count;
}
resetBtn.onclick = function() {
    count = 0
    countOutput.textContent = count;
}
subtractBtn.onclick = function() {
    count--
    countOutput.textContent = count;
}