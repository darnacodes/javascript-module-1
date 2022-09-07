
const numberOfStudents = 15;
const numberOfMentors = 8;
const totalNumStudentsAndNumMentors= numberOfStudents + numberOfMentors;
const percentNumStudents = numberOfStudents / totalNumStudentsAndNumMentors * 100;
const percentNumMentors = numberOfMentors / totalNumStudentsAndNumMentors * 100;

console.log(`Percentage of Students: ${Math.round(percentNumStudents)}%`);
console.log(`Percentage of Mentors: ${Math.round(percentNumMentors)}%`);

