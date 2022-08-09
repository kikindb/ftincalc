import "./../scss/styles.scss";
class Calculable {
    constructor(feets, inches, rest) {
        this.feets = feets;
        this.inches = inches;
        this.rest = rest;
    }
    getFeets() {
        return this.feets;
    }
    setFeets(feets) {
        this.feets = feets;
    }
    getInches() {
        return this.inches;
    }
    setInches(inches) {
        this.inches = inches;
    }
    getRest() {
        return this.rest;
    }
    setRest(rest) {
        this.rest = rest;
    }
}
const calculable1 = new Calculable(1, 1, { numerator: 1, denominator: 2 });
console.log(calculable1);
//# sourceMappingURL=index.js.map