// Task 1: Declare variables for numeric values
let num1;
let num2;

// Task 2: Assign sample numeric values
num1 = 10;
num2 = 5;

// Task 3: Perform arithmetic operations

// Addition
let additionResult = num1 + num2;
console.log("Addition: " + num1 + " + " + num2 + " = " + additionResult);

// Subtraction
let subtractionResult = num1 - num2;
console.log("Subtraction: " + num1 + " - " + num2 + " = " + subtractionResult);

// Multiplication
let multiplicationResult = num1 * num2;
console.log("Multiplication: " + num1 + " * " + num2 + " = " + multiplicationResult);

// Division
let divisionResult = num1 / num2;
console.log("Division: " + num1 + " / " + num2 + " = " + divisionResult);

// Modulus
let modulusResult = num1 % num2;
console.log("Modulus: " + num1 + " % " + num2 + " = " + modulusResult);

//Task 4
// Initial values
let num3 = 10;
let num4 = 5;

console.log("Initial Values:");
console.log("num3: " + num3);
console.log("num4: " + num4);

// Addition Assignment
num3 += num4;  // Equivalent to num3 = num3 + num4
console.log("After Addition Assignment (num3 += num4): num3 = " + num3);

// Reset num1 for further operations
num3 = 10;

// Subtraction Assignment
num3 -= num4;  // Equivalent to num3 = num3 - num4
console.log("After Subtraction Assignment (num3 -= num4): num3 = " + num3);

// Reset num1 for further operations
num3 = 10;

// Multiplication Assignment
num3 *= num4;  // Equivalent to num3 = num3 * num4
console.log("After Multiplication Assignment (num3 *= num4): num3 = " + num3);

// Reset num1 for further operations
num3 = 10;

// Division Assignment
num3 /= num4;  // Equivalent to num3 = num3 / num4
console.log("After Division Assignment (num3 /= num4): num3 = " + num3);

// Reset num3 for further operations
num3 = 10;

// Modulus Assignment
num3 %= num4;  // Equivalent to num3 = num3 % num4
console.log("After Modulus Assignment (num3 %= num4): num3 = " + num3);

//Task 5
// Initial values
let num5 = 10;
let num6 = 5;

// Comparison Operators

// Equal (==)
let isEqual = num5 == num6;
console.log(num5 + " == " + num6 + " : " + isEqual); // false

// Not Equal (!=)
let isNotEqual = num5 != num6;
console.log(num5 + " != " + num6 + " : " + isNotEqual); // true

// Greater Than (>)
let isGreaterThan = num5 > num6;
console.log(num5 + " > " + num6 + " : " + isGreaterThan); // true

// Task 6
// Initial values
let num7 = 10;
let num8 = 5;
let num9 = 15;

// Logical Operators

// AND (&&)
let andResult = (num7 > num8) && (num7 < num9);
console.log(andResult); // true

// OR (||)
let orResult = (num7 > num9) || (num7 < num8);
console.log(orResult); // false
