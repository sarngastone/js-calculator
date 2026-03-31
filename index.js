let mathNum1 = 0
let mathOperator = ".";
let mathNum2 = 0

const mathDisplay = document.querySelector("#display");
mathDisplay.textContent = mathNum1 + mathOperator

const button1 = document.querySelector("#one");
const button2 = document.querySelector("#two");
const button3 = document.querySelector("#three");
const button4 = document.querySelector("#four");
const button5 = document.querySelector("#five");
const button6 = document.querySelector("#six");
const button7 = document.querySelector("#seven");
const button8 = document.querySelector("#eight");
const button9 = document.querySelector("#nine");
const button0 = document.querySelector("#zero");

const buttonPlus = document.querySelector("#addbutton");
const buttonMinus = document.querySelector("#subtractbutton");
const buttonMultiply = document.querySelector("#multiplybutton");
const buttonDivide = document.querySelector("#dividebutton");
const buttonEquals = document.querySelector("#equalsbutton");
const buttonClear = document.querySelector("#clearbutton");

button1.addEventListener("click", () => {
  if (mathOperator == ".") {
    pushNumber1(1)
  }else{
    pushNumber2(1)
  }
});

button2.addEventListener("click", () => {
  if (mathOperator == ".") {
    pushNumber1(2)
  }else{
    pushNumber2(2)
  }
});

button3.addEventListener("click", () => {
  if (mathOperator == ".") {
    pushNumber1(3)
  }else{
    pushNumber2(3)
  }
});

button4.addEventListener("click", () => {
  if (mathOperator == ".") {
    pushNumber1(4)
  }else{
    pushNumber2(4)
  }
});

button5.addEventListener("click", () => {
  if (mathOperator == ".") {
    pushNumber1(5)
  }else{
    pushNumber2(5)
  }
});

button6.addEventListener("click", () => {
  if (mathOperator == ".") {
    pushNumber1(6)
  }else{
    pushNumber2(6)
  }
});

button7.addEventListener("click", () => {
  if (mathOperator == ".") {
    pushNumber1(7)
  }else{
    pushNumber2(7)
  }
});

button8.addEventListener("click", () => {
  if (mathOperator == ".") {
    pushNumber1(8)
  }else{
    pushNumber2(8)
  }
});

button9.addEventListener("click", () => {
  if (mathOperator == ".") {
    pushNumber1(9)
  }else{
    pushNumber2(9)
  }
});

button0.addEventListener("click", () => {
  if (mathOperator == ".") {
    pushNumber1(0)
  }else{
    pushNumber2(0)
  }
});

buttonPlus.addEventListener("click", () => {
  if (mathNum1 != 0) {
    pushOperator(" + ")
  }
});

buttonMinus.addEventListener("click", () => {
  if (mathNum1 != 0) {
    pushOperator(" - ")
  }
});

buttonMultiply.addEventListener("click", () => {
  if (mathNum1 != 0) {
    pushOperator(" x ")
  }
});

buttonDivide.addEventListener("click", () => {
  if (mathNum1 != 0) {
    pushOperator(" ÷ ")
  }
});

buttonEquals.addEventListener("click", () => {
  if (mathNum1 != 0 && mathOperator != "." && mathNum2 != 0) {
    operate(mathNum1, mathOperator, mathNum2)
  }
});

buttonClear.addEventListener("click", () => {
    clear()
});


function clear() {
    mathNum1 = 0
    mathOperator = "."
    mathNum2 = 0
    mathDisplay.textContent = mathNum1 + mathOperator
}

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

function pushNumber1(number) {
    if (mathNum1[0] != 0 && number != 0) {
        mathNum1 += number
        mathDisplay.textContent = mathNum1 + mathOperator + mathNum2
    }
}

function pushOperator(operator) {
    mathOperator = operator
    mathDisplay.textContent = mathNum1 + mathOperator + mathNum2
}

function pushNumber2(number) {
    mathNum2 += number
    mathDisplay.textContent = mathNum1 + mathOperator + mathNum2
}

function operate(num1, operator, num2) {
    function checkOperator(operator) {
        let operatorList = [" + ", " - ", " x ", " ÷ "]
        let answer = 0;
        for (i = 0; i < operatorList.length; i++) {
            if (operatorList[i] == operator) {
                answer = operatorList[i]
            }
        }
        return answer
    }

    let equals = 0

    if (checkOperator(operator) == " + ") {
        equals = add(num1, num2)
    }else if (checkOperator(operator) == " - ") {
        equals = subtract(num1, num2)
    }else if (checkOperator(operator) == " x ") {
        equals = multiply(num1, num2)
    }else if (checkOperator(operator) == " ÷ ") {

        if (num2 == 0) {
            equals = "ERROR, cannot divide by 0"
        }else{
            equals = divide(num1, num2)
        }

    }else{
        equals = "ERROR, math operator is incorrect"
    }
console.log(equals)
mathDisplay.textContent = mathNum1 + mathOperator + mathNum2 + " = " + equals
}


