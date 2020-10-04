const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    
};

function decode(expr) {
    let result = '';
    let currLetterMorse;
    let currCode;
    let currSymbol;
    let arrExpr = expr.split('');
  
    for (let i = 0; i < arrExpr.length; i = i+10) {
        currLetterMorse = ''; 
        currCode = arrExpr.slice( i, i + 10);
        console.log (currCode);
        if (currCode.join('') === '**********' ) {
            result = result + ' ';
        } else {
            for (j = 0; j < currCode.length; j = j+2) {
                currSymbol = '' + currCode[j] + currCode[j+1];
                console.log(currSymbol);
                if (currSymbol === '10') {
                    currLetterMorse = currLetterMorse + '.';
                }
                if (currSymbol === '11') {
                    currLetterMorse = currLetterMorse + '-';
                }
              console.log(currLetterMorse);
            }

            result = result + MORSE_TABLE[currLetterMorse];

        }
    }
 
    return result;
}


module.exports = {
    decode
}