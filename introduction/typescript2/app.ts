export {};
//there are 3 object in ts to defined type of data
//type alias
// interface
//class

//typeAlias
let cl = console.log;

type Person = {
  fname: string;
  lname: string;
  age: number;
  skills: string[];
};
//here skills array accept only string values
let person: Person = {
  fname: "jhon",
  lname: "doe",
  age: 33,
  skills: ["html", "js", "css", "angular"],
};

for (const i of person.skills) {
  cl(i.toLocaleLowerCase());
}
//candidate
//admin
//superAdmin
//so candidate has to see only the pages that are related to the candidate profile
//and admin also have to see the admin related pages
//this we our application performance will get improve
//the pages are selected based on user role

//tuple >> array of fixed length
type People = {
  fname: string;
  lname: string;
  age: number;
  // userRole: (string | number)[];
  //tuple
  userRole: [number, string, boolean];
};
let people: People = {
  fname: "rahul",
  lname: "shinde",
  age: 23,
  userRole: [2, "admin", true],
};
//if her ewe dont want to change/add/remove the array element then we use tuples which provides
//fixed length array with fixed data types of elements
//people.userRole[2] = "SuperAdmin";
//whatever data type we are going to assign in tuples we have to Assign value to
// this data type , we cant the order of data types
for (const key in people) {
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
//comming from data base is also number but if data is in string format is it not going to work
//usually in data base value of type is always in string
//if admin is 100 then candidate 101 , super_admin=102
//if we define value = string we have to define its next value also
enum Role {
  //enum = "value"
  admin = "A", //0
  candidate = "C", //1
  super_admin = "SA", //2
}
let person2 = {
  fname: "jhon",
  lname: "doe",
  age: 32,
  userRole: "SA", //admin,candidate
};
cl(Role.super_admin);
//here if we have admin_ in the place of admin then it will not going to work
//here the object is comming form API so its posibility that we can do a mistake while defining a data
//so we write it with enum
if (person2.userRole === Role.candidate) {
  cl(`show both companies and candidate`);
}

if (person2.userRole === Role.super_admin) {
  cl("you are SA");
}

//ordered ,ready for dispatched ,delivered

enum ProductState {
  ordered = "odered",
  readyToDispatched = "RTD",
  shipped = "shipped",
}
