/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
  - Finish the statement on line 11 to produce an array with valid content
  - Do not edit any of the existing code
*/

var pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, "whoops"];

var pairsByIndex; // Complete this statement
// TODO INCOMPLETE. HINT: USE .filter() FUNCTION. INSIDE IT ADD THE STATEMENTS YOU WOULD LIKE TO FILTER. EXAMPLE, IF I WANT TO ONLY KEEP THE null ELEMENTS THAT ARE objects AND WITH A LENGTH OF 3 I WOULD DO: 
var pairsByIndex = pairsByIndex.filter(pair => pair == null && typeof (pair) != 'object' && index.length === 3);
// THIS EXAMPLE IS NOT THE ANSWER BUT IT SHOWS YOU THE SYNTAX YOU SHOULD USE TO FILTER AN ARRAY.

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

var pairs = pairsByIndex.map(function(indexes) {
  var student = students[indexes[0]];
  var mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);
