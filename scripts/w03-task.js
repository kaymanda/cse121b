/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers () {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2;
}

function subtractNumbers () {
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiply (number1, number2) {
    return (number1 * number2);
}

function multiplyNumbers () {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide (number1, number2) {
    return (number1 / number2);
} 

function divideNumbers () {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

function getTotal() {
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    if (document.getElementById('member').checked) {
        subtotal = subtotal - subtotal * 0.2;
    }
    document.getElementById('total').textContent = subtotal.toFixed(2);
}

document.getElementById('getTotal').addEventListener('click', getTotal);


/* ARRAY METHODS - Functional Programming */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */

document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */

document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1)

/* Output Evens Only Array */

document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0)

/* Output Sum of Org. Array */

document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number)

/* Output Multiplied by 2 Array */

document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2)

/* Output Sum of Multiplied by 2 Array */

document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map((number) => number * 2).reduce((sum, number) => sum + number)


