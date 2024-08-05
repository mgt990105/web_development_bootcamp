//  the normal for loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//  the "for of" loop

const users = ["Max", "Anna", "Joel"];

for (const user of users) {
  console.log(user);
}

//  the "for-in" loop

const loggedInUser = {
  name: "Mandula",
  age: 25,
  isAdmin: true,
};

for (const propertyName in loggedInUser) {
  console.log(propertyName);
  console.log(loggedInUser[propertyName]); // same as ['name'] OR .name
}

//  the "while" loop

let isFinished = false;

while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}

console.log("Done!");
