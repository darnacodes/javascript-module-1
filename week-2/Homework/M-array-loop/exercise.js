/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


let daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function showDaysOfWeek(array){
  for (let i=0; i<array.length; i++){
    if (array[i].startsWith("T")){
      console.log(array[i]);
    }
  }

}


(showDaysOfWeek(daysOfWeek));