function listSorting(needle, haystack) {

    let x = -1;
    let y = -1;
    let result = [x, y]
    for (let i = 0; i < haystack.length; i++) {
        if (Array.isArray(haystack[i])) {
            for (let j = 0; j < haystack[i].length; j++) {
                if (needle === haystack[i][j]) {
                    x = i;
                    y = j;
                    result = [i,j]
                }
            }
        } else if (needle === haystack[i]) x = i;
    }
    if (y === -1) return x;
    else return result;
}
console.log(listSorting(5, [1, 2, 3, 4, 5]))
console.log(listSorting(5, [1, 2, 3, 4, 4, 4]))
console.log(listSorting(0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))



// Input:

// ```js
// needle: 5;
// haystack: [1, 2, 3, 4, 5];
// ```

// Output: `4`


module.exports = listSorting
