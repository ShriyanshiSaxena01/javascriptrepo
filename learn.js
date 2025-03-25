// console.log("my name is shriyanshi");

// name="tony strk";
// console.log("name");
// console.log(name);
// x= null;
// y=undefined;
// console.log(x);
// console.log(y);


//JavaScript Variables
// In JavaScript, variables are used to store data values. There are three main ways to declare variables:

// var (Old way, avoid using in modern code)
// let (Preferred for variables that can change)
// const (Preferred for variables that should not change)
// Rules for JavaScript Variables
// Variable names must start with a letter, $, or _.
// ✅ let name = "Shriyanshi";
// ✅ let $price = 100;
// ✅ let _count = 5;

// Variable names are case-sensitive.
// ✅ let age = 21;
// ❌ let Age = 30; (Both are treated as different variables)

// Variable names cannot be JavaScript reserved keywords.
// ❌ let var = 5;
// ❌ let const = 10;

// Use camelCase for naming conventions (best practice).
// ✅ let userName = "Shriyanshi";

// Examples from W3Schools
// 1. Using var (Old Method)
// javascript

// var x = 10;
// var y = 20;
// var total = x + y;
// console.log(total); // Output: 30
// 2. Using let (Recommended for changeable values)
// javascript

// let score = 50;
// score = 75; // Value updated
// console.log(score); // Output: 75
// 3. Using const (Recommended for constant values)
// javascript

// const PI = 3.14;
// console.log(PI); // Output: 3.14

// // PI = 3.15;  ❌ Error: Assignment to constant variable
// Key Points to Remember
// ✅ Use let when the value may change.
// ✅ Use const when the value should stay the same.
// ✅ Avoid using var in modern JavaScript development.
// ✅ Follow proper naming conventions for better code readability.





// JavaScript Data Types
// JavaScript has two main types of data types:
// •	Primitive Data Types (Immutable, stored by value)
// •	Non-Primitive (Reference) Data Types (Stored by reference)
// ________________________________________
// 1. Primitive Data Types
// Primitive types are simple values stored directly in memory.
// Data Type	Description	Example
// String	Text values	"Hello" , 'World'
// Number	Numeric values	100, 3.14, -20
// Boolean	True or False values	true, false
// Undefined	Variable declared but not assigned	let x;
// Null	Empty or non-existent value	let y = null;
// Symbol	Unique identifiers (ES6 feature)	let id = Symbol('id')
// BigInt	For very large numbers (ES11 feature)	let bigNum = 123n
// ________________________________________
// String
// •	Text values enclosed in single (') or double (") quotes.
// •	Backticks (`) are used for template literals (for dynamic content).
// Example:
// javascript
// let name = "Shriyanshi";  
// let greeting = `Hello, ${name}!`;  
// console.log(greeting); // Output: Hello, Shriyanshi!
// ________________________________________
// Number
// •	Includes both integers and floating-point values.
// •	Special values: Infinity, -Infinity, and NaN (Not a Number).
// Example:
// javascript
// let age = 21;  
// let price = 99.99;  
// console.log(age + price); // Output: 120.99
// ________________________________________
// Boolean
// •	Logical values that are either true or false.
// Example:
// javascript
// let isLoggedIn = true;  
// console.log(isLoggedIn); // Output: true
// ________________________________________
// Undefined
// •	A variable declared but not assigned a value is undefined.
// Example:
// javascript
// let x;
// console.log(x); // Output: undefined
// ________________________________________
// Null
// •	Represents intentional absence of any object value.
// Example:
// javascript
// let value = null;  
// console.log(value); // Output: null
// ________________________________________
// Symbol (ES6 Feature)
// •	Used to create unique identifiers.
// Example:
// javascript
// let id1 = Symbol('id');  
// let id2 = Symbol('id');  
// console.log(id1 === id2); // Output: false
// ________________________________________
// BigInt (ES11 Feature)
// •	Used to handle large integers beyond Number limits.
// •	Use n at the end to define a BigInt.
// Example:
// javascript
// let bigNumber = 1234567890123456789012345678901234567890n;  
// console.log(bigNumber);  
// ________________________________________
// 2. Non-Primitive (Reference) Data Types
// These are complex types stored by reference.
// Data Type	Description	Example
// Object	Collection of key-value pairs	{name: "Shriyanshi", age: 21}
// Array	Ordered list of values	["HTML", "CSS", "JavaScript"]
// Function	Block of reusable code	function greet() {}
// ________________________________________
// Object
// Example:
// javascript

// let user = {
//     name: "Shriyanshi",
//     age: 21,
//     skills: ["JavaScript", "SQL", "Figma"]
// };
// console.log(user.name); // Output: Shriyanshi
// ________________________________________
// Array
// Example:
// javascript
// let colors = ["Red", "Green", "Blue"];
// console.log(colors[1]); // Output: Green
// ________________________________________
// Function
// Example:
// javascript
// function greet(name) {
//     return `Hello, ${name}!`;
// }
// console.log(greet("Shriyanshi")); // Output: Hello, Shriyanshi!
// ________________________________________
// 3. Important Points to Remember
// ✅ JavaScript is dynamically typed (you don't need to declare data types).
// ✅ Use typeof to check the data type.
// Example:
// javascript
// console.log(typeof "Hello");   // Output: string
// console.log(typeof 42);        // Output: number
// console.log(typeof true);      // Output: boolean
// console.log(typeof null);      // Output: object (known JavaScript bug)
// console.log(typeof undefined); // Output: undefined
































// newwwwwwwwwwwwwwwwwwwww

