const userFirstNumber = document.getElementById("first-number");
const userOperator = document.getElementById("operator");
const userSecondNumber = document.getElementById("second-number");

const operatorButtons = document.querySelectorAll('.button-operators button');
const numberButtons = document.querySelectorAll('.button-numbers button');

const calculateButton = document.getElementById("calculate-button");

let activeInput = null;

const formData = {};

const OPERATORS = "+-*/"


function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function sub(firstNum, secondNum) {
    return firstNum - secondNum;
}

function mul(firstNum, secondNum) {
    return firstNum * secondNum;
}

function div(firstNum, secondNum) {
    if (secondNum === 0) {
        throw Error("Division by zero is not allowed");
    }
    return firstNum / secondNum;
}

function defineAction(operator) {
    switch(operator) {
        case '+':
            return add;
        case '-':
            return sub;
        case '*':
            return mul;
        case '/':
            return div;
        default:
            throw Error("Undefined operator");
    }
}

function parseNumber(value) {
    const number = Number(value);
    if (isNaN(number)) {
        throw Error("Input number is not  a Number type!")
    }
    return number;
}

function parseOperator(value) {
    const operator = String(value);
    if (operator.length > 1){
        throw Error("Input operator is too long for an arithmetic operator!");
    }
    if(!OPERATORS.includes(operator)) {
        throw Error("Input operator is not an arithmetic operator!")
    }
    return operator;
}

function calculate(firstNum, operator, secondNum) {
    try{
        const parsedFirstNum = parseNumber(firstNum);
        const parsedOperator = parseOperator(operator);
        const parsedSecondNum = parseNumber(secondNum);
        const arithmeticAction = defineAction(parsedOperator);
        const result =  arithmeticAction(parsedFirstNum, parsedSecondNum);
        return result;
    } catch (error) {
        throw Error(error);
    }
}

function outputAlert(message) {
    alert(message);
}

function calculateButtonWrapper() {
    try {
        const result = calculate(
            userFirstNumber.value, 
            userOperator.value, 
            userSecondNumber.value);
        return result;
    } catch (error) {
        return error;
    }
}

function insertNumberValue(value) {
    if (activeInput) {
        activeInput.value += value;
    }
}

function insertOperatorValue(value) {
    userOperator.value = value;
}

function eventListenerButton(buttons, action) {
    for (const button of buttons) {
        const value = button.getAttribute("data-value");    
        button.addEventListener('click', event => {
            event.preventDefault();
            action(value);
        });
    }    
}

eventListenerButton(operatorButtons, insertOperatorValue);
eventListenerButton(numberButtons, insertNumberValue);


for (const input of [userFirstNumber, userSecondNumber]) {
    input.addEventListener("focus", () => {
        activeInput = input;
    });
}

calculateButton.addEventListener('click', event => {
    event.preventDefault();
    const result = calculateButtonWrapper();
    outputAlert(result);
});

function saveData(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem("formData", JSON.stringify(formData));
}

window.addEventListener("load", () => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
        Object.assign(formData, savedData);
        document.querySelectorAll("input").forEach(input => {
            if (formData[input.name]) {
                input.value = formData[input.name];
            }
            input.addEventListener("blur", saveData);
        });
    } else {
        document.querySelectorAll("input").forEach(input => {
            input.addEventListener("blur", saveData);
        });
    }
});