function binaryReversal (value) {
    let num = parseInt(value);                                  //num = 47
    let binaryNum = num.toString(2);                            //binaryNum = 101111
    
    let paddedNum = binaryNum.padStart(8, 0);                   //paddedNum = 00101111
    let reversedNum = paddedNum.split('').reverse().join('');   //reversedNum = 11110100
    let result = parseInt(reversedNum, 2);                      //result = 244; parseInt(11110100, 2) converts to decimal
    return result;
  }
  console.log(binaryReversal('47'));
  
console.log(binaryReversal('1'))
console.log(binaryReversal('10'))

module.exports = binaryReversal
