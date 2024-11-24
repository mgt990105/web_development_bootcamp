const fs = require("fs");

//  main learning: something within a block can only be called within a block
// variables defined inside a main block outside of a sub block can be

//  "block" in JS is basically anthing between curly brackets

function readFile() {
  let fileData;
  try {
    const fileData = fs.readFileSync("data.json"); // even though fileData is mentioned twice, this is a new variable cause it's a new nest
    console.log("Hi there!");
  } catch {
    //   console.log(filedata) <= this doesn't work since the variable is outside
    //  of the block that it was defined in
    console.log("An error occured!");
  }
  console.log(fileData); // this is refferring to fileData on line 6
  console.log("Hi there!");
}

readFile();
