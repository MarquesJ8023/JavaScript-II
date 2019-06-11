// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function makeFunc() {
  const name = 'Mozilla';
  
  function displayName() {
    console.log(name)
  }
}


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

let count = 0;
return function() {
  return ++count;
}
};
const friend = counter();
console.log(friend());
console.log(friend());
console.log(friend());
// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  return obj = {
    increment: function() {
      return ++counter;
    },
    decrement: function() {
      return --counter;
    }
  }
};
const trouble = counterFactory();

console.log(trouble.increment());
console.log(trouble.increment());
console.log(trouble.increment());

console.log(trouble.decrement());
console.log(trouble.decrement());
console.log(trouble.decrement());