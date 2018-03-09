export default class Year {
    constructor(year) {
        this.year = year;
    }

    isLeap() {
        const isDivisBy4 = this.year % 4 === 0;
        const isNotDivisBy100 = this.year % 100 !== 0;

        return isNotDivisBy100 && isDivisBy4;
    }
}