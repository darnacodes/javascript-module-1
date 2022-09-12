/*Calculate the exponential of the even numbers from 5 to 20 Using a for loop and the helper functions provided.
*/

function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}

for (let i =5; i <= 20; i++){
  if (isEven(i)){
  console.log (`The exponential of ${i} is ${exponential(i)}`);
  }
};

for (let i = 0; i <= 10; i++) {
  console.log(i)
}
