  
// JavaScript Arrays
// An array is a special variable that can store multiple values in a single variable




  let fruits = ["Apple", "Banana", "Mango"]; // Using array literals
  let vegi =["tomato","potato","brokli"];
  let vegi2 = ["ladyfinger"]

  let allin= fruits.concat(vegi,vegi2);  //add two array
  console.log(allin)     

  let numbers = new Array(1, 2, 3, 4, 5);   // Using new Array()


  console.log(fruits[0]); // Output: Apple
  console.log(fruits[1]); // Output: Banana


fruits[1] = "Orange"; // Changes "Banana" to "Orange"
console.log(fruits.length);  //tell the length of array


fruits.push("papaya","graps")  //add elementt in end 
console.log(fruits); 

fruits.pop();//need to write two time for removing two element
console.log(fruits); //remove last element in end 


fruits.shift();
console.log(fruits); //remove first element in starting

fruits.unshift("papaya");//add a new element in starting
console.log(fruits); 


fruits.splice(1, 0, "Pineapple"); // Adds "Pineapple" at index 1  //btween add
console.log(fruits); // Output: ["Lemon", "Pineapple", "Banana", "Mango"]


let newFruits = fruits.slice(1, 7);    //remove for between
console.log(newFruits); // Output: ["Pineapple", "Banana"]
