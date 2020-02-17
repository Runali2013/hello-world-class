// const x = 3;

// // logical operator
// // TODO: check if x is ODD AND it's less than 10
// if (x % 2 === 1 && x < 10) {
//   console.log("x is odd because it has a remainder of 1.");
// }

// // TODO: check if x is ODD OR it's less than 10
// if (x % 2 === 1 || x < 10) {
//   console.log("x is odd because it has a remainder of 1.");
// }

// Reference vs. Value
// true primitives are compared by value
// object by reference

// const a = 49;
// const b = 49;

// console.log (a=== b);

// const x = {
//   name: "Manav"
// };

// const y = {
//   name: "Manav"
// };

// // false b/c OBJECTS are compared by reference
// console.log(x === y);

// // false
// ({a: 42} === {a:42});  // this is false
// Pass by value

// let x = 3;
// let y = x;

// console.log(y);

// primitives cannot mutate
// '3' that was used with 'x' previously thrown out and replaced

// x = 4;
// let y = x;
// console.log(y); // 4

// const x = {
//   name: "Manav";
// }

// // pass by reference
// const a = {
//   name: "Manav"
// };

// const b = a;

// // b will point to the same memory address as a.
// // what happends to I will affect the others
// a.name ="Dhanav";
// console.log(b.name);

// console.log(b.name);

// LOOP
// TODO: Log the numbers from 1 to 10
let x = 1;

while (x <= 10) {
  console.log(x);

  // Always make sure tat there is an exit condition
  x += 1; // x = x + 1;
}
