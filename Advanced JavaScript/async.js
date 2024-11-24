const fs = require("fs/promises");

// "Synchronous" means: This operation must be completed before following
// operations (code) can be started and executed.

// "Asynchronous" means: This operations can be executed simultaneously with other operations.
//  It does NOT block the execution of following code

// function readFile() {
//   let fileData;
//   // clode execution will be paused at this point till the file is read
//   //   but if you want the rest of the code to be executed while it's being read

//   //   fileData = fs.readFile("data.txt", function (error, fileData) {
//   //     console.log("File parsing done!");
//   //     console.log(fileData.toString());
//   //   });

//   //    using "promises"
//   //  what's the advantage? the code is more structure to avoid "callback hell"
//   //  you can put multiple async operations and have more structured code

//   //  you can't use try and catch to avoid errors

//   fs.readFile("data.txt")
//     .then(function (fileData) {
//       console.log("File parsing done!");
//       console.log(fileData.toString());
//       //    return some operation
//     })
//     .then(function () {})
//     .catch(function (error) {
//       console.log(error);
//     });

//   console.log("Hi there!");
// }

// readFile();

// -------------------------------------------------------------------

//  using async await (you can now use try and catch as well)

async function readFile() {
  let fileData;

  fileData = await fs.readFile("data.txt");
  console.log("File parsing done!");
  console.log(fileData.toString());
  //    return some operation

  console.log("Hi there!");
}

readFile();
