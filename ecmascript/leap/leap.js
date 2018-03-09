export default class Year {
    constructor(year) {
        this.year = year;
    }

    isLeap() {
        const [isDivisBy4, isDivisBy100] = [4, 100]
            .map(n => this.year % n === 0);
        const isNotDivisBy100 = !isDivisBy100;

        return isNotDivisBy100 && isDivisBy4;
    }
}