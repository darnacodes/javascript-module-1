// function boolChecker(bool) {
//   if (typeof bool === "boolean") {
//     return "You've given me a bool, thanks!";
//   } else  {
//     return "No bool, not cool.";
//   }
// }

// console.log(boolChecker("hello"));
// boolChecker(1);

function boolChecker(bool) {
  if (bool === true || bool === false) {
    return "You've given me a bool, thanks!";
  } else  {
    return "No bool, not cool.";
  }
}

console.log(boolChecker("hello"));
console.log(boolChecker(1));
console.log(boolChecker(true));