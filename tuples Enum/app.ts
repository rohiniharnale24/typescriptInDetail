//tuple
//An enum is a special "class" that represents a group of constants (unchangeable variables).
//Enums come in two flavors string and numeric. Lets start with numeric.
//tuple is a fixed length array with prefened data types
//A tuple is a typed array with a pre-defined length and types for each index.

var object: {
  fname: string;
  lname: string;
  skills: [string];
};

var obj: object = {
  fName: "rohini",
  lname: "harnale",
  skills: ["html", "css", "js", 67],
};

let x = 10; //automatic type assertion
let c: number; //type assertion(custom)
c = 100;

interface IParent1 {
  fullName(firstName: string, age: number): string;
}
