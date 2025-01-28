const userFirstNumber = document.getElementById("first-number");
const userOperator = document.getElementById("operator");
const userSecondNumber = document.getElementById("second-number");
const calculateButton = document.getElementById("calculate-button");

const ADD = '+';
const SUB = '-';
const MUL = '*';
const DIV = '/';


const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");
const mulButton = document.getElementById("mul");
const divButton = document.getElementById("div");


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

