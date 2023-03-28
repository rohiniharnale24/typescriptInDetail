// //static methods are availble on the class .
// //if static method is available on parent then it also available on itas child
// //static property are available on its class and it atomatically derived to ts child class
// // static propertes are  not availble on instatce

// let cl = console.log;

// class Department {
//   //here employee is private bcz we dont want to change employye/ make available employye on depeartment instance
//   // private employee: Array<string> = [];
//   static piscalYear = "2023-2022";
//   protected employee: Array<string> = [];
//   constructor(public dNAme: string, private readonly did: number) {}
//   public describe() {
//     cl(`this is  department ${this.dNAme} with id ${this.did}`);
//   }
//   public addEmp(empName: string) {
//     this.employee.push(empName);
//   }
//   static createEmp(emp: string) {
//     return { empName: emp };
//   }
// }
// //we can call static properties by using class name
// //classname.statuc property
// cl(Department.createEmp("rohini"));
// let newdep = new Department("rsni", 345);

// //newdep.createEmp() error >> static methods are not available on its instatance
// //static properties are available on class as well as its child clASS
// cl(Department.piscalYear);

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

// //static peoperty of a class also avilable on it child class
// cl(itDepartment.createEmp("rohan"));

// ///static properties are available on class as well as its child clASS
// cl(itDepartment.piscalYear);

// let itdep = new itDepartment(["pooja", "mahima"]);
// itdep.addEmp("kamal");
// cl(itdep);

// class Accounting extends Department {
//   private lastReport;
//   constructor(id: number, private report: Array<string>) {
//     super("accounting", id);
//     this.lastReport = report[report.length - 1];
//   }

//   get accessLastReport(): string {
//     return this.lastReport;
//   }

//   set acessLastReport(newReport: string) {
//     this.lastReport = newReport;
//   }
// }
// let newAcc = new Accounting(123, ["TDS"]);

// //cl(newAcc.lastReport)//error
// //here we are getting private property of class(lastreport) in method accessLastReport() because this method is public
// cl(newAcc.accessLastReport); //error
