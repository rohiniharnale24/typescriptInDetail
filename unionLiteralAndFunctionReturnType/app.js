"use strict";
exports.__esModule = true;
var cl = console.log;
//function combine (n1:number| string ,n2:number | string)
function combine(n1, n2, conversion) {
    // return n1+ n2
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
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
var x = 10;
//this will automatically happed when we use const in ts
var y = 5; // here typeof y is number 5 and its value is also number  5
//like let y : 20 = 20;
//here we cant change the the y value from 5 to another number
//we can assign value as a type to any declaration like here 20
var impSkill = "javascript";
//now we cant change the value of impSkill and its datatype
//we can declare return type of function before its execution
//if we didnt assign return type then it will consider
//whatever function returns it will be the bydefault function type of function
function add1(n1, n2) {
    return n1 + n2;
}
function add2(n1, n2) {
    return n1 + n2 + "";
    //it convert into string
}
function getPost() {
    return [{ id: 2, userId: 4, title: "string", body: "string" }];
}
function getPost1() {
    return { id: 2, userId: 4, title: "string", body: "string" };
}
//if we didnt return any thing to function its data type is void
//it should not return any type of data
//in js function doent retutn anything means it retun undefined
//it is undefinened if we only give return keyword but didnt return anything
//if we want to stop the execution of code then we just write return
//at that time we can assign datatype to function as a undefined
function printName() {
    cl("hello typescript");
}
function printName1() {
    // cl("hello typescript");
    return; //>> undefined>>to stop the execution of code
}
