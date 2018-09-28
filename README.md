 RomanToDecimal
================

# program specifications

- convert from roman numerals to decimal numerals.

| Symbol  | Value    |
| ------- | -------- |
| I       |    1     |
| V       |    5     |
| X       |   10     |
| L       |   50     |
| C       |  100     |
| D       |  500     |
| M       | 1000     |

- numbers are formed by combining symbols together and adding the values. 
- generally, symbols are placed in order of value, starting with the largest values. when smaller values precede larger values, the smaller values are subtracted from the larger values, and the result is added to the total. 

Example:

| Roman Number  | Computation                                    | Value      | Comment                         |
| ------------- | ---------------------------------------------- | ---------- | ------------------------------- |
| MMVI          |  1000 + 1000 + 5 + 1                           | 2006       | only addition                   |
| MCMXLIV       |  1000 + (1000 - 100) + (50 - 10) + (5 - 1)     | 1944       | addition and substraction       |
