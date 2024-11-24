//  main learning: objects are written as addresses in memory and primitive
//  values are written as it is. so working with objects are mor complicated
//  since they avoid duplication of the same object by overwriting the existing one

// object
const hobbies = ["Sports", "Cooking"]; // a pointer to the array is store
// primitive value
const age = 32; // the value itself is stored

console.log(hobbies);

hobbies.push("Reading"); // the address of the array doesn't change (so it doesn't change but just add)

// hobbies = ["Coding", "Sleeping"]; // not allowed! new address is stored

console.log(hobbies);

// Primitive values: numbers, strings, booleans and more
//  Reference values: Objects

const person = { age: 32 };

function getAdultYears(p) {
  p.age = p.age - 18;
  return p.age;
  //return p.age - 18; // with this we are not changing the object
}

// console.log(getAdultYears(person));
//console.log(person); // this actually shows that the object now has changed to
//  accomodate what happened in the function

//console.log(getAdultYears({ age: person.age })); // this creates a new object
//console.log(person);

//  easiest way to not overwrite objects

console.log(getAdultYears({ ...person })); // this creates a new object
console.log(person);
