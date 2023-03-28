"use strict";
let cl = console.log;
let user1;
class Person {
    constructor(name, lname, age, dname, dnum) {
        this.name = name;
        this.lname = lname;
        this.age = age;
        this.dname = dname;
        this.dnum = dnum;
    }
    greed(phrase) {
        cl(`${phrase} ${this.name}`);
    }
    add(n1, n2) {
        return n1 + n2;
    }
}
