//9: A classic programming interview question that involves using array methods(filter, map, reduce) to solve a problem and JavaScript Objects.
//Ans: We create an array of student objects, filter the students who passed, transform their names to uppercase,
//and then compute the total score of all passing students.

//Create an array of objects representing students with their names and scores and get the below results with optimized solutions.
//1. Filter out the students who scored more than 37.
//2. Update passed students' names to uppercase.
//3. Total score of all passing students.

const students = [
  { name: 'Alice', score: 40 },
  { name: 'Bob', score: 35 },
  { name: 'Charlie', score: 50 },
  { name: 'David', score: 28 },
  { name: 'Emma', score: 42 },
  { name: 'Frank', score: 37 }
];

// 1) Filter students with score > 35
const passingStudents = students.filter(student => student.score > 35);
console.log('Passing students:', passingStudents);

// 2) Convert passed students' names to uppercase
const upperCaseNames = passingStudents.map(student => student.name.toUpperCase());
console.log('Uppercase names:', upperCaseNames);

// 3) Total score of all passing students
const totalScore = passingStudents.reduce((sum, student) => sum + student.score, 0);
console.log('Total score of all passing students:', totalScore);

//Output:
// Passing students: [
//   { name: 'Alice', score: 40 },
//   { name: 'Charlie', score: 50 },
//   { name: 'Emma', score: 42 },
//   { name: 'Frank', score: 37 }
// ]
// Uppercase names: [ 'ALICE', 'CHARLIE', 'EMMA', 'FRANK' ]
// Total score of all passing students: 169
