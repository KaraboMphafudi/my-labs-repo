// Step 1: Declare variables
let length;
let width;

// Step 2: Create the function
function calculateArea() {

    // Step 3: Get values from user input
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    // Step 4: Calculate the area
    let area = length * width;

    // Step 5: Display the result
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}