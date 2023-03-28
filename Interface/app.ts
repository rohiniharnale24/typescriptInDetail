let cl = console.log;

//type alias, interface ,class
//interface
//mostly used interface
// type Person = {
//   fname: string;
//   lname: string;
//   age: number;
//   skills: string[];
//   //not mandatory key
//   genger?: string;
// };
//interface is similar to type alias but we can use comma ,selicolon , or nothing

interface Iperson {
  fname: string;
  lname: string;
  age: number;
  // skills: Array<string>;
  skills: string[];
}

let person1: Iperson = {
  fname: "john",
  lname: "doe",
  age: 33,
  skills: ["angular", "skills", "TS"],
};

let person2: Iperson = {
  fname: "summer",
  lname: "doe",
  age: 33,
  skills: ["mongoDB", "html", "js"],
};

// let allPerson =[
//   person1,
//   person2
// ]

//this is a array of Iperson
let allPerson: Iperson[] = [
  {
    fname: "john",
    lname: "doe",
    age: 33,
    skills: ["angular", "skills", "TS"],
  },
  {
    fname: "summer",
    lname: "doe",
    age: 33,
    skills: ["mongoDB", "html", "js"],
  },
];

let skills: string[] = ["Angular", "html", "js", "mangoDB"];

let num: number[] = [12, 13, 133, 445, 55, 666];

let mixArray: (string | number)[] = ["js", "java", "php", "python", 122, 345];

// type Mobile ={
//   pNAme:string,
//   pModel:string,
//   price:number,
//   rating:number
// }
// let mobile:Mobile ={
//   pNAme:"samsung",
//   pModel:"gallaxy=12",
//   price:123000,
//   rating:5
// }

interface Iproducts {
  pNAme: string;
  pModel: string;
  price: number;
  rating: number;
}
let mobile1: Iproducts = {
  pNAme: "samsung",
  pModel: "gallaxy=12",
  price: 123000,
  rating: 5,
};

let mobile2: Iproducts = {
  pNAme: "samsung",
  pModel: "gallaxy=12",
  price: 123000,
  rating: 5,
};

let allProduct: Iproducts[] = [
  {
    pNAme: "samsung",
    pModel: "gallaxy=12",
    price: 123000,
    rating: 5,
  },
  {
    pNAme: "samsung",
    pModel: "gallaxy=12",
    price: 123000,
    rating: 5,
  },
];

//type
// type Passengers = {
//   fname: string;
//   lname: string;
//   isCheckedIn: boolean;
//   isCheckedOut: boolean;
//   child: number | null;
// };
// let passenger1: Passengers = {
//   fname: "jhon",
//   lname: "doe",
//   isCheckedIn: true,
//   isCheckedOut: false,
//   child: 2,
// };

// let passenger2: Passengers = {
//   fname: "june",
//   lname: "doe",
//   isCheckedIn: true,
//   isCheckedOut: false,
//   child: null,
// };

//interface
interface Ipassengers {
  fname: string;
  lname: string;
  isCheckedIn: boolean;
  isCheckedOut: boolean;
  child: number | null;
}
let passenger1: Ipassengers = {
  fname: "jhon",
  lname: "doe",
  isCheckedIn: true,
  isCheckedOut: false,
  child: 2,
};

let passenger2: Ipassengers = {
  fname: "june",
  lname: "doe",
  isCheckedIn: true,
  isCheckedOut: false,
  child: null,
};

//type = array of Ipassenger
let allPassenger: Ipassengers[] = [passenger1, passenger2];
//to compile all typescript file in ES6>> tsc --init
// to compile all ts file = tsc -w
//to configure typescript >> tsc --init
