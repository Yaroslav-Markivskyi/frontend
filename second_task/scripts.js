const userFirstNumber = document.getElementById("first-number");
const userOperator = document.getElementById("operator");
const userSecondNumber = document.getElementById("second-number");
const calculateButton = document.getElementById("calculate-button");


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
        case '+':
            return add;
        case '-':
            return sub;
        case '*':
            return mul;
        case '-':
            return div;
        default:
            throw Error("Undefine operator");
    }
}


function parseNumber(value) {
    const number = Number(value);
    if (isNaN(number)) {
        throw Error("Input value is not  a Number type!")
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

function calculate (firstNum, operator, secondNum) {
    try{
        const parsedFirstNum = parseNumber(firstNum);
        const parsedOperator = parseOperator(operator);
        const parsedSecondNum = parseNumber(secondNum);
        const arithmeticAction = defineAction(parsedOperator);
        const result =  arithmeticAction(parsedFirstNum, parsedSecondNum);
        return result;
    } catch (error) {
        return error;
    }
}

function outputAlert() {
    const result = calculate(
        userFirstNumber.value, 
        userOperator.value, 
        userSecondNumber.value);
    alert(result);
}

calculateButton.addEventListener('click', event => {
    event.preventDefault();
    outputAlert();
})
