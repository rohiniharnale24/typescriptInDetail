class employee {
  fname: string; //fields
  lNAme: string;
  //we have to innitialise this fieid in constructor
  constructor(Fname: string, Lname: string) {
    //here this represent employee
    (this.fname = Fname), (this.lNAme = Lname);
  }
}

//bydefault all classes and methods have public access modifier

class dipartment {
  dName: string;
  dId: number;
  constructor(name: string, id: number) {
    (this.dName = name), (this.dId = id);
  }
  findDep() {
    return `this is  department ${this.dName}`;
  }
}

let getDep = new dipartment("IT", 23);

let getDep2 = new dipartment("MEch ", 234);

class car {
  cName: string;
  cPrice: number;
  constructor(carName: string, carPrice: number) {
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
