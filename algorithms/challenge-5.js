//DO NOT EDIT THIS OBJECT
//ONLY USE IT IN YOUR CODE TO TRANSLATE
//MORSE SYMBOLS TO REGULAR TEXT
const MORSE_CODE = {
  '-.-.--': '!',
  '.-..-.': '"',
  '...-..-': '$',
  '.-...': '&',
  '.----.': "'",
  '-.--.': '(',
  '-.--.-': ')',
  '.-.-.': '+',
  '--..--': ',',
  '-....-': '-',
  '.-.-.-': '.',
  '-..-.': '/',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '..--..': '?',
  '.--.-.': '@',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '..--.-': '_',
  '...---...': 'SOS'
}

Object.freeze(MORSE_CODE)

function morse(text) {
  if (text === "") return "";
  if (typeof text !== "string") throw new Error("Please pprovide a morse string");
  const input = text.trim()
  const words = input.split(/\s{3,}/);

  let result = "";
  words.forEach((word => {
    word.split(' ').forEach((char) => {
      result += MORSE_CODE[char]
    })
    result += " ";
  }))
  return result.trim();
}
console.log((morse('...---...')))
console.log(morse('...   ---   ...'))
console.log(morse('-.. . -.-. .-   -.. . ...-'))

module.exports = morse
