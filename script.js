let input = "";
let result = "";
let num = "";
let operator = "";
let displayCalc = document.getElementById("displayOperator");
let displayResult = document.getElementById("display");
let lastActionWasCalculation = false;

function updateDisplay(){
    displayCalc.innerText = input;
    displayResult.innerText = result;
}

function clearDisplay(){
    input = "";
    result = "";
    updateDisplay();
}

function numInput(value){

    if (lastActionWasCalculation) {
        input = "";
        lastActionWasCalculation = false; 
    }

    const lastInput = isOperator(input.charAt(input.length - 1));

    if (!lastInput || !isOperator(value)){
        num = value;
        input += value;
        result = ''; 
        updateDisplay();
    }
}


function newValue(){
    input = '';
    input += result;
    result = '';
    updateDisplay();
}

function isOperator(value){
    return value === '+' || value === '-' || value === '*' || value === '/' || value === '.';
}

function setOperator(value){
    const lastInput = isOperator(input.charAt(input.length - 1));

    if (!lastInput || !isOperator(value)){
        operator = value;
        input += value;
        updateDisplay();
    
        if (result != 0){
            newValue();
            input += value;
            updateDisplay();
        }
    }
}

function calculate(){
    if (num && operator !== ""){
        result = eval(input).toString(); 
        lastActionWasCalculation = true;
        updateDisplay();
    } 
}

function percent(){
    if (result !== ""){
        result /= 100;
        updateDisplay();
    }
}
