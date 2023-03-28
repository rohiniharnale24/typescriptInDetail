"use strict";
exports.__esModule = true;
//typescript is strictly bonded
//js is loosely binded
//in typescript we we defined a var x with number then ts consider that x is of type number and we can't change its type ferther
//we can't even asign a string value to x now .
// tsc path/file.ts // file.ts will be converted to file.js
// tsc              // all .ts files will be converted to .js files with in the directory
// tsc --watch      // converts all .ts files to .js, and watch changes in .ts files
// let x = 10;
// // x = "string";
//if we didn't asign value to var then bydefault its any
// let y;
// //if we have var w , and we want to assign a number value to it in future then we can set its data type for future value
// let w : number;
// function add (num1,num2,setBoolean,string){
//     if(setBoolean){
//         cl(`${string} ${num1+num2}`);
//     }else{
//         return `${string}  ${num1+ num2}`;
//     }
// }
// add(10,10,true,"the result is");
var cl = console.log;
// const getnum1 = document.getElementById("num1") as HTMLInputElement;
// const getnum2 = document.getElementById("num2")as HTMLInputElement;
// const enter = <HTMLElement>document.getElementById("enter");
//num1 is a input control
//.value >> error >> not every html element has value property only form control has value property
//so we have to declare getnum1 and getnu2 are input elements >> HtmlInputElement
//as HtmlElement >> here we are doing type casting
//we are defining data time of declaration in advance
//<HTMLElement> typecasting
//1211 output concate because of input data is alwyas in string format even through we provide type="number"
// const addition = (n1:number,n2:number) =>{
//    cl( n1+n2);
// }
//error enter>> may be null or html Element >> because we dont have access to tc file in index.html file
//if we are sure that its html element then we have to declared that its html element not a null
//typescript shows datatype error in developement time
// enter.addEventListener("click",()=>{
//     // enter.preventDefault();
//     addition(+getnum1.value , +getnum2.value);
// });
// let cl = console.log;
// const getnum1 = document.getElementById("num1");
// const getnum2 = document.getElementById("num2");
// const enter = document.getElementById("enter");
// //num1 is a input control
// //1211 output concate because of input data is alwyas in string format even through we provide type="number"
// const addition = (n1,n2) =>{
//    cl( n1+n2);
// }
//  enter.addEventListener("click",()=>{
//     // enter.preventDefault();
//     addition(getnum1.value , getnum2.value);
// });
//working with numbers , boolean and string
var x = 10;
//now x is number type
//we cant assign x to string bcz its type is number now
// x = true;
//type >> any
//its mandatory to assign value to var
// let y ;
// we can declare data type of var that we are going to use future
var w;
w = 10;
function add(n1, n2, showresult, phrase) {
    //    if(showresult){
    //     cl(`${phrase}${n1+n2}`)
    //    }else{
    //     return `${phrase}${n1+n2}`;
    //    }
    return showresult ? cl("".concat(phrase).concat(n1 + n2)) : " ".concat(phrase).concat(n1 + n2);
}
var n1 = 10;
var n2 = 11;
cl(add(n1, n2, true, "the addition is "));
//non primitive data types
//declration: data type
//we cant change the data type and key name in object
var person = {
    fNAme: "jhon",
    lName: "doe",
    age: 12
};
var person1 = {
    fName: "jhon",
    lName: "doe",
    age: 22
};
var person2 = {
    fName: "rani",
    lName: "harnlae",
    age: 25
};
//if we use js object  then it work as js ,so we need to put its datatype
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
