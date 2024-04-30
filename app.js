console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    // for loop to iterate count to 100
    for(let number = 1; number <=100; number++){
        // check value is odd or even
        if(number %2 !== 0){
            //if odd print to console.
            console.log(number);
        }
    }

}
// prints all numbers up to 100
 printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(){
    // get userinput
  let userName = prompt("please enter your name");
  let ageString = prompt("please enter your age");
    // parse int age to string, 
  let age= parseInt(ageString);

    // initalize variables with strings
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if(age >= 16){
    console.log(aboveSixteen);
    }
    else {
    console.log(belowSixteen);
    }
    // calling the function
}checkAge();

//exercise 3
console.log("EXERCISE 3:\n==========\n");
function quadrantChecker(){
    let x = prompt("Please enter first number");
    let y = prompt("Please enter second number");
    

    if(x ===0 && y ===0){
        console.log(`The point (${x}, ${y}) is here.`);
    }
    else if (x===0){
        console.log(`The point (${x}, ${y}) is on the y axis.`);
    }
    else if(y===0){
        console.log(`The point (${x}, ${y}) is on the x axis.`);
    }
    else if( x>0 && y>0){
        console.log(`The point (${x}, ${y}) is in Quadrant 1.`);
    }
    else if(x<0 && y>0){
        console.log(`The point (${x}, ${y}) is in Quadrant 2.`);
    }
    else if(x<0 && y<0){
        console.log(`The point (${x}, ${y}) is in Quadrant 3.`);
    }
    else if(x>0 && y<0){
        console.log(`The point (${x}, ${y}) is in Quadrant 4.`);
    }

}quadrantChecker();

//exercise 4
console.log("EXERCISE 4:\n==========\n");
function typeTriangle(side1,side2,side3){
   

   
   if (side1 === side2 && side2 === side3) {
    return "Equilateral triangle"; // All sides are equal
    }
    else if(side1 <= 0 || side2 <= 0 || side3 <= 0 || 
        (side1 + side2 <= side3) || 
        (side1 + side3 <= side2) || 
        (side2 + side3 <= side1)) {
    return "Invalid Triangle"; // Invalid triangles

} else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return "Isosceles triangle"; // Two sides are equal
} else {
    return "Scalene triangle"; // All sides are different
}


}
console.log(typeTriangle(1, 2, 2));  
console.log(typeTriangle(1, 1, 2)); 
console.log(typeTriangle(5, 5, 5));  
console.log(typeTriangle(3, 4, 5));  
