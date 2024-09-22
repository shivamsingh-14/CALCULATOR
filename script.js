// script.js

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    let expression = display.value;

    // Replace ^ with ** for exponentiation
    expression = expression.replace(/\^/g, '**');

    // Handle square root
    expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');

    // Handle trigonometric functions
    expression = expression.replace(/sin\(/g, 'Math.sin(');
    expression = expression.replace(/cos\(/g, 'Math.cos(');
    expression = expression.replace(/tan\(/g, 'Math.tan(');

    try {
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

// Handle keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    const display = document.getElementById('display');

    if ((key >= '0' && key <= '9') || key === '+' || key === '-' || key === '*' || key === '/' || key === '.' || key === '(' || key === ')') {
        display.value += key;
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
