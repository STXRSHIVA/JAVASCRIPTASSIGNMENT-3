


// =>  Conditional statements are like decision-making tools in programming. 
//     Imagine you have a set of instructions, and you want the computer to follow different sets of instructions based on certain conditions.

// =>  For example, think of a traffic light. 
//     If the light is green, you go. If it's red, you stop. 
//     In programming, conditional statements work similarly. 
//     They let you write instructions like "if something is true, do this; otherwise, do that."

// =>  So, these statements help the computer make choices and take different actions depending on what's happening in the program. 
//     They make programs more flexible and able to respond to different situations.


//  IF STATEMENT

    if (condition) {
        // code to be executed if the condition is true
    }

// example

    let x = 10;
    if (x > 5) {
        console.log("x is greater than 5");
    }

// If - else Statement

    if (condition) {
        // code to be executed if the condition is true
    } else {
        // code to be executed if the condition is false
    }

// example

    let y = 3;
    if (y % 2 === 0) {
        console.log("y is even");
    } else {
        console.log("y is odd");
    }

// if - else  if - else statement 

    if (condition1) {
        // code to be executed if condition1 is true
    } else if (condition2) {
        // code to be executed if condition2 is true
    } else {
        // code to be executed if none of the conditions are true
    }

// example 

    let grade = 85;
    if (grade >= 90) {
        console.log("A");
    } else if (grade >= 80) {
        console.log("B");
    } else {
        console.log("C");
    }
