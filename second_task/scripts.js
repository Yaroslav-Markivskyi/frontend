const userFirstNumber = document.getElementById("first-number");
const userOperator = document.getElementById("operator");
const userSecondNumber = document.getElementById("second-number");
const calculateButton = document.getElementById("calculate-button");

let activeInput = null;

const formData = {};

const ADD = '+';
const SUB = '-';
const MUL = '*';
const DIV = '/';

const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");
const mulButton = document.getElementById("mul");
const divButton = document.getElementById("div");

const oneButton = document.getElementById("oneButton");
const twoButton = document.getElementById("twoButton");
const threeButton = document.getElementById("threeButton");
const fourButton = document.getElementById("fourButton");
const fiveButton = document.getElementById("fiveButton");
const sixButton = document.getElementById("sixButton");
const sevenButton = document.getElementById("sevenButton");
const eightButton = document.getElementById("eightButton");
const nineButton = document.getElementById("nineButton");
const zeroButton = document.getElementById("zeroButton");

const OPERATORS = "+-*/"


function add (firstNum, secondNum) {
    return firstNum + secondNum;
}

function sub (firstNum, secondNum) {
    return firstNum - secondNum;
}

function mul (firstNum, secondNum) {
    return firstNum * secondNum;
}

function div (firstNum, secondNum) {
    if (secondNum === 0) {
        throw Error("Division by zero is not allowed");
    }
    return firstNum / secondNum;
}

function defineAction(operator) {
    switch(operator) {
        case ADD:
            return add;
        case SUB:
            return sub;
        case MUL:
            return mul;
        case DIV:
            return div;
        default:
            throw Error("Undefine operator");
    }
}


function parseNumber(value) {
    const number = Number(value);
    if (isNaN(number)) {
        throw Error("Input number is not  a Number type!")
    }
    return number;
}

function parseOperator (value) {
    const operator = String(value);
    if (operator.length > 1){
        throw Error("Input operator is too long for an arithmetic operator!");
    }
    if(!OPERATORS.includes(operator)) {
        throw Error("Input operator is not an arithmetic operator!")
    }
    return operator;
}

function calculate (firstNum, arithmeticAction, secondNum) {
    try{
        const parsedFirstNum = parseNumber(firstNum);
        const parsedSecondNum = parseNumber(secondNum);
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
        const parsedOperator = parseOperator(userOperator.value);
        const arithmeticAction = defineAction(parsedOperator);
        const result = calculate(
            userFirstNumber.value, 
            arithmeticAction, 
            userSecondNumber.value);
        return result;
    } catch (error) {
        return error;
    }
}

calculateButton.addEventListener('click', event => {
    event.preventDefault();
    const result = calculateButtonWrapper();
    outputAlert(result);
});

addButton.addEventListener('click', event => {
    event.preventDefault();
    userOperator.value = ADD;
});

subButton.addEventListener('click', event => {
    event.preventDefault();
    userOperator.value = SUB;
});

mulButton.addEventListener('click', event => {
    event.preventDefault();
    userOperator.value = MUL;
});

divButton.addEventListener('click', event => {
    event.preventDefault();
    userOperator.value = DIV;
});


function insertValue(value) {
    if (activeInput) {
        activeInput.value += value;
    }
}


oneButton.addEventListener('click', event => {
    event.preventDefault();
    insertValue(1);
});

twoButton.addEventListener('click', event => {
    event.preventDefault();
    insertValue(2);
});

threeButton.addEventListener('click', event => {
    event.preventDefault();
    insertValue(3);
});

fourButton.addEventListener('click', event => {
    event.preventDefault();
    insertValue(4);
});


fiveButton.addEventListener('click', event => {
    event.preventDefault();
    insertValue(5);
});

sixButton.addEventListener('click', event => {
    event.preventDefault();
    insertValue(6);
});

sevenButton.addEventListener('click', event => {
    event.preventDefault();
    insertValue(7);
});

eightButton.addEventListener('click', event => {
    event.preventDefault();
    insertValue(8);
});

nineButton.addEventListener('click', event => {
    event.preventDefault();
    insertValue(9);
});

zeroButton.addEventListener('click', event => {
    event.preventDefault();
    insertValue(0);
});

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("focus", () => {
        activeInput = input;
    });
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