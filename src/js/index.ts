import "./../scss/styles.scss";
//import * as bootstrap from "bootstrap";
import Calculable from "./Calculable";
import Operations from "./Operations";

const calculable1 = new Calculable(27, 9, { numerator: 3, denominator: 7 });
const calculable2 = new Calculable(48, 8, { numerator: 10, denominator: 16 });
console.log(calculable1);
console.log(calculable2);

const resultCalculable = new Calculable(
  Operations.addFeets(calculable1, calculable2),
  Operations.addInches(calculable1, calculable2),
  Operations.addRest(calculable1, calculable2)
);

console.log({ resultCalculable });
console.log(Operations.calculableToString(resultCalculable));
