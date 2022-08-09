import { describe, it, expect } from "vitest";
import Calculable from "./Calculable";
import Operations from "./Operations";

describe("Index", () => {
  it("should print correct result", () => {
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

    expect(resultString).toBe("76 ft 6 3/56 in");
  });
  it("should work", () => {
    const calculable1 = new Calculable(102, 6, {
      numerator: 3,
      denominator: 8,
    });
    const calculable2 = new Calculable(3, 9, {
      numerator: 2,
      denominator: 5,
    });
    const resultCalculable = new Calculable(
      Operations.addFeets(calculable1, calculable2),
      Operations.addInches(calculable1, calculable2),
      Operations.addRest(calculable1, calculable2)
    );
    const resultString = Operations.calculableToString(resultCalculable);
    expect(resultString).toBe("106 ft 3 31/40 in");
  });

  it("should calculate with 0 feet", () => {
    const calculable1 = new Calculable(0, 6, {
      numerator: 5,
      denominator: 16,
    });
    const calculable2 = new Calculable(0, 1, {
      numerator: 1,
      denominator: 2,
    });
    const resultCalculable = new Calculable(
      Operations.addFeets(calculable1, calculable2),
      Operations.addInches(calculable1, calculable2),
      Operations.addRest(calculable1, calculable2)
    );
    const resultString = Operations.calculableToString(resultCalculable);
    expect(resultString).toBe("0 ft 7 13/16 in");
  });

  it("should work with 0 inches", () => {
    const calculable1 = new Calculable(1, 0, {
      numerator: 1,
      denominator: 2,
    });
    const calculable2 = new Calculable(2, 0, {
      numerator: 1,
      denominator: 2,
    });
    const resultCalculable = new Calculable(
      Operations.addFeets(calculable1, calculable2),
      Operations.addInches(calculable1, calculable2),
      Operations.addRest(calculable1, calculable2)
    );
    const resultString = Operations.calculableToString(resultCalculable);
    expect(resultString).toBe("3 ft 1 in");
  });

  it("should calculate with 0 rest", () => {
    const calculable1 = new Calculable(3, 6, {
      numerator: 0,
      denominator: 0,
    });
    const calculable2 = new Calculable(5, 7, {
      numerator: 1,
      denominator: 2,
    });
    const resultCalculable = new Calculable(
      Operations.addFeets(calculable1, calculable2),
      Operations.addInches(calculable1, calculable2),
      Operations.addRest(calculable1, calculable2)
    );
    const resultString = Operations.calculableToString(resultCalculable);
    expect(resultString).toBe("9 ft 1 1/2 in");
  });

  it("should work with all zeros", () => {
    const calculable1 = new Calculable(0, 0, {
      numerator: 0,
      denominator: 0,
    });
    const calculable2 = new Calculable(0, 0, {
      numerator: 0,
      denominator: 0,
    });
    const resultCalculable = new Calculable(
      Operations.addFeets(calculable1, calculable2),
      Operations.addInches(calculable1, calculable2),
      Operations.addRest(calculable1, calculable2)
    );
    const resultString = Operations.calculableToString(resultCalculable);
    expect(resultString).toBe("0 ft 0 in");
  });
});
