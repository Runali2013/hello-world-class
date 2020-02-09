console.log(something);
// undefined is a Primitive
// I let x: any the absence of any value
let x;

 console.log(x);
 console.log(undefined);

// Null is a primitive
// Nul represents deliberate assignment of 'nothing'.
 x = null;
 console.log(x);

// This is an Object. {}
// me is an object
 const me = {
   name: "Runali"
};

console.log(me.name);
console.log(typeof me.name); // string
console.log(typeof me.age); // there's no variable / undefined

// Create a new key value pair with age = 23;
 me.age = 23;
console.log(me.age);

// me is an object
  const me = {
   name: "Runali",
   age: 23,
   pets: {
     cat: "Dara",
     dog: "James"
   }
 };

console.log(me.pets.cat);
console.log(me.pets.cat); // undefined.cat

// implicit conversion
 console.log("2" + 2); // string 22
 console.log(2 + 2); // 4

// explicit conversion
 console.log(Number("22"));

 console.log(true + true + "true" + "false"); // 2truefalse
const name = "Fake";
const me = {
  name: "Manav"
}
me.name = "Dhanav";

const me = {
  something: "ehll" ;
}

console.log(name) // reference the global variable
console.log(me.name); // reference the key 'name' inside of the OBJECT me
console.log(console) // object is console

