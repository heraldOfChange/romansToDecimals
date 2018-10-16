 [RomanToDecimal TDD Kata](https://github.com/TDD-Katas/roman-numerals) - NodeJS Solution
=========================================================================================
## Program Specifications
* A series of roman numerals will be provided to the application.
* These roman numerals have corresponding values and need to be converted.
* We would like to apply a simple formula
    * Reading from right to left in pairs (a & b):
        * If a > b, then add the two values.
        * If b > a, then inverse and subtract a from b.

### Conversion chart
| Symbol  | Value  |
| ------- | ------ |
| I       |    1   |
| V       |    5   |
| X       |   10   |
| L       |   50   |
| C       |  100   |
| D       |  500   |
| M       | 1000   |

#### Example:
| Roman Number  | Computation                                           | Value  | Comment                   |
| ------------- | ----------------------------------------------------- | ------ | ------------------------- |
| MMVI          |  1000 + 1000 + 5 + 1                                  | 2006   | only addition             |
| MCMXLIV       |  1000 + (1000 - 100) + (50 - 10) + (5 - 1)            | 1944   | addition and subtraction  |
| MDMDXLCVI     |  1000 + (1000 - 500) + 500 + 10 + (100 - 50) + 5 + 1  | 2066   | addition and subtraction  |
