
// part 1 = variables
// part 2 = datatype
// part 3 = operators{if , else , switchcase}
// part 4 = Loops
// part 5 = functions []













// ___1_______________________________________________________________________________________________________________

// variables are contaner to store values 
//  let = update not redeclare
//  var = update and redeclare 
//  const = not update not redeclare




// ____2______________________________________________________________________________________________________________


//  datatype is a way of define the type of data [primitive]
// null
// number
// symbol
// string
// boolean
// bigint
// undefine





// ____3______________________________________________________________________________________________________________




// 1. Arithmetic Operators (Perform mathematical operations)
// + (Addition) → 5 + 2 → 7

// - (Subtraction) → 5 - 2 → 3

// * (Multiplication) → 5 * 2 → 10

// / (Division) → 5 / 2 → 2.5

// % (Modulus - Remainder) → 5 % 2 → 1

// ** (Exponentiation) → 5 ** 2 → 25

// ++ (Increment) → let x = 5; x++ → 6

// -- (Decrement) → let x = 5; x-- → 4

// 2. Assignment Operators (Assign values)
// = (Assign) → x = 10

// += (Add and assign) → x += 5 (Same as x = x + 5)

// -= (Subtract and assign) → x -= 5

// *= (Multiply and assign) → x *= 5

// /= (Divide and assign) → x /= 5

// %= (Modulus and assign) → x %= 5

// **= (Exponentiation and assign) → x **= 5

// 3. Comparison Operators (Compare values, return true or false)
// == (Equal to, type conversion allowed) → 5 == "5" → true

// === (Strict equal to, no type conversion) → 5 === "5" → false

// != (Not equal to) → 5 != "5" → false

// !== (Strict not equal to) → 5 !== "5" → true

// > (Greater than) → 5 > 3 → true

// < (Less than) → 5 < 3 → false

// >= (Greater than or equal to) → 5 >= 5 → true

// <= (Less than or equal to) → 5 <= 3 → false

// 4. Logical Operators (Combine Boolean values)
// && (AND) → true && false → false

// || (OR) → true || false → true

// ! (NOT) → !true → false

// 5. Bitwise Operators (Work at the binary level)
// & (AND)

// | (OR)

// ^ (XOR)

// ~ (NOT)

// << (Left shift)

// >> (Right shift)

// >>> (Unsigned right shift)

// 6. Ternary Operator (Shorthand for if-else)
// condition ? value_if_true : value_if_false

// Example:


// let age = 20;
// let status = age >= 18 ? "Adult" : "Minor"; // "Adult"
// 7. Type Operators
// typeof (Returns the data type) → typeof 42 → "number"

// instanceof (Checks if an object is an instance of a specific class)


// let arr = [];
// console.log(arr instanceof Array); // true
// 8. Nullish Coalescing Operator (??)
// Returns the right-hand value if the left-hand value is null or undefined

// Example:

// js
// Copy
// Edit
// let name = null;
// let userName = name ?? "Guest"; // "Guest"










// ____4______________________________________________________________________________________________________________





// Loops in JavaScript
// Loops are used to execute a block of code multiple times.

// 1️⃣ for Loop (Fixed Repetitions)
// ✅ Used when you know how many times to repeat.

// 🔹 Syntax:

// js
// Copy
// Edit
// for (initialization; condition; increment/decrement) {
//     // Code to execute
// }
// 🔹 Example: Print numbers from 1 to 5

// js
// Copy
// Edit
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// 🔹 Output:

// Copy
// Edit
// 1
// 2
// 3
// 4
// 5
// 2️⃣ while Loop (Condition-Based)
// ✅ Used when the number of repetitions is unknown and depends on a condition.

// 🔹 Syntax:

// js
// Copy
// Edit
// while (condition) {
//     // Code to execute
// }
// 🔹 Example: Print numbers from 1 to 5

// js
// Copy
// Edit
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }
// 3️⃣ do...while Loop (Runs At Least Once)
// ✅ Always runs once before checking the condition.

// 🔹 Syntax:

// js
// Copy
// Edit
// do {
//     // Code to execute
// } while (condition);
// 🔹 Example: Print numbers from 1 to 5

// js
// Copy
// Edit
// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);
// 4️⃣ for...in Loop (Loop Over Object Properties)
// ✅ Used to iterate over object properties.

// 🔹 Example:

// let person = { name: "Shriyanshi", age: 22, city: "Delhi" };

// for (let key in person) {
//     console.log(key + ": " + person[key]);
// }
// 🔹 Output:


// name: Shriyanshi
// age: 22
// city: Delhi
// 5️⃣ for...of Loop (Loop Over Arrays/Strings)
// ✅ Used to iterate over arrays or strings.

// 🔹 Example:


// let numbers = [10, 20, 30, 40];

// for (let num of numbers) {
//     console.log(num);
// }
// 🔹 Output:


// Loop Type	When to Use
// for	When the number of iterations is known
// while	When the number of iterations is unknown (condition-based)
// do...while	When you want to run at least once, even if the condition is false
// for...in	To loop over object properties
// for...of	To loop over arrays or strings

// ________5________________________________________________________________________________________________________________________________________________________________________________

// // 🔷 1. Based on Declaration
// How a function is written or defined.

// Function Type	Description
// Function Declaration	Regular function using function keyword. Hoisted.
// function greet() {}
// Function Expression	Function assigned to a variable. Not hoisted.
// const greet = function() {}
// Arrow Function	Short syntax using =>. Does not have this.
// const greet = () => {}
// Anonymous Function	Function without a name. Usually used in callbacks.
// setTimeout(function() {}, 1000)
// Named Function Expression	Function with a name, assigned to a variable.
// const greet = function sayHi() {}
// IIFE (Immediately Invoked Function Expression)	Runs immediately after being defined.
// (function(){ ... })();
// 🔁 2. Based on Usage & Behavior
// What the function is used for or how it behaves.

// Function Type	Description
// Callback Function	Passed as an argument to another function.
// Constructor Function	Used with new keyword to create objects.
// function Person() {}
// Generator Function	Used to pause/resume function execution.
// function* gen() {}
// Async Function	Uses async/await for asynchronous code.
// Recursive Function	Function that calls itself.
// Higher-Order Function	Takes another function as an argument or returns one.
// 🧠 3. Special Concepts Related to Functions
// Concept	Description
// First-Class Functions	JS treats functions as values (can assign, pass, return).
// Closures	Function + the scope it was defined in.
// Methods	Functions inside objects.
// Class Methods	Functions inside class definitions.
// Static Methods	Class-level methods, not on instances.
// Getters & Setters	Used to access/change object properties.
// Event Handlers	Functions used in response to events (onclick, etc).
// Bound Functions	bind() fixes this value of a function.
// 🧵 4. Built-in Functions (Group by Purpose)
// 📌 String Functions – work on text
// Example: "hello".toUpperCase()

// Function	Purpose
// charAt()	Get character at a position
// includes()	Check if substring exists
// indexOf()	Get index of a character
// slice(), substring()	Get part of a string
// toUpperCase(), toLowerCase()	Change case
// trim()	Remove spaces
// replace()	Replace text
// split()	Split string into array
// 📌 Array Functions – work on arrays
// Function	Purpose
// push() / pop()	Add/remove from end
// shift() / unshift()	Add/remove from start
// splice() / slice()	Modify or get part of array
// forEach()	Loop through items
// map(), filter(), reduce()	Transform/filter/reduce values
// find(), findIndex()	Search
// sort(), reverse()	Order items
// flat()	Flatten nested arrays
// 📌 Math, Number, Date Functions – built-in utilities
// Group	Functions
// Math	Math.floor(), ceil(), round(), random(), max(), min()
// Number	parseInt(), parseFloat(), toFixed()
// Date	new Date(), getFullYear(), getMonth(), etc.
// 📌 Utility & DOM Functions
// Type	Examples
// Utility	setTimeout(), clearInterval(), typeof, isNaN()
// DOM	document.getElementById(), querySelector(), addEventListener()
// ✅ In Summary:
// Category	Example	Key Focus
// Declaration	function hello() {}	How the function is written
// Usage	setTimeout(cb, 1000)	Why it's used
// Special Concepts	closure, bind()	Advanced JS behavior
// Built-in	map(), slice()	Useful methods to manipulate data



// example


// function oneplus (x,y){
//         console.log("hy how r u ");
//         return 1+(x+y)/2;
// }

// const sum=(p,q) =>{
//         return p+q;
// }

// const hello=()=>{
//         console.log("i m fine");
//         return "hi";
// }


// let a=1;
// let b=2;
// let c=3;
// let v=hello();

// console.log("the pus average ", oneplus(a,b));
// console.log(sum(9,10));
// console.log(hello());
// console.log(v);





// ______________________________________________________________________________________________________________________________________________________________________________________________________________


// Q1 - create a variable of type string and try to add a number ?


        // let a = "shriyanshi"
        // let b = 24

        // console.log(a+b)


// Q2 - use typeof operator to find the datatype of the string  in last question ?



        // console.log(typeof (a+b));





// Q3 - create an object in javascript can u chnage to hold a number later  ?

        //   {NO}


        //     const iteam ={
     
        //         "shriyanshi":true,
        //         "priya":false,
        //         "naha":24,
        //         "snaha":undefined
        //     }
        //     console.log(iteam["shriyanshi"]);

        // iteam = 54;



    


// Q4 - ADD AND  CHNGE IN OBJECT   ?        




    //   const iteam ={

     
    //             "shriyanshi":true,
    //             "priya":false,
    //             "naha":24,
    //             "snaha":undefined
    //         }
    //         console.log(iteam["shriyanshi"]);

    //      iteam['friend']= "anaa";

    //      console.log(iteam);







// Q5 - word meining disunaryy ?    


                // const disnary ={
                // 
                    // "Grandiose"	: "Excessively grand or ambitious",
                    // "Hellacious":	"Very great, bad or overwhelming",
                    // "Hygge"  :	"A quality of coziness and comfortable conviviality that causes a feeling of contentment or well-being",
                    // "Harangue" : " A long, aggressive speec"
                // }
                // 
                // console.log(disnary['Grandiose']);




// Q6 - Check Even or Odd?

        //     let n= 2;
 
        //        if (n%2==0)
        //        {
        //              console.log("even")
        //        }
        //        else
        //        {
        //             console.log("odd")
        //        }

// Q7 - Find the Largest Number in 3 ?
 
//        let a=5,b=9,c=2;
        //   if(a>b && a>c)
        //   {
        //        console.log(a)
        //   }
        //   else if (b>a && b>c)
        //   {
        //        console.log(b)
        //   }
        //   else
        //   {
        //        console.log(c)
        //   }

     

// Q8 - Grade Calculator ?

        // let per=parseInt(prompt("enter your grade"))
        //   if(per>=90)
        //   {
        //        console.log("A")
        //   }
        //   else if (per>=80)
        //         {
        //              console.log("B")
        //         }
        //   else if (per>=70)
        //         {
        //              console.log("C")
        //         }
        //   else if (per>=60)
        //       {
        //              console.log("D")
        //       }
        //   else if (per>=50)
        //         {
        //              console.log("E")
        //         }
        //   else
        //   {
        //        console.log("F")
        //   }
     


        // document.write("not divisible by 3")


 // Q9 - Check Leap Year?


       //  let year = 2024;

       // if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
       //     console.log(year + " is a leap year");
       // } else {
       //     console.log(year + " is not a leap year");
       // }



//  Q11 -  Voting Eligibility?

// let age = 10;
// age >= 18 ? console.log("Eligible to vote") : console.log("Not eligible to vote");

      
//  Q12 - Simple Calculator?

//        let num1 = 10, num2 = 5, operator = "*";

//        if (operator === "+") console.log(num1 + num2);
//        else if (operator === "-") console.log(num1 - num2);
//        else if (operator === "*") console.log(num1 * num2);
//        else if (operator === "/") console.log(num2 !== 0 ? num1 / num2 : "Cannot divide by zero");
//        else console.log("Invalid operator");


//  Q13 -  Minimum of Two Numbers (Ternary Operator)?

        // let x = 8, y = 3;
        // console.log(x < y ? x : y);




// Q14 -  Password Strength Checker??????

         // let password= "pass@123";
         // let hasNumber = /\d/.test(password);
         // let hasSpecialChar = /[!@#$%^&*]/.test(password);

         // if (password.length >= 8 && hasNumber && hasSpecialChar) {
         //     console.log("Strong password");
         // } else {
         //     console.log("Weak password");
         // }
        
        


// Q15 -  Day of the Week (Switch Case)??????



        // let dayNum = 20;

        // switch (dayNum) {
        //     case 1: console.log("Monday");
        //        break;
        //     case 2: console.log("Tuesday"); 
        //        break;
        //     case 3: console.log("Wednesday"); 
        //        break;
        //     case 4: console.log("Thursday"); 
        //        break;
        //     case 5: console.log("Friday"); 
        //        break;
        //     case 6: console.log("Saturday"); 
        //        break;
        //     case 7: console.log("Sunday"); 
        //        break;
        //     default: console.log("Invalid day number");
        // }



// Q16 - Print Even Numbers from 1 to 20?

            // for (let i = 2; i <= 20; i += 2) 
        //     {
        //                   console.log(i);
        //     }

        //       for(let i=2; i<=50;i+5)
            // {

            //         console.log(i);   
            //         console.log(i);
            // };



        

// Q17 - Sum of First 10 Natural Numbers?


         //     let sum =0;
         //     let i=1;


         //     while(i<=10)
         //     {
         //         sum= sum+i;
         //         i++;
         //     }
    
         //     console.log("Sum:", sum);


    
// Q18 - Reverse a String Using Loop?


           // let str = "hello";
           // let reversed = "";

           // for (let i = str.length - 1; i >= 0; i--) {
           //     reversed += str[i];
           // }

           // console.log("Reversed String:", reversed);           


//  Q19 - create function?


// function callme(){

//         console.log("hello shriyanshi");

// }

// callme();
// callme();
// callme();

    