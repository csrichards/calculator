let display = document.querySelector("#output");
let numbers = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operator");

let selectionArr = [];
let firstNum = 0;
let secondNum = 0;
let selectedOp = '';
let answer = 0;

//Set selectedOp to whichever operator was clicked. Call operate() to update the display if multiple operations are made
for (const operator of operators) {
    operator.addEventListener('click', function(e) {
        display.textContent = operate(firstNum, secondNum, selectedOp);
        secondNum = display.textContent;
        selectedOp = e.target.textContent;
        selectionArr = [];
    });
}

//Call operate function when '=' is clicked
let equals = document.querySelector('#equate');
equals.addEventListener('click', function() {
    display.textContent = operate(firstNum, secondNum, selectedOp);
    selectionArr = [];
});

//Call clear function when 'C' is clicked
let clears = document.querySelector('#clear');
clears.addEventListener('click', clear);

//Call changeSign function when (+/-) is clicked
let sign = document.querySelector('.sign');
sign.addEventListener('click', changeSign);

//Add event listener to all nums and display on the screen when clicked
for (const num of numbers) {
    num.addEventListener('click', function(e){
        let selection = e.target.textContent;
        displays(selection)
        firstNum = display.textContent;
    })
}

//Performs the requested mathematical operation
function operate(firstNum, secondNum, selectedOp) {
    if (selectedOp == '+'){ 
        answer = parseFloat(firstNum) + parseFloat(secondNum);
        return answer;
    }
    else if (selectedOp == '-') {
        answer = parseFloat(secondNum) - parseFloat(firstNum);
        return answer;
    }
    else if (selectedOp == 'x') {
        answer = parseFloat(firstNum) * parseFloat(secondNum);
        return answer;
    }
    else if (selectedOp == '/') {
        if (firstNum == 0){
            answer = 'Undefined';
        }
        else {
            answer = parseFloat(secondNum) / parseFloat(firstNum);
        }
        return answer;
    }
    else {
        answer = parseFloat(firstNum);
        return answer;
    }
}

//Appends the number selection array and joins the array. Sets the display screen to the joined array
function displays (selection){
    selectionArr.push(selection);
    display.textContent = selectionArr.join('');
}

//Clears all variables related to calculation
function clear () {
    selectionArr = [];
    display.textContent = '0';
    firstNum = 0;
    secondNum = 0;
    selectedOp = '';
}

//Changes sign on the number currently displayed
function changeSign() {
    display.textContent = display.textContent * -1;
    firstNum = display.textContent;
}