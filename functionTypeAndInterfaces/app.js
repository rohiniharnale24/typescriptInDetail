"use strict";
exports.__esModule = true;
var cl = console.log;
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    cl("the result id".concat(num));
}
function multi(n1, n2) {
    return n1 * n2;
}
//here add data type is any so we can change it to any data type in future
//so test type must be function
//here we can store any function(arrow,pure...) in test but it must be function
//like here we store add/printResult in test
//so we have to make custom function type so that this function can store specific function
//let test: Function;
//let test ;
//test = add;
// test =10;error
//cl(test(20, 30));
//test = printResult;
//function type
// let test: (n1: number, n2: number) => number;
var test;
test = multi;
// test = printResult; error
//unknown
//here typescript didnt confuse that usename is string
//as we assign userDetail to username so its considering that username is now any
//unknown is extactly like any but its some what strict than any
//we cant assign unknown to any declaratuion
//
// let userDetails: any;
var userDetails;
var userName;
//in unknown also we can store string , number,boolean... datatype
userDetails = "john";
//userDetails = 123;
//now here we assign unknown type to string type
//if we want to assign we have to give if condition
//userName = userDetails;
if (typeof userDetails === "string") {
    userName = userDetails;
    cl(userName);
}
// cl();
//let userDetails = 123;
//if we are using a declaration and we dont know which type of data is comming / we rae going to store in var at that time we use unknown
//while writing an api call we have to strictly write which datatype we are going to pass to function and its return type
