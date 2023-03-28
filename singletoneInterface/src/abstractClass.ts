// let cl = console.log;
// //abstract class(imp)
// //if we write abstract method in class , we have to make that class also abstract
// //if we write abstract method in class ,then its mandatory to write this method on its child class
// //when we dont want to write function defination on parents class but we want to write it on child class
// //protected >>
// abstract class Department {
//   static piscalYear = "2023-2022";
//   protected employee: Array<string> = [];
//   constructor(protected dNAme: string, private readonly did: number) {}
//   public describe() {
//     cl(`this is  department ${this.dNAme} with id ${this.did}`);
//   }
//   public addEmp(empName: string) {
//     this.employee.push(empName);
//   }
//   static createEmp(emp: string) {
//     return { empName: emp };
//   }
//   //abstract
//   abstract discribe(): void;
// }

// cl(Department.createEmp("rohini"));
// //let newdep = new Department("rani", 345);
// //Cannot create an instance of an abstract class.
// cl(Department.piscalYear);

// //its mandatory to add discribe method on itDepartment
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
//   discribe(): void {
//     return cl(`this is department ${this.dNAme}`);
//   }
// }

// cl(itDepartment.createEmp("rohan"));

// cl(itDepartment.piscalYear);

// let itdep = new itDepartment(["pooja", "mahima"]);
// itdep.addEmp("kamal");
// cl(itdep);
