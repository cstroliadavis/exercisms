export default class Year {
    constructor(year) {
        this.year = year;
    }

    isLeap() {
        const determineYearFactor = determineFactor(this.year);
        const [isDivisBy4, isDivisBy100, isDivisBy400] = [4, 100, 400]
            .map(determineYearFactor);
        const isNotDivisBy100 = !isDivisBy100;

        return (isNotDivisBy100 || isDivisBy400) && isDivisBy4;
    }
}

function determineFactor(value){
    return (n => value % n === 0);
}