// Function to calculate and print the grade based on the marks

function calculateGrade(marks) {
    if (marks > 90) {
        console.log("A Grade"); 
    } else if (marks >= 70 && marks <= 90) {
        console.log("B Grade");
    } else if (marks >= 50 && marks < 70) {
        console.log("C Grade");
    } else {
        console.log("F Grade");
    }
}

let student1marks = 95;
let student2marks = 80;
let student3marks = 60;
let student4marks = 40;

console.log("student 1:");
calculateGrade(student1marks);


console.log("student 2:");
calculateGrade(student2marks);

console.log("student 3:");
calculateGrade(student3marks);

console.log("student 4:");
calculateGrade(student4marks);