const x = 3;
const y = 5;

// unary operators
console.log(-x);

// maths
console.log("Addition >>> ", x + y);
console.log("Substraction >>> ", x - y);
console.log("Multiplication >>> ", x * y);
console.log("Division >>> ", x / y);
console.log("Remainder >>> ", x % y);
console.log("Division >>> ", x ** y);

// string concatenation with binary +
let s = "my" + "string";
console.log("concatenated string >>> ", s);

console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"
console.log(2 + 2 + '1' ); // "41" and not "221"
console.log('1' + 2 + 2); // "122" and not "14"
console.log( 6 - '2' ); // 4, converts '2' to a number
console.log( '6' / '2' ); // 3, converts both operands to numbers

// Numeric convertions unary+
// No effect on numbers
let xOne = 1;
console.log( +xOne ); // 1

let yOne = -2;
console.log( +yOne ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0

let apples = "2";
let oranges = "3";

console.log( apples + oranges ); // "23", the binary plus concatenates strings
// both values converted to numbers before the binary plus
console.log( +apples + +oranges );

// assignment
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0



