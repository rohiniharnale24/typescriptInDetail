export {};
let cl = console.log;
// tsc path/file.ts // file.ts will be converted to file.js
// tsc              // all .ts files will be converted to .js files with in the directory
// tsc --watch      // converts all .ts files to .js, and watch changes in .ts files

//**********************************************************************************************

//typescript is a superset of javascript
//js is loosely bounded
//typescript is strictly bounded
//in typescript if we defined a var x with number then TS consider that x is of type number and we can't change its type ferther

let y = 10;
//once we declare a var we cant change its datatype
//y=boolean >>error >>'boolean' only refers to a type, but is being used as a value here
//y = "string">> error >> Type 'string' is not assignable to type 'number

// let x = 10;
//x = "string";>>Type 'string' is not assignable to type 'number'.

//if we didn't asign value to var then bydefault its any
// let y;

// //if we have var w , and we want to assign a number value to it for future use , we can set its data type for future value
//its called as type assertion

// let w : number;

// function add (num1,num2,setBoolean,string){
//     if(setBoolean){
//         cl(`${string} ${num1+num2}`);
//     }else{
//         return `${string}  ${num1+ num2}`;
//     }
// }

// add(10,10,true,"the result is");

// const getnum1 = document.getElementById("num1") as HTMLInputElement;
// const getnum2 = document.getElementById("num2")as HTMLInputElement;
// const enter = <HTMLElement>document.getElementById("enter");
// const enter = document.getElementById("enter")!;
//! means its not a null (100% its html element)

//getnum1,getnum2 therse are input control
//.value >> error >> not every html element has value property only form control has value property
//so we have to declare getnum1 and getnu2 are input elements >> HtmlInputElement
//as HtmlInputElement >> here we are doing type casting
//we are defining data type of declaration in advance its called as typecasting
//3 ways
// const getnum1 = document.getElementById("num1") as HTMLInputElement;
/// const enter = <HTMLElement>document.getElementById("enter");
// const enter = document.getElementById("enter")!;

//********************************************************************************************** */
//1211 output concate because of input data is alwyas in string(text) format even through we provide type="number" for input tag in html
//so we need to conert getnum1,getnum2 to number for that we have + , Number , pasrseInt ,parseFloat methods

// const addition = (n1:number,n2:number) =>{
//    cl( n1+n2);
// }

//error >> enter button>> may be null or html Element >> because we dont have access to tc file in index.html file
//if we are sure that its html element then we have to declared that its html element not a null
//typescript shows datatype error in developement time >> in runtime/comppile time typescript shows an error

// enter.addEventListener("click",()=>{
//     // enter.preventDefault();
//     addition(+getnum1.value , +getnum2.value);
// });

// const getnum1 = document.getElementById("num1");
// const getnum2 = document.getElementById("num2");
// const enter = document.getElementById("enter");
// //num1 is a input control

//  enter.addEventListener("click",()=>{
//     // enter.preventDefault();
//     addition(getnum1.value , getnum2.value);
// });

//************************************************************************************************************* */

//non primitive data types
//working with numbers , boolean and string
//(automatic type assertion)
let x = 10;

//now x is number type
//here we cant reassigned x with string or other data type
// x = true;

//type >> any
//its mandatory to assign value to var otherwise it will work like normal js var
// let y ;
// we can declare data type of var that we are going to use in future(custom type assertion)
let w: number;
w = 10;

function add(n1: number, n2: number, showresult: boolean, phrase: string) {
  //    if(showresult){
  //     cl(`${phrase}${n1+n2}`)
  //    }else{
  //     return `${phrase}${n1+n2}`;
  //    }
  return showresult ? cl(`${phrase}${n1 + n2}`) : ` ${phrase}${n1 + n2}`;
}
let n1 = 10;
let n2 = 11;
cl(add(n1, n2, true, "the addition is "));

//declration: data type
//we cant change the data type and key name in object

let person: {
  fNAme: string;
  lName: string;
  age: number;
} = {
  fNAme: "jhon",
  lName: "doe",
  age: 12,
};

let person1: {
  fName: string;
  lName: string;
  age: number;
} = {
  fName: "jhon",
  lName: "doe",
  age: 22,
};

//to reduce code we use type and interface
//type interface
//key Name and its data must be same as defined in the personobj
type personObj = {
  fName: string;
  lName: string;
  age: number;
};

let person2: personObj = {
  fName: "rani",
  lName: "harnlae",
  age: 25,
};

//if we use js (Object)constructor then it will be generic type , to make it custom object type we need to define custom type

// let person:Object = {
//          fNAme:"jhon",
//         lName: "Doe",
//         age:10
//      }
//      //
//      person = {
//          fNAme:"jhon",
//          lName:"doe",
//          age:12,
//          nativePlace :"Pune"
//      }

// if we know the data comming from data base is either a null or htmlElement then we can put a condiotion by using null check ?
//? >> null Check
//if comming data is not null  html element then perform functipnality

let arr3: { fname: string; lname: string; email: string | null }[] = [
  {
    fname: "rohini",
    lname: "rajeshwar",
    email: "string",
  },
  {
    fname: "rohini",
    lname: "rajeshwar",
    email: null,
  },
];

//if email is not null then convert it into uppercase
for (const i in arr3) {
  cl(arr3[i].email?.toLocaleUpperCase());
}
