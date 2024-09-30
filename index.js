// Function expression for dividing two numbers
const divide = function(a, b) {
    return a / b;
};

// Arrow function to calculate the square of a number
const square = (x) => {
    return x * x;
};

// Arrow function to add two numbers
const add = (a, b) => {
    return a + b;
};

// Exporting the functions to make them available for testing
module.exports = { divide, square, add };
