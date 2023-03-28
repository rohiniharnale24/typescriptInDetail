"use strict";
let cl = console.log;
class Department {
    constructor(dNAme, did) {
        this.dNAme = dNAme;
        this.did = did;
        this.employee = [];
    }
    describe() {
        cl(`this is  department ${this.dNAme} with id ${this.did}`);
    }
    addEmp(empName) {
        this.employee.push(empName);
    }
    static createEmp(emp) {
        return { empName: emp };
    }
}
Department.piscalYear = "2023-2022";
cl(Department.createEmp("rohini"));
cl(Department.piscalYear);
class itDepartment extends Department {
    constructor(admin) {
        super("it dep", 12);
        this.admin = admin;
    }
    addEmp(empName) {
        if (empName === "rohini") {
            return;
        }
        else {
            this.employee.push(empName);
        }
    }
    discribe() {
        return cl(`this is department ${this.dNAme}`);
    }
    static getInstance(aname) {
        if (itDepartment.instance) {
            return this.instance;
        }
        else {
            return (this.instance = new itDepartment([aname]));
        }
    }
}
cl(itDepartment.createEmp("rohan"));
cl(itDepartment.piscalYear);
cl(itDepartment.instance);
cl(itDepartment.getInstance("meera"));
cl(itDepartment.getInstance("rani"));
