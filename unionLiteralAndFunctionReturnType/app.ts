export {};
let cl = console.log;

//union = custom type
//here n1 is may be number or string

//function return type
type combinable = number | string;
//function combine (n1:number| string ,n2:number | string)
function combine(
  n1: combinable,
  n2: combinable,
  conversion: "as-string" | "as-number"
) {
  // return n1+ n2
  let result: any;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  if (conversion === "as-string") {
    return result.toString();
  }
  if (conversion === "as-number") {
    return +result;
  }
  //return result;
}
//conversation to change return type of result

cl(combine(12, 13, "as-string")); //25 >>number >> string
cl(combine("12", 13, "as-number")); //1213 >> string >> number
cl(combine(12, "13", "as-number")); //1213
cl(combine("12", "13", "as-number")); //1213

//in above exapmle function return type its depends on function argument but we want
//irrespective of type of argument of a function we want to change the return type of the function

//n1 >> number & n2 > number
//n1 >> number & n2 > string
//n1 >> string & n2 number
////n1 >> number & n2 string

//literal type
let x = 10;

//this will automatically happed when we use const in ts
const y = 5; // here typeof y is number 5 and its value is also number  5
//data type and value is same
//like let y : 20 = 20;
//here we cant change the the y value from 5 to another number
//we can assign value as a type to any declaration like here 20
let impSkill: "javascript" = "javascript";
//now we cant change the value of impSkill and its datatype

//we can declare return type of function before its execution
//if we didnt assign return type then it will consider
//whatever function returns it will be the bydefault function type of function

function add1(n1: number, n2: number): number {
  return n1 + n2;
}

function add2(n1: number, n2: number): string {
  return n1 + n2 + "";
  //it convert into string
}

type user = { id: 2; userId: 4; title: "string"; body: "string" };
function getPost(): user[] {
  return [{ id: 2, userId: 4, title: "string", body: "string" }];
}

function getPost1(): user {
  return { id: 2, userId: 4, title: "string", body: "string" };
}

//if we didnt return any thing to function its data type is void
//it should not return any type of data
//in js function doent retutn anything means it retun undefined
//it is undefinened if we only give return keyword but didnt return anything
//if we want to stop the execution of code then we just write return
//at that time we can assign datatype to function as a undefined

function printName(): void {
  cl("hello typescript");
}

function printName1(): void {
  // cl("hello typescript");
  return; //>> undefined>>to stop the execution of code
}
