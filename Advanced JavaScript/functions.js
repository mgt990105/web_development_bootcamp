// adding a default value for the parameter (always has to come at the end)
function greetUser(greetingPrefix, userName = "user") {
  //   console.log(greetingPrefix + " " + userName + "!");
  console.log(`${greetingPrefix} ${userName}!`);
}

greetUser("Hi", "Mandula");
// greetUser("Hello");

// creating a function that sums numbers up

//  how we would normally do it
function sumUp(...numbers) {
  // "..." converts it to an array
  let result = 0;

  for (const number of numbers) {
    result += number; // result = result + number
  }

  return result;
}

// console.log(sumUp(1, 2, 3, 4));

//  how we do that with advanced JavaScript

const inputNumbers = [1, 5, 10, 11, 20, 31];

console.log(sumUp(...inputNumbers)); // this "..." converts it back to non-array

// console.log(sumUp);

//  functions are just special kind of objects.
// So you can add properties to functions just like you do for objects
