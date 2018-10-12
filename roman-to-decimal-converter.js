'use strict';

class RomanToDecimalConverter {
    constructor() {
        this.model = {
            '0': 0,
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };
    }

    convertToDecimal(numericStr) {
        return (numericStr.length === 1) ?
            this.model[numericStr] : this.aggregate(numericStr);
    }

    aggregate(str) {
        const result = this.splitArray(str.split(''));
        return result
            .map(x => this.convertToDecimal(x))
            .reduce(this.reducer, [])
            .map(this.reduceFormula)
            .reduce((a, b) => a + b);
    }

    splitArray(splitArr) {
        if (splitArr.length % 2 !== 0) splitArr.unshift('0');
        return splitArr;
    }

    reducer(result, value, index, array) {
        if (index % 2 === 0)
            result.push(array.slice(index, index + 2));
        return result;
    }

    reduceFormula(a) {
        return a[0] >= a[1] ? a[0] + a[1] : a[1] - a[0];
    }
}

module.exports = () => new RomanToDecimalConverter();