let cl = console.log;

interface Admin {
  name: string;
  privildge: Array<string>;
}

interface Emp {
  name: string;
  startDate: Date;
}

interface elevatedEmp extends Admin, Emp {}
//type elevatedEmp = Admin & Emp;

//and means both property needed
let emp1: elevatedEmp;

emp1 = {
  name: "rohan",
  privildge: ["rohini"],
  startDate: new Date(2021, 7),
};

// intersection example
//it is a combination of both types we use & number & string
//in unoin we use or its string | number | boolean

type Combinable = number | string; //union
type Numeric = number | boolean; //union

type comNum = Combinable & Numeric; //it is intersection of union types
//in intersection (comNum) we will get data types that are common in combinable and numeric
//if all the types are differant hen it will take (never) type

let x: comNum;
x = 12;

//typegaurd
//here in if we have checked type of parameter that are comming from outside
//its called as typegaurd
function add(n1: Combinable, n2: Combinable) {
  if (typeof n1 === "number" && typeof n2 === "number") {
    return n1 + n2;
  } else {
    return n1.toString() + n2.toString();
  }
}

function elevatedEmp(e: elevatedEmp) {
  cl(e.name);
}
cl(elevatedEmp(emp1));
