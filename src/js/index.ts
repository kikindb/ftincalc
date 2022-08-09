import "./../scss/styles.scss";
//import * as bootstrap from "bootstrap";
import Calculable from "./Calculable";
import Operations from "./Operations";

const calculable1 = new Calculable(3, 6, { numerator: 0, denominator: 0 });
const calculable2 = new Calculable(5, 7, { numerator: 1, denominator: 2 });
console.log(calculable1);
console.log(calculable2);

const resultCalculable = new Calculable(
  Operations.addFeets(calculable1, calculable2),
  Operations.addInches(calculable1, calculable2),
  Operations.addRest(calculable1, calculable2)
);

console.log({ resultCalculable });
console.log(Operations.calculableToString(resultCalculable));
