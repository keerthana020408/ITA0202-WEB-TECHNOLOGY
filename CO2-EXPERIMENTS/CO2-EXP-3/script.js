/* =====================================================
   EXPERIMENT 3
   INTERACTIVE SCIENTIFIC CALCULATOR
===================================================== */


/* GET DISPLAY */

const display =
    document.getElementById("display");


/* GET HISTORY */

const history =
    document.getElementById("history");


/* =====================================================
   ADD VALUE TO DISPLAY
===================================================== */

function appendValue(value) {

    if (display.value === "0") {

        display.value = value;

    }

    else {

        display.value += value;

    }

}


/* =====================================================
   CLEAR DISPLAY
===================================================== */

function clearDisplay() {

    display.value = "0";

    history.textContent =
        "Ready to calculate...";

}


/* =====================================================
   DELETE LAST CHARACTER
===================================================== */

function deleteLast() {

    if (display.value.length > 1) {

        display.value =
            display.value.slice(0, -1);

    }

    else {

        display.value = "0";

    }

}


/* =====================================================
   BASIC CALCULATION
===================================================== */

function calculate() {

    try {

        let expression =
            display.value;

        let result =
            eval(expression);

        history.textContent =
            expression + " =";

        display.value =
            result;

    }

    catch {

        display.value =
            "Error";

        history.textContent =
            "Invalid expression";

    }

}


/* =====================================================
   SQUARE
===================================================== */

function calculateSquare() {

    try {

        let number =
            parseFloat(display.value);

        let result =
            Math.pow(number, 2);

        history.textContent =
            number + "²";

        display.value =
            result;

    }

    catch {

        display.value =
            "Error";

    }

}


/* =====================================================
   SQUARE ROOT
===================================================== */

function calculateSquareRoot() {

    let number =
        parseFloat(display.value);


    if (number >= 0) {

        let result =
            Math.sqrt(number);

        history.textContent =
            "√" + number;

        display.value =
            result;

    }

    else {

        display.value =
            "Error";

        history.textContent =
            "Cannot calculate √ of negative number";

    }

}


/* =====================================================
   POWER
===================================================== */

function calculatePower() {

    let base =
        parseFloat(display.value);

    let exponent =
        prompt("Enter the power:");

    if (exponent !== null) {

        let result =
            Math.pow(base, Number(exponent));

        history.textContent =
            base + " ^ " + exponent;

        display.value =
            result;

    }

}


/* =====================================================
   LOGARITHM
===================================================== */

function calculateLog() {

    let number =
        parseFloat(display.value);


    if (number > 0) {

        let result =
            Math.log10(number);

        history.textContent =
            "log(" + number + ")";

        display.value =
            result;

    }

    else {

        display.value =
            "Error";

    }

}


/* =====================================================
   SINE
===================================================== */

function calculateSin() {

    let degree =
        parseFloat(display.value);


    let radians =
        degree * Math.PI / 180;


    let result =
        Math.sin(radians);


    history.textContent =
        "sin(" + degree + "°)";


    display.value =
        result.toFixed(8);

}


/* =====================================================
   COSINE
===================================================== */

function calculateCos() {

    let degree =
        parseFloat(display.value);


    let radians =
        degree * Math.PI / 180;


    let result =
        Math.cos(radians);


    history.textContent =
        "cos(" + degree + "°)";


    display.value =
        result.toFixed(8);

}


/* =====================================================
   TANGENT
===================================================== */

function calculateTan() {

    let degree =
        parseFloat(display.value);


    let radians =
        degree * Math.PI / 180;


    let result =
        Math.tan(radians);


    history.textContent =
        "tan(" + degree + "°)";


    display.value =
        result.toFixed(8);

}


/* =====================================================
   PI
===================================================== */

function calculatePi() {

    display.value =
        Math.PI;

    history.textContent =
        "π = Math.PI";

}


/* =====================================================
   FACTORIAL
===================================================== */

function calculateFactorial() {

    let number =
        parseInt(display.value);


    if (number < 0 || !Number.isInteger(number)) {

        display.value =
            "Error";

        history.textContent =
            "Factorial requires a positive integer";

        return;

    }


    let result = 1;


    for (
        let i = 1;
        i <= number;
        i++
    ) {

        result *= i;

    }


    history.textContent =
        number + "!";


    display.value =
        result;

}


/* =====================================================
   EXPONENTIAL
===================================================== */

function calculateExp() {

    let number =
        parseFloat(display.value);


    let result =
        Math.exp(number);


    history.textContent =
        "e^" + number;


    display.value =
        result;

}


/* =====================================================
   KEYBOARD SUPPORT
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        const key =
            event.key;


        if (
            (key >= "0" && key <= "9") ||
            key === "+" ||
            key === "-" ||
            key === "*" ||
            key === "/" ||
            key === "%" ||
            key === "."
        ) {

            appendValue(key);

        }


        else if (key === "Enter") {

            calculate();

        }


        else if (key === "Escape") {

            clearDisplay();

        }


        else if (key === "Backspace") {

            deleteLast();

        }

    }
);