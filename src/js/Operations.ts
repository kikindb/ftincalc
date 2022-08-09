import Calculable, { Rest } from "./Calculable";

export default class Operations {
  static addFeets(calculable1: Calculable, calculable2: Calculable) {
    const result = calculable1.getFeets() + calculable2.getFeets();
    return result;
  }
  static addInches(calculable1: Calculable, calculable2: Calculable) {
    const result = calculable1.getInches() + calculable2.getInches();
    return result;
  }

  static addRest(calculable1: Calculable, calculable2: Calculable) {
    const denom1 = calculable1.getRest().denominator;
    const denom2 = calculable2.getRest().denominator;
    const num1 = calculable1.getRest().numerator;
    const num2 = calculable2.getRest().numerator;
    let restResult: Rest = {
      numerator: 0,
      denominator: 0,
    };
    if (denom1 === denom2) {
      const addNumerators = num1 + num2;
      restResult = {
        numerator: addNumerators,
        denominator: denom1,
      };
    }
    if (denom1 !== denom2) {
      const commonDenom = denom1 * denom2;
      const numeratorResult =
        (commonDenom / denom1) * num1 + (commonDenom / denom2) * num2;
      console.log("special calc...", commonDenom);
      restResult = {
        numerator: numeratorResult,
        denominator: commonDenom,
      };
    }
    return restResult;
  }

  static calculableToString(calculable: Calculable): string {
    let result = "";
    let feets = calculable.getFeets();
    let inches = calculable.getInches();
    let rest = { ...calculable.getRest() };

    let restString = "";

    if (rest.numerator === rest.denominator) {
      inches += 1;
      rest.numerator = 0;
      rest.denominator = 0;
    } else {
      if (rest.numerator > rest.denominator) {
        console.log("olv");
        const parte = rest.numerator / rest.denominator;
        const entero = Math.trunc(parte);
        const dec = parte - entero;
        console.log({ parte });
        console.log({ entero });
        console.log({ dec });
        inches += entero;
        const r2 = entero / dec;
        console.log({ r2 });
        console.log(rest.numerator);
        rest.numerator = Math.trunc(rest.numerator - rest.denominator);
        if (dec > 0) {
        }
      }
      restString = `${rest.numerator}/${rest.denominator} `;
    }

    while (inches >= 12) {
      inches -= 12;
      feets += 1;
    }

    result += `${feets} ft ${inches} ${restString}in`;
    return result;
  }
}
