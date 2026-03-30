let mathNum1 = 0
let mathOperator = "null";
let mathNum2 = 0


function add(num1, num2) {
    let sum = num1 + num2
    return sum
}

function subtract(num1, num2) {
    let sum = num1 - num2
    return sum
}

function multiply(num1, num2) {
    let sum = num1 * num2
    return sum
}

function divide(num1, num2) {
    let sum = num1 / num2
    return sum
}

function checkOperator(operator) {
    let operatorList = ["+", "-", "x", "÷"]
    let answer = 0;
    for (i = 0; i < operatorList.length; i++) {
        if (operatorList[i] == operator) {
            answer = operatorList[i]
        }
    }
    return answer
}

function operate(num1, operator, num2) {
    let sum = 0
    mathNum1 = num1
    mathNum2 = num2

    if (checkOperator(operator) == "+") {
        sum = add(mathNum1, mathNum2)
    }else if (checkOperator(operator) == "-") {
        sum = subtract(mathNum1, mathNum2)
    }else if (checkOperator(operator) == "x") {
        sum = multiply(mathNum1, mathNum2)
    }else if (checkOperator(operator) == "÷") {

        if (mathNum2 == 0) {
            sum = "ERROR, cannot divide by 0"
        }else{
            sum = divide(mathNum1, mathNum2)
        }

    }else{
        sum = "ERROR"
    }
return sum
}

