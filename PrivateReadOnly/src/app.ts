let cl = console.log;

//bydefault all methods are public
//public >>> a  class member(properties/methods) which is available on class / subclass / on its instanace
//private >> available on the same class not on child class
//private >> if we dont want to change the value of method from instance
// class Department {
//   public dName: string;
//   public dID: number;
//   private employees: Array<string> = [];
//   public constructor(name: string, id: number) {
//     this.dName = name;
//     this.dID = id;
//   }
//   public describe() {
//     cl(`this is department ${this.dName} with id ${this.dID}`);
//   }
//   public addEmp(empNAme: string): void {
//     this.employees.push(empNAme);
//   }
// }
// let department = new Department("IT", 234);
// department.describe();
//here we can change /add value in employees from obj also
// if we dont want to change the value of methods from outside(on instance)
///then we have to make that method(field)private
//department.employees.push("mech");>>error >>Property 'employees' is private and only accessible within class 'Department'.

//short hand innitializer
class Department {
  private employees: Array<string> = [];
  //for short hand access modifier and data type is important
  public constructor(public name: string, readonly id: number) {
    //   this.dName = name;
    //   this.dID = id;
  }
  public describe() {
    //Cannot assign to 'id' because it is a read-only property.
    // this.id = 2344;
    cl(`this is department ${this.name} with id ${this.id}`);
  }
  public addEmp(empNAme: string): void {
    this.employees.push(empNAme);
  }
}
let department = new Department("IT", 234);
department.describe();

//ideally if we dont want to change field from instance ( from outside of object)
// then we also dont want to change the fields value from inside the class
//if we dont want to change the value of property once its innitialize
//then we use readonly
//here we innitialize id when we create instance of department so we cant reannitialize id again

//extends //inheritance
//is for we want properties of department + we want tp add some more properties to it Department

class ItDep extends Department {
  //here id just carry the value that are comming from department constructor id so we dont need to put access modifier
  constructor(id: number, public admin: string) {
    //here we must have to call super class constructor
    //with its no. pof arguments
    super("it", 23);
  }
}
//if subclass have its own constructor
let itdep = new ItDep(30, "may");

//let itdep = new ItDep("mech", 90);
//heree itDep is subcclass of department as itdep dont have oits own constructor
// so it will call its parents constructor i.e department
cl(itdep);
cl(itdep.describe());
//here itdep prototype is ItDep , and ItDep prototype is department
