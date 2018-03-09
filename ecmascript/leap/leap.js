export default class Year {
    constructor(year) {
        this.determineYearFactor = determineFactor(year);
    }

    isLeap() {
        const isDivisBy4 = this.determineYearFactor(4);
        const isNotDivisBy100 = !this.determineYearFactor(100);
        const isDivisBy400 = this.determineYearFactor(400);

        return (isNotDivisBy100 || isDivisBy400) && isDivisBy4;
    }
}

function determineFactor(value){
    return (n => value % n === 0);
}