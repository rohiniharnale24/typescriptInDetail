// let cl = console.log;

// //getters and setters
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

// class Accounting extends Department {
//   private lastReport;
//   constructor(id: number, private report: Array<string>) {
//     //here we need to call parent class constructor
//     // here we pass second para from Accounting (child ) constructor
//     //here we didnt use access modifier before id because
//     //we dont want id is a new member it just carring data and assiging that data to parents class Did parameter
//     //if we put access modifier before id it will going to create new member as id
//     super("accounting", id);
//     this.lastReport = report[report.length - 1];
//   }
//   // accessLastReport() {
//   //   return this.lastReport;
//   // }
//   //if we want to use accessLastReport()  as a property then we use get
//   //because of get we can access private properties of class out side the class
//   // get must have return keyword
//   //get its a property not a method
//   get accessLastReport(): string {
//     return this.lastReport;
//   }
//   //set
//   //we can use same name to gettter and setter
//   //in setter one para is must
//   // at a time we can set one value only
//   set acessLastReport(newReport: string) {
//     this.lastReport = newReport;
//   }
// }
// let newAcc = new Accounting(123, ["TDS"]);

// //cl(newAcc.lastReport)//error
// //here we are getting private property of class(lastreport) in method accessLastReport() because this method is public
// cl(newAcc.accessLastReport); //error
