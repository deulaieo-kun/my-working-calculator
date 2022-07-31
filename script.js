let input;
let firstNumber;
let secondNumber;
let operation;
let answer;
let display = document.getElementById("display");

console.log(firstNumber, operation, secondNumber);

let allClear = document.getElementById("allClear");
allClear.addEventListener("click", clear);

function inputNumber(input) {
    if (operation === undefined) {
        if (firstNumber === undefined) {
            firstNumber = String(input);
        } else {
            firstNumber = String(firstNumber) + String(input);
        }
        updateDisplay(firstNumber);
    } else {
        if (secondNumber === undefined) {
            secondNumber = String(input);
        } else {
            secondNumber = String(secondNumber) + String(input);
        }
    updateDisplay(secondNumber);
    }
    console.log(firstNumber, operation, secondNumber);
}

function plusMinus() {
    if (operation === undefined) {
        firstNumber = Number(firstNumber);
        firstNumber = -1 * firstNumber;
        firstNumber = String(firstNumber)
        updateDisplay(firstNumber);
    } else {
        secondNumber = Number(secondNumber);
        secondNumber = -1 * secondNumber;
        secondNumber = String(secondNumber)
        updateDisplay(secondNumber);
    }
}

function percentage() {
    if (operation === undefined) {
        firstNumber = Number(firstNumber);
        firstNumber = firstNumber / 100;
        firstNumber = String(firstNumber)
        updateDisplay(firstNumber);
    } else {
        secondNumber = Number(secondNumber);
        secondNumber = secondNumber / 100;
        secondNumber = String(secondNumber)
        updateDisplay(secondNumber);
    }
}

function inputOperation(input) {
    switch (input) {
        case '+': {
            operation = '+';
            break;
        }
        case '-': {
            operation = '-';
            break;
        }
        case '×': {
            operation = '×';
            break;
        }
        case '÷': {
            operation = '÷';
            break;
        }
        default: {
            console.log("Unknown operation: " + input);
        }
    }

    console.log(firstNumber, operation, secondNumber);
}

function outputAnswer() {
    switch (operation) {
        case '+': {
            answer = Number(firstNumber) + Number(secondNumber);
            console.log(answer);
            break;
        }
        case '-': {
            answer = Number(firstNumber) - Number(secondNumber);
            console.log(answer);
            break;
        }
        case '×': {
            answer = Number(firstNumber) * Number(secondNumber);
            console.log(answer);
            break;
        } 
        case '÷': {
            answer = Number(firstNumber) / Number(secondNumber);
            console.log(answer);
            break;
        } 
    }
    
    console.log(answer);
    updateDisplay(answer);
    clear();
}

function clear() {
    if (firstNumber === undefined && secondNumber === undefined && operation === undefined) {
        updateDisplay(0);
    }
    firstNumber = undefined;
    secondNumber = undefined;
    operation = undefined;
}

function updateDisplay(number) {
    number = Number(number).toLocaleString();
    display.innerText = number;
}