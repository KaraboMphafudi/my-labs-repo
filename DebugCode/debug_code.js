function performOperation(operation) {
    // Get user input
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {

        let result;

        // Check which operation to perform
        if (operation === 'multiply') {
            debugger; // Pause for debugging
            result = multiply(num1, num2);

        } else if (operation === 'add') {
            debugger; // Pause for debugging
            result = add(num1, num2);

        } else if (operation === 'divide') {
            debugger; // Pause for debugging
            result = divide(num1, num2);
        }

        displayResult(result);

    } else {
        displayResult('Please enter valid numbers');
    }
}

// Multiply function
function multiply(a, b) {
    return a * b;
}

// Add function
function add(a, b) {
    return a + b;
}

// Divide function
function divide(a, b) {
    if (b === 0) {
        return 'Cannot divide by zero!';
    }
    return a / b;
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}