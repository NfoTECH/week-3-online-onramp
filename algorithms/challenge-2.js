function transpose (arr) {
    let result = [];
    for (let row = 0; row < arr.length; row++) {
        for (let column = 0; column < arr[row].length; column++) {
            if (!result[column]) result[column] = [];
            result[column][row] = arr[row][column]
        }
    }
    return result;
}
console.log(transpose([[5,12,17,9,3],[13,4,8,14,1],[9,6,3,7,21]]))

module.exports = transpose
