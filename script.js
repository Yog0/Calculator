function add(a, b) {
    return (a+b);
}

function subtract(a, b) {
    return (a-b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    if (b == 0) {
        return("Don't do that");
    }
    else {return (a/b);}
    
}

let result = 0;
function operate(op, a, b) {
    if (op == '+') {
        result = add(a,b);
    }
    else if (op == '-') {
        result = subtract(a,b);
    }
    else if (op == '*') {
        result = multiply(a,b);
    }
    else if (op == '/') {
        result = divide(a,b);
    }
    display.innerHTML = '';
    let eq = true;
    console.log(eq);
    decimal = false;
    return result;
}
let displayVar1 = 0, displayVar2 = 0, opToUse = '';
const display = document.getElementById("display");

function opToDisp(e) {
    if (displayVar1 == 0) {
        displayVar1 = Number(display.innerHTML);
        console.log("var1: ", displayVar1);
    }
    
    if (displayVar1 !== 0 && displayVar2 !== 0 && result == 0) {
        display.innerHTML = '';
        display.innerHTML += e.srcElement.id;
        opToUse = e.srcElement.id;
        displayVar1 = Number(operate(opToUse, displayVar1, displayVar2));
        console.log("new var1: ", displayVar1);
        display.innerHTML = '';
        display.innerHTML += e.srcElement.id;
        result = 0;
    }
    else {
        display.innerHTML = '';
        display.innerHTML += e.srcElement.id;
        opToUse = e.srcElement.id;
    }
}

// let result = operate(opToUse, displayVar1, displayVar2);
// display.innerHTML = result;
let eq = true;
function numToDisp(e) {
    if (eq) {
        display.innerHTML = '';
        displayVar1 = 0, displayVar2 = 0, opToUse = '';
        eq = false;
        decimal = false;
    }
    if (display.innerHTML == '0' || display.innerHTML == '+' || display.innerHTML == '-' || display.innerHTML == '*' || display.innerHTML == '/') {
        display.innerHTML = '';
        display.innerHTML += e.srcElement.id;
        decimal = false
    }
    else { 
        display.innerHTML += e.srcElement.id;
        decimal = false
    }
    if (displayVar1 == 0) {
        //displayVar1 = Number(display.innerHTML);
    }
    else {
        displayVar2 = Number(display.innerHTML);
        console.log("var 2: ", displayVar2);
        decimal = false
    }
}

const numbers = Array.from(document.querySelectorAll('.num'));
numbers.forEach(num => num.addEventListener('click', numToDisp));

let decimal = false;

const dec = document.getElementById('dec');
dec.addEventListener('click', decFun => {
    if (!decimal) {
        display.innerHTML += ".";
        decimal = true;
    }
});
const ops = Array.from(document.querySelectorAll('.op'));
ops.forEach(op => op.addEventListener('click', opToDisp));

const equals = document.getElementById('equals');
equals.addEventListener('click', myFun => {
    display.innerHTML = operate(opToUse, displayVar1, displayVar2);
    displayVar1 = result, displayVar2 = 0, opToUse = '';
    console.log("new var1: ", displayVar1);
    eq = true;

});

const clear = document.getElementById('clear');
clear.addEventListener('click', clearFun => {
    display.innerHTML = 0;
    displayVar1 = 0, displayVar2 = 0, opToUse = '', result = 0;
});