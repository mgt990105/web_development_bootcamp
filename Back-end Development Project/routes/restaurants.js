const express = require("express");

const router = express.Router();

const uuid = require("uuid");

//  ".." takes you one level higher
const resData = require("../util/restaurant-data"); //"./" <= relative path

router.get("/restaurants", function (req, res) {
  let order = req.query.order;
  let nextOrder = "desc";

  if (order != "asc" && order !== "desc") {
    order = "asc";
  }

  if (order === "desc") {
    nextOrder = "asc";
  }

  const storedRestaurants = resData.getStoredRestaurants();

  //  sort data
  storedRestaurants.sort(function (resA, resB) {
    if (
      (order === "asc" && resA.name > resB.name) ||
      (order === "desc" && resA.name < resB.name)
    ) {
      return 1;
    }
    return -1;
  });

  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
    nextOrder: nextOrder,
  });
});

router.get("/restaurants/:id", function (req, res) {
  // '/restaurants/r1'
  const restaurantId = req.params.id;
  const storedRestaurants = resData.getStoredRestaurants();

  //   creating a loop
  for (const restaurant of storedRestaurants) {
    if (restaurant.id === restaurantId) {
      //  using return so that the loop and the function end
      return res.render("restaurant-details", { restaurant: restaurant });
      // we can't put else here cause it will give an error too early
    }

    //   but we can put one here
    res.status(404).render("404");
  }
});

router.get("/recommend", function (req, res) {
  res.render("recommend");
});

router.post("/recommend", function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4();
  const storedRestaurants = resData.getStoredRestaurants();
  //
  storedRestaurants.push(restaurant);
  //
  resData.storedRestaurants(storedRestaurants);
  //
  res.redirect("/confirm");
});

router.get("/confirm", function (req, res) {
  res.render("confirm");
});

module.exports = router;
