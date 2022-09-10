/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

let name = "Daniel";
let danielsRole = "mentor";
let danielsOtherRole = "student";


function roleChecker(name,role){
 /* if (role === "mentor" && name === "Daniel"){
   return (`hi, I'm ${name}, I'm a ${role}`)
  } else if (role === "student" && name === "Daniel"){
   return (`hi, im ${name}, I'm a ${role}`);
}*/
if(role == "mentor" || role== "student"){
  return (`hi, im ${name}, I'm a ${role}`);
} else {
    return ('what are you doing here');
  }
};

console.log(roleChecker(name,danielsRole));
console.log(roleChecker(name,danielsOtherRole));
console.log(roleChecker("Rica","guest"));
  
/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
