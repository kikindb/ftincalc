import { describe, it, expect } from "vitest";
import Calculable from "./Calculable";
import Operations from "./Operations";

describe("Index", () => {
  it("should print correct results", () => {
    const calculable1 = new Calculable(27, 9, { numerator: 3, denominator: 7 });
    const calculable2 = new Calculable(48, 8, {
      numerator: 10,
      denominator: 16,
    });
    const resultCalculable = new Calculable(
      Operations.addFeets(calculable1, calculable2),
      Operations.addInches(calculable1, calculable2),
      Operations.addRest(calculable1, calculable2)
    );
    const resultString = Operations.calculableToString(resultCalculable);

    expect(resultString).toBe("76 ft 6 6/112 in");
  });
});
