

// Loops are control flow structures in programming that allow a set of instructions to be repeated multiple times. 
// They are essential for efficiently executing repetitive tasks, iterating over collections of data, and performing operations a certain number of times.

// The primary purpose of loops is to automate repetitive tasks, making code more concise, readable, and less prone to errors. 
// Instead of writing the same code over and over, you can use loops to perform iterations and achieve the desired outcome.

// There are several types of loops in programming. 
// Let's explore three common types along with their syntax and examples in JavaScript:


// For loop

    for (initialization; condition; increment/decrement) {
        // code to be executed in each iteration
    }

// Example 

    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

// While loop

    while (condition) {
        // code to be executed as long as the condition is true
    }

// example

    let count = 0;
    while (count < 5) {
        console.log(count);
        count++;
    }

//  do - while loop

    do {
        // code to be executed at least once
    } while (condition);

// example 

    let num = 0;
    do {
        console.log(num);
        num++;
    } while (num < 5);

    
