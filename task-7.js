"use strict";
const sumAll = (...numbers) => {
    const total = numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
    return total;
};
console.log(sumAll(1, 2, 3, 4));
