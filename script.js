const display = document.querySelector('.display');
let firstNumber = '';
let operator = '';
let secondNumber = '';
let result = '';

// Basic Math Operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        display.textContent = 'Error: Cannot divide by zero!';
        return;
    }
    return a / b;
}

// Operate function to handle calculations
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        default:
            result = 'Invalid Operator';
    }
    display.textContent = result;
}

// Event Listeners for Buttons
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
        if (!operator) {
            firstNumber += button.textContent;
        } else {
            secondNumber += button.textContent;
        }
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.textContent;
        display.textContent += operator;
    });
});

clearButton.addEventListener('click', () => {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    result = '';
    display.textContent = '';
});

equalsButton.addEventListener('click', () => {
    if (operator && firstNumber && secondNumber) {
        operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
        firstNumber = result; // Update firstNumber for chained operations
        operator = '';
        secondNumber = '';
    }
});
