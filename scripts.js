// Create a variable "timeOfDay" and assign it a string
const timeOfDay = "Good evening!";

// Create a variable "greeting" that references a template literal
// use "timeOfDay" in the template literal to create a message like "Good morning!"
// or "Good evening!"
const greeting = timeOfDay;

// print "greeting";
console.log(greeting);

// create a new variable, but do not assign it a value
let daysOfTheWeek;

//  Print the variable and its type.
console.log(typeof daysOfTheWeek);
// What type should we expect?
// Ans: undefined

// assign the variable a value that indicates the variable is purposely blank
daysOfTheWeek = null;

// print the variable and its type again
console.log(typeof daysOfTheWeek);
// What type should we expect?
// Ans: Object

// try to print a variable that does not exist.
console.log(weekDays);
// What should we expect to print in the CLI
// Ans: weekDays is not defined.

// print "greeting" again
console.log(greeting);
// will this line run?
// Ans: No, because of the error line code above. Must be fix first
//      before the next line of code will execute.

// create a variable called "name" that references a string
const name = "Runali";

// create a variable called "favoriteSong" that references a string
let favoriteSong = "Eternity";

// create a variable called "wage" that references a number
let wage = 10000;

// create a variable called "age" that references a number
let age = 30;

// create a variable called "onlyChild" that references a boolean
let onlyChild = false;

// create a variable called "satisfied" that references a boolean
let satisfied = false;

// create a variable called "favoriteThing" that references ANY primitive value
let favoriteThing = "Computer";
// print the data type of "favoriteThing"
console.log(typeof favoriteThing); // string type

// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "Love of a lifetime";

// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type
// and print its type
favoriteThing = "Cellphone";
console.log(typeof favoriteThing); // string

// Happy Birthday!
// Reassign "age" to a new value
age = 55;

// You got a big raise at work
// Reassign "wage" to a new value
wage = 20000;

// Your raise changed your job satisfaction
// Assign "satisfied" to true
satisfied = true;

// use "console.log()" and "+" to print a sentence that includes two variables
console.log(
  "My favorite song is " +
    favoriteSong +
    " and favorite thing is " +
    favoriteThing +
    "."
);
