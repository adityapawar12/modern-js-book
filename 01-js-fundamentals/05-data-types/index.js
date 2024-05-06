// number
const num = 123;

console.log( 1 / 0 ); // Infinity

console.log( "not a number" / 2 ); // NaN, such division is erroneous

// bigint
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// strings
const str = "Hello";
const str2 = 'Single quotes are ok too';
const phrase = `can embed another ${str}`;

// boolean
const nameFieldChecked = true; // yes, name field is checked
const ageFieldChecked = false; // no, age field is not checked

// null
const age = null;

// undefined
let ageNew;
console.log(ageNew); // shows "undefined"

// object
const user = { name: "Aditya" };

// typeof
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
