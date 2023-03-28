let cl = console.log;
//class name with capital letter
//private number always starts with>> _member name
//when we apply interface on object so all key value pair are mandatory and we cant add extra key in object
//but when we apply interface on class all the keys from interface are mandatory but we can apply extra keys/field/property in class
//if we use readonly property inside the interface >> it will not allow to change value on instance
//if we use readonly property inside the class then it will not allow to chnage value inside the class
//we can use readonly property inside interface

interface Igreetable {
  readonly name: string;
  lname: string;
  greed(phrase: string): void;
}

let user1: Igreetable;
// user1 = {
//   name: "rohin",
//   lname: "haenale",
//   greed(phrase) {
//     cl(`welcome ${phrase}`);
//   },

// };

// here iGreaetable interface works like abstract class
//differance between abstract and interface
// class Person implements Igreetable {
//   // name: string;
//   // age:number;
//   //but here we have to innitial this field in constructor
//   //so here we use short-hand property
//   constructor(
//     public readonly name: string,
//     public lname: string,
//     public age: number
//   ) {}
//   greed(phrase: string): void {
//     cl(`${phrase} ${this.name}`);
//   }
// }
// let person1 = new Person("rohan", "harnale", 25);
// cl(person1);

// person1.name = "rani";
// person1.greed("hello good morning");

/*********************************************************** */
//extending interface
//we can extends interface
//interface inheritance is posiible
//we can extends two iterface , we also can extends/add two or more interface on class
//we can use to create instance as well as we can use class as a type
//if we use class only to create type(inplace of interface) but not to create instance then its bad practice
//bcz interface cant compile and it will not included in js file
//so use class for creating objects and to use as a type

//to create type we must have to use interface or type alias

interface department {
  dname: string;
  dnum: number;
}
interface Igreetable extends department {
  add(n1: number, n2: number): number;
}
class Person implements Igreetable, department {
  // name: string;
  // age:number;
  //but here we have to innitial this field in constructor
  //so here we use short-hand property
  //interface >> if we want some methode or property mandatory on class we use interface we also add some extra properties with it

  constructor(
    public readonly name: string,
    public lname: string,
    public age: number,
    public dname: "it",
    public dnum: 22
  ) {}
  greed(phrase: string): void {
    cl(`${phrase} ${this.name}`);
  }
  add(n1: number, n2: number): number {
    return n1 + n2;
  }
}

//########################################################################
