"use strict";
exports.__esModule = true;
//there are 3 object in ts to defined type of data
//type alias
// interface
//class
//typeAlias
var cl = console.log;
//here skills array accept only string values
var person = {
    fname: "jhon",
    lname: "doe",
    age: 33,
    skills: ["html", "js", "css", "angular"]
};
for (var _i = 0, _a = person.skills; _i < _a.length; _i++) {
    var i = _a[_i];
    cl(i.toLocaleLowerCase());
}
var people = {
    fname: "rahul",
    lname: "shinde",
    age: 23,
    userRole: [2, "admin", true]
};
//if her ewe dont want to change/add/remove the array element then we use tuples which provides
//fixed length array with fixed data types of elements
//people.userRole[2] = "SuperAdmin";
//whatever data type we are going to assign in tuples we have to Assign value to
// this data type , we cant the order of data types
for (var key in people) {
    cl(people[key]);
}
//bydefault here push /pop methods works
people.userRole.push("hello");
cl(people);
people.userRole.pop();
cl(people);
//enum
//here we are declaring enum for userRole
//var values are also important while fetching data from database
//bydefault admin =0, candidate = 1, super_admin = 2 this value works when data
//comming from data base is also number
//but data that are comming from data base has value in string it will not work
//usually in data base value of type is always in string
//if admin is 100 then candidate 101 , super_admin=102
//if we define value = string we have to define its next value also
var Role;
(function (Role) {
    //enum = "value"
    Role["admin"] = "A";
    Role["candidate"] = "C";
    Role["super_admin"] = "SA";
})(Role || (Role = {}));
var person2 = {
    fname: "jhon",
    lname: "doe",
    age: 32,
    userRole: "SA"
};
cl(Role.super_admin);
//here if we have admin_ in the place of admin then it will not going to work
//here the object is comming form API so it is posibility that we can do a mistake while defining a data
//so we write it with enum
if (person2.userRole === Role.candidate) {
    cl("show both companies and candidate");
}
if (person2.userRole === Role.super_admin) {
    cl("you are SA");
}
//ordered ,ready for dispatched ,delivered
var ProductState;
(function (ProductState) {
    ProductState["ordered"] = "odered";
    ProductState["readyToDispatched"] = "RTD";
    ProductState["shipped"] = "shipped";
})(ProductState || (ProductState = {}));
