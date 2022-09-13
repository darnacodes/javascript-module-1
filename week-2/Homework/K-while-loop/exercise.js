/*write a function that 
- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a while loop
*/

let n = 3;

//your code here

function sumTillNum(num){
	let result = 0;
	let i = 0;
	while (i <= num){
		result += i;
		i += 1;
	}
	return result;
}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));
