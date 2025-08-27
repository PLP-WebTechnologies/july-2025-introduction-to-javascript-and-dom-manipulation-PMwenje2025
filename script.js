// ===============================
// Part 1: Variables & Conditionals
// ===============================
let userAge = 18; // variable declaration
let userName = "Alex"; // another variable

// Simple conditional
if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// ===============================
// Part 2: Functions
// ===============================
// Function 1: Check age with input
function checkAge(age) {
  if (age >= 18) {
    return "You are an adult.";
  } else {
    return "You are a minor.";
  }
}

// Function 2: Toggle visibility of an element
function toggleSubtitle() {
  const subtitle = document.getElementById("subtitle");
  subtitle.classList.toggle("hidden");
}

// ===============================
// Part 3: Loops
// ===============================
// Loop 1: for loop example
function generateNumberList() {
  let output = "";
  for (let i = 1; i <= 5; i++) {
    output += "Number: " + i + "<br>";
  }
  return output;
}

// Loop 2: while loop example
function countdown(n) {
  let result = "";
  while (n > 0) {
    result += n + " ";
    n--;
  }
  return "Countdown: " + result;
}

// ===============================
// Part 4: DOM Interactions
// ===============================
const outputBox = document.getElementById("output");

// DOM Interaction 1: Update text when button clicked
document.getElementById("check-age-btn").addEventListener("click", () => {
  outputBox.innerHTML = checkAge(userAge);
});
// DOM Interaction 1: Update text when button clicked
document.getElementById("check-age-btn").addEventListener("click", () => {
  outputBox.innerHTML = checkAge(userAge);
});
// DOM Interaction 1.1: Change color of title on button click
document.getElementById("change-color-btn").addEventListener("click", () => {
  const title = document.getElementById("main-title");
  title.style.color = title.style.color === "blue" ? "black" : "blue";
});
// DOM Interaction 2: Toggle subtitle on button click
document.getElementById("toggle-btn").addEventListener("click", () => {
  toggleSubtitle();
  outputBox.innerHTML = "Subtitle toggled!";
});

// DOM Interaction 3: Generate list + show countdown
document.getElementById("generate-list-btn").addEventListener("click", () => {
  outputBox.innerHTML = generateNumberList() + "<br>" + countdown(5);
});
