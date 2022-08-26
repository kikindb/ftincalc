import "./../scss/styles.scss";
//import * as bootstrap from "bootstrap";
import Calculable, { Rest } from "./Calculable";
import Operations from "./Operations";

const $ = (selector: string) => document.querySelector(selector);
const $inputFeet1 = $("#feetInput1") as HTMLInputElement;
const $inputFeet2 = $("#feetInput2") as HTMLInputElement;
const $inputInches1 = $("#inchesInput1") as HTMLInputElement;
const $inputInches2 = $("#inchesInput2") as HTMLInputElement;
const $inputRest1 = $("#restInput1") as HTMLInputElement;
const $inputRest2 = $("#restInput2") as HTMLInputElement;
const $inputAnswer = $("#answerInput") as HTMLInputElement;
const $btnCalculate = $("#calculateBtn") as HTMLButtonElement;

$btnCalculate.addEventListener("click", (event: Event) => {
  event.preventDefault;
  const feet1 = parseInt($inputFeet1.value) || 0;
  const inch1 = parseInt($inputInches1.value) || 0;
  const feet2 = parseInt($inputFeet2.value) || 0;
  const inch2 = parseInt($inputInches2.value) || 0;
  let rest1: Rest = {
    numerator: 0,
    denominator: 0,
  };
  let rest2: Rest = {
    numerator: 0,
    denominator: 0,
  };

  if ($inputRest1.value) {
    rest1 = {
      numerator: parseInt($inputRest1.value.replace(/\/\d/g, "")),
      denominator: parseInt($inputRest1.value.replace(/\d\//g, "")),
    };
  }

  if ($inputRest2.value) {
    rest2 = {
      numerator: parseInt($inputRest2.value.replace(/\/\d/g, "")),
      denominator: parseInt($inputRest2.value.replace(/\d\//g, "")),
    };
  }

  const calculable1 = new Calculable(feet1, inch1, rest1);
  const calculable2 = new Calculable(feet2, inch2, rest2);

  const resultCalculable = new Calculable(
    Operations.addFeets(calculable1, calculable2),
    Operations.addInches(calculable1, calculable2),
    Operations.addRest(calculable1, calculable2)
  );

  const stringResult = Operations.calculableToString(resultCalculable);

  $inputAnswer.value = stringResult;
});
