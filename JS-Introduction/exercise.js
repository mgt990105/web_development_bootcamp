let group = {
  name: "100 Days of Code",
  price: 25,
  goals: ["HTML", "CSS", "JavaScript"],
};

alert(group.name);
alert(group.price);
alert(group.goals[1]);

// creating a function to output an item from a list

function listExtractor(list, item) {
  let result = list[item];
  return result;
}

// sending an alert

alert(listExtractor(group.goals, 1));
