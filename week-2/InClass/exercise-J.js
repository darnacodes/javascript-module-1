/*const Array = [
        "Anne",
        "Amy",
        "Arnel",
        "Armie",
        "Anie",
        "Arnold",      
]
*/ 

function secondMatchesAmy(array) {
  if (array[1] === "Amy" ) {
    return "Second index matched!";
  }else{
  return "Second index not matched";
  }
};

//console.log(secondMatchesAmy("Arnold"));


console.log(secondMatchesAmy(["Arnold","Amy"]));
console.log(secondMatchesAmy(["Arnold","Amysss"]));
