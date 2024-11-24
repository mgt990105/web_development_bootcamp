// const job = { title: "Developer", location: "New York", salary: 50000 };
// const job1 = { title: "SE", location: "New  Jersey", salary: 40000 };
// const job2 = { title: "DS", location: "Georgia", salary: 20000 };

const { title } = require("process");

// console.log(new Date().toISOString());

//  to avoid creating job1, job2, etc. as above

// hot to create a class
class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }
  // how to create methods
  describe() {
    console.log(
      `I'm a ${this.title}. I work in ${this.location} and earn ${this.salary}`
    );
  }
}

//  checking how classes work
const developer = new Job("Developer", "New York", 50000);
const cook = new Job("Cook", "Munich", 35000);

//  checking how methods work
developer.describe();

//  destructing arrays

const input = ["Mandula", "Thrimanne"];

const firstName = input[0];

const lastName = input[1];

// instead of doing the above breakdown, you can simplify the code by using the below line

const [first, last] = input;

console.log(first);

// similarly

const jobList = { title: "Developer", location: "New York" };

//  however you have to use the same property name in the object
//  it's not the order
const { title, location } = jobList;

console.log(title);

//  this is not WORKING
