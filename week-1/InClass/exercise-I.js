//Update the file exercise-I.js script in the folder week-1/InClass
//Write a function that returns the year someone is born given their age as input

function yearOfBirth(age){
    const yearNow = 2022;
    let yearOfBirthOfSomeOne = yearNow - age;
    return `This person  was born in the year ${yearOfBirthOfSomeOne}`; 
}
console.log(yearOfBirth(2));


//Using the answer from step 1, write a function that takes someone's name and age as
//input and returns a string that states the person's name and year they were born in a sentence

function yearOfBirthOfSomeOne(yearNow,age){
    return yearNow-age;
}

function yearOfBirthAndName(name, age){
    const yearNow = 2022;
    const message = `${name} was born in the year ${yearOfBirthOfSomeOne(yearNow,age)}`; 
    return message; 
}

console.log(yearOfBirthAndName("Alexia", 2));