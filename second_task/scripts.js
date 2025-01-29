const userFirstNumber = document.getElementById("first-number");
const userOperator = document.getElementById("operator");
const userSecondNumber = document.getElementById("second-number");
const calculateButton = document.getElementById("calculate-button");

let activeInput = null;

const formData = {};

const operators = {
    ADD: '+',
    SUB: '-',
    MUL: '*',
    DIV: '/'
};

const operatorButtons = [
    {id: "addButton", value: '+'},
    {id: "subButton", value: '-'},
    {id: "mulButton", value: '*'},
    {id: "divButton", value: '/'},
]

const numberButtons = [
    { id: "oneButton", value: 1 },
    { id: "twoButton", value: 2 },
    { id: "threeButton", value: 3 },
    { id: "fourButton", value: 4 },
    { id: "fiveButton", value: 5 },
    { id: "sixButton", value: 6 },
    { id: "sevenButton", value: 7 },
    { id: "eightButton", value: 8 },
    { id: "nineButton", value: 9 },
    { id: "zeroButton", value: 0 }
];

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
        case operators.ADD:
            return add;
        case operators.SUB:
            return sub;
        case operators.MUL:
            return mul;
        case operators.DIV:
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

function insertValue(value) {
    if (activeInput) {
        activeInput.value += value;
    }
}

for (let i = 0; i < operatorButtons.length; i++){
    const btn = document.getElementById(operatorButtons[i].id);
    btn.addEventListener('click', event => {
        event.preventDefault();
        userOperator.value = operatorButtons[i].value;
    }) ;
}


for (let i = 0; i < numberButtons.length; i++){
    const btn = document.getElementById(numberButtons[i].id);
    btn.addEventListener('click', event => {
        event.preventDefault();
        insertValue(numberButtons[i].value);
    }) ;
}

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