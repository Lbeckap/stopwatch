console.log('1', Boolean("true"), typeof Boolean("true"));
console.log('2', Boolean("TRUE"), typeof Boolean("TRUE"));
console.log('3', Boolean(0), typeof Boolean(0));
console.log('4', Boolean(1), typeof Boolean(1));
console.log('5 no whitespace', Boolean(''), typeof Boolean(''));
console.log('6', Boolean('LaunchCode'), typeof Boolean('LaunchCode'));
console.log('7 whitespace', Boolean(' '), typeof Boolean(' '));


console.log(5 == 5);
console.log(5 == 6);

console.log(true == "true");

/*Boolean converts a string to 'true' whenever a string is non-empty 
*/

// Strict Equality  using === compares two operands without converting their data types 

// ----------------- Logical Operators---------------
/* + is the string operator
   += compound assignment operators
   -= compound assignment operators
   < > ===  boolean operators return only true and false

   compound boolean expressions is && and || 
*/
console.log('Logical Operators');
console.log(7 > 5 && 5 > 3);
console.log(7 > 5 && 2 > 3);
console.log(2 > 3 && 'dog' === 'cat');

// NOT operator ! , reverses its boolean value (sometimes called a bang)
console.log('!true', !true);
console.log('!false', !false);

//Operator Precedence are rules that dictate the order operators are applied. ! is always applied first.
// exponention ** second
// * / % third
// + - fourth
// < > fifth
// === sixth
// && seventh
// || eigth



// ------------------ Conditionals-----------------------


// ---------------- Nested Conditionals------------------


// --------------- Exercises: Booleans and Conditionals---------


// ---------------- Studio: Shuttle Launch------------------