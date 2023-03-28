export {};
let cl = console.log;
//function type
// type = {

// }
type mathOpe = (n1: number, n2: number) => number;

function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  cl(`the result id${num}`);
}

function multi(n1: number, n2: number): number {
  return n1 * n2;
}
//here add data type is (an)y so we can change it to any data type in future
//so test type must be function

//here we can store any function(arrow,pure...) in test but it must be function
//like here we store add/printResult in test
//we have to make custom function type so that this function can store specific function with specific return type

//let test: Function;
//let test ;
//test = add;
// test =10;error
//cl(test(20, 30));
//test = printResult;

//function type
//type mathOpe = (n1: number, n2: number) => number;
// let test: (n1: number, n2: number) => number;
let test: mathOpe;

test = multi;
// test = printResult; error

//******************************************************************************* */

// let userDetails: any;

//userDetails = 123;
//let userName: string;

//as we assign userDetail to username so its considering that username is now any

//userName = userDetails;

//****************************************************************************************** */

//unknown
//Anything is assignable to unknown , but unknown isn't assignable to anything
//here typescript didnt confuse that usename is string
//unknown is extactly like any but its some what strict than any
//we cant assign unknown to any declaratuion

let userDetails: unknown;

let userName: string;
//in unknown we can store string ,number,boolean... datatype
userDetails = "john";

//now here we assign unknown type to string type
//if we want to assign we have to give if condition
if (typeof userDetails === "string") {
  userName = userDetails;
  cl(userName);
}

// cl();
//let userDetails = 123;
//if we are using a declaration and we dont know which type of data is comming which we are going to store in var at that time we use unknown
//while writing an api call we have to strictly write which datatype we are going to pass to function and its return type
