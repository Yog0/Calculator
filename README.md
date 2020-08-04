# Calculator

Works as a calculator, but order of operations is not defined. It uses event listeners to add the button IDs into the display inner HTML, then converts that string to a number to do calculations.
Calculations are handled via the operate() function, which may be superfluous.

Good outcomes - functions within functions!

Uses boolean flags to determine whether decimals are allowed, and whether the equals button is allowed to call the "operate" function.