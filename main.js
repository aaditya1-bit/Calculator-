"use strict";
const firstInput = document.getElementById("num1");
const secondInput = document.getElementById("num2");
const addButton = document.getElementById("Add");
const subButton = document.getElementById("Sub");
const mulButton = document.getElementById("Mul");
const divButton = document.getElementById("Div");
const modButton = document.getElementById("Mod");
const expButton = document.getElementById("EXP");
const result = document.getElementById("output");
function add(a, b) {
    let output = a + b;
    result.textContent = output.toString();
}
function sub(a, b) {
    let output = a - b;
    result.textContent = output.toString();
    return output;
}
function mul(a, b) {
    let output = a * b;
    result.textContent = output.toString();
}
function div(a, b) {
    let output = a / b;
    result.textContent = output.toString();
}
function mod(a, b) {
    let output = a % b;
    result.textContent = output.toString();
}
function exp(a, b) {
    let output = Math.pow(a, b);
    result.textContent = output.toString();
}
addButton.addEventListener("click", () => {
    let num1 = parseFloat(firstInput.value);
    let num2 = parseFloat(secondInput.value);
    add(num1, num2);
});
subButton.addEventListener("click", () => {
    let num1 = parseFloat(firstInput.value);
    let num2 = parseFloat(secondInput.value);
    sub(num1, num2);
});
mulButton.addEventListener("click", () => {
    let num1 = parseFloat(firstInput.value);
    let num2 = parseFloat(secondInput.value);
    mul(num1, num2);
});
divButton === null || divButton === void 0 ? void 0 : divButton.addEventListener("click", () => {
    let num1 = parseFloat(firstInput.value);
    let num2 = parseFloat(secondInput.value);
    div(num1, num2);
});
modButton.addEventListener("click", () => {
    let num1 = parseFloat(firstInput.value);
    let num2 = parseFloat(secondInput.value);
    mod(num1, num2);
});
expButton.addEventListener("click", () => {
    let num1 = parseFloat(firstInput.value);
    let num2 = parseFloat(secondInput.value);
    exp(num1, num2);
});
