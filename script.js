// 1. Declare variables

const internName = "Gloria"; 

let TaskOne = 10;
let TaskTwo = 8;
var TaskThree = 6; 

// 2. Calculate total and average
const totalScore = TaskOne + TaskTwo + TaskThree;
const averageScore = totalScore / 3;

// 3. Determine the grade using if-else
let grade;

if (averageScore >= 9) {
  grade = "A";
} else if (averageScore >= 8) {
  grade = "B";
} else if (averageScore >= 7) {
  grade = "C";
} else if (averageScore >= 6) {
  grade = "D";
} else {
  grade = "E";
}

// 4. Display output using template literals
console.log(`${internName}, here are your scores:`);
console.log(`Task One: ${TaskOne}, Task Two: ${TaskTwo}, Task Three: ${TaskThree}`);
console.log(`Your Average Score is: ${averageScore.toFixed(2)}`);
console.log(`Therefore, your final Grade is : ${grade}`);

// 5. Use switch for feedback message
switch (grade) {
  case "A":
    console.log(`Excellent performance!, ${internName}`);
    break;
  case "B":
    console.log("Great job! Keep aiming high.");
    break;
  case "C":
    console.log("Good effort. Try to improve.");
    break;
  case "D":
    console.log("You're close. Keep working at it.");
    break;
  case "E":
    console.log("Don't give up. You can do better next time.");
    break;
  default:
    console.log("Invalid grade.");
}
