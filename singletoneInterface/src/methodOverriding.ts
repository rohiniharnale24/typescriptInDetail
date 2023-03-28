// let cl = console.log;

// //interface
// //protected >>we want a field which available on same class as well as derived class(available on parents as well as derived class)
// //method overriding >> we can use parent class methods as it is in child class
// class Department {
//   //here employee is private bcz we dont want to change employye/ make available employye on depeartment instance
//   // private employee: Array<string> = [];
//   protected employee: Array<string> = [];
//   constructor(public dNAme: string, private readonly did: number) {}
//   public describe() {
//     cl(`this is  department ${this.dNAme} with id ${this.did}`);
//   }
//   public addEmp(empName: string) {
//     this.employee.push(empName);
//   }
// }

// class itDepartment extends Department {
//   constructor(private admin: Array<string>) {
//     super("it dep", 12);
//   }
//   //method overriding
//   addEmp(empName: string) {
//     if (empName === "rohini") {
//       return;
//     } else {
//       this.employee.push(empName);
//     }
//   }
// }

// let itdep = new itDepartment(["pooja", "mahima"]);
// itdep.addEmp("kamal");
// cl(itdep);
