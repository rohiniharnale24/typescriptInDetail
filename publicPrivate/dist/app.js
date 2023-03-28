"use strict";
class employee {
    constructor(Fname, Lname) {
        (this.fname = Fname), (this.lNAme = Lname);
    }
}
class dipartment {
    constructor(name, id) {
        (this.dName = name), (this.dId = id);
    }
    findDep() {
        return `this is  department ${this.dName}`;
    }
}
let getDep = new dipartment("IT", 23);
let getDep2 = new dipartment("MEch ", 234);
class car {
    constructor(carName, carPrice) {
        (this.cName = carName), (this.cPrice = carPrice);
    }
    chooseCar() {
        return ` you can get ${this.cName}`;
    }
}
let car1 = new car("Kia", 120000);
let car2 = new car("suzuki", 234000);
car2.chooseCar();
car2.cName;
car2.cPrice;
