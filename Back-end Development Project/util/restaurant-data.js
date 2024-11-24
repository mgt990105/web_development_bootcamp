const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "data", "restaurants.json");
// ".." takes you to the parent folder level
// "__dirname" is your current directory

function getStoredRestaurants() {
  //
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  return storedRestaurants;
}

function storedRestaurants(storableRestaurants) {
  fs.writeFileSync(filePath, JSON.stringify(storableRestaurants));
}

module.exports = {
  getStoredRestaurants: getStoredRestaurants,
  storedRestaurants: storedRestaurants,
  // left side: name in this file
  // right side: name in the other file
};
