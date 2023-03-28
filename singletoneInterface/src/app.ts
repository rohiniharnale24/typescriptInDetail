let cl = console.log;
//singletone class(private constructor)
//A class by which we can create only one instance/object

abstract class Department {
  static piscalYear = "2023-2022";
  protected employee: Array<string> = [];
  constructor(protected dNAme: string, private readonly did: number) {}
  public describe() {
    cl(`this is  department ${this.dNAme} with id ${this.did}`);
  }
  public addEmp(empName: string) {
    this.employee.push(empName);
  }
  static createEmp(emp: string) {
    return { empName: emp };
  }
  //abstract
  abstract discribe(): void;
}

cl(Department.createEmp("rohini"));

cl(Department.piscalYear);

/********************************************************** */

class itDepartment extends Department {
  private constructor(private admin: Array<string>) {
    super("it dep", 12);
  }
  //we can use class as a type
  static instance: itDepartment;
  //method overriding
  addEmp(empName: string) {
    if (empName === "rohini") {
      return;
    } else {
      this.employee.push(empName);
    }
  }
  discribe(): void {
    return cl(`this is department ${this.dNAme}`);
  }
  //singletone
  //by applying condition we have restrict constructor to cretae multiple obj
  static getInstance(aname: string) {
    //itDepartment.instance >> is instance from golble scope
    if (itDepartment.instance) {
      return this.instance;
    } else {
      return (this.instance = new itDepartment([aname]));
    }
  }
}

cl(itDepartment.createEmp("rohan"));

cl(itDepartment.piscalYear);
/******************************************************** */
cl(itDepartment.instance);
//here we get undefined bcz we dont have any instance of itdep in global/window scope , so we need to call getinstance
cl(itDepartment.getInstance("meera"));
//but we called getinstance again it will going to create new instance, so here we get the same problem

cl(itDepartment.getInstance("rani"));
/******************************************************** */
// let itdep = new itDepartment(["pooja", "mahima"]);
// itdep.addEmp("kamal");
// cl(itdep);

//whenewer we called class behild the scene constructor will get called
//how many times we are  creating constructor that many times constructor will get called
//to avoid this we can make consrtuctor private(but here we cant create one single instance)
//but we can call constructor inside the class

// let dep = new itDepartment(["meera"]);
// cl(dep);
// let dep1 = new itDepartment(["rashmi", "seema"]);
// cl(dep1);
