let cl = console.log;
interface IaddFun {
  (n1: number, n2: number): number;
}
let add: IaddFun;

add = (n1: number, n2: number) => {
  //return n1 + n2.toString()>> error
  return n1 + n2;
};

//intersection
//we are combining tw type
