function romanToDecimal (roman) {
    roman = roman.toUpperCase();
    let total = 0;
    let i = 0;
    const converter = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    }
    while (i < roman.length) {
        let current = roman[i];
        let next = roman[i + 1];
        if (converter[current] < converter[next]) {
            total += converter[next] - converter[current];
            i += 2;
        } else {
            total += converter[current];
            i++;
        }
    }
    return total
}
console.log(romanToDecimal("XI"))
console.log(romanToDecimal("XCVIII"))
console.log(romanToDecimal("XCix"))
console.log(romanToDecimal("mcmxliv"))

module.exports = romanToDecimal
