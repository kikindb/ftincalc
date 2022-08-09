export interface Rest {
  numerator: number;
  denominator: number;
}

export default class Calculable {
  private feets: number;
  private inches: number;
  private rest: Rest;

  constructor(feets: number, inches: number, rest: Rest) {
    this.feets = feets;
    this.inches = inches;
    this.rest = rest;
  }

  getFeets() {
    return this.feets;
  }

  setFeets(feets: number) {
    this.feets = feets;
  }

  getInches() {
    return this.inches;
  }

  setInches(inches: number) {
    this.inches = inches;
  }

  getRest() {
    return this.rest;
  }

  setRest(rest: Rest) {
    this.rest = rest;
  }
}
