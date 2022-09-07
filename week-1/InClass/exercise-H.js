/*Design and create a function that:
takes in more than one input
uses string concatenation
this means adding two strings together
performs some form of operation on a number
uses return to return a string
Add a comment above your function to explain what it does
Call your function and run your script
What's the difference between a return and console.log?
When would you choose to use functions over the way we have been scripting so far?
*/

const { Console } = require("console");

// adds two numbers and returns the sum of the numbers.
let num1= 22
let num2= 10
let sum= addNum(num1,num2);

function addNum(num1, num2){
    return num1 + num2;
}
console.log(sum);


//used string concatenation and returns string that has concatenated value .

let string1= "hello"
let string2= " 2022!, the year of the ox"

function concatenateStrings(string1, string2){
    return string1 + string2;

}
console.log(concatenateStrings(string1, string2));


