'use strict';

describe('class Foo', () => {
    const romansToDecimal = require('./roman-to-decimal-converter')();

    describe('convertToDecimal should translate keys as values', () => {
        [
            ['I', 1],
            ['V', 5],
            ['X', 10],
            ['L', 50],
            ['C', 100],
            ['D', 500],
            ['M', 1000]
        ].forEach(keyvalpair => {
            const key = keyvalpair[0];
            const expected = keyvalpair[1];
            it(`${key} should be ${expected}`, () => {
                expect(romansToDecimal.convertToDecimal(key)).toBe(expected);
            });
        });
    });

    describe('convertToDecimal should calculate formula keys as values', () => {
        [
            ['VI', 6],
            ['DDD', 500 + 500 + 500],
            ['MDCLXVI', 1000 + 500 + 100 + 50 + 10 + 5 + 1],
            ['DMCI', (1000 - 500) + 100 + 1],
            ['LCXVII', (100 - 50) + 10 + 5 + 1 + 1],
            ['MMVI', 1000 + 1000 + 5 + 1],
            ['MCMXLIV', 1000 + (1000 - 100) + (50 - 10) + (5 - 1)]
        ].forEach(keyvalpair => {
            const key = keyvalpair[0];
            const expected = keyvalpair[1];
            it(`${key} should be ${expected}`, () => {
                expect(romansToDecimal.convertToDecimal(key)).toBe(expected);
            });
        });
    });
});