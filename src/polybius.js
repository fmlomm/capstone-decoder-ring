// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
 let alphabet = 'abcedfghijlklmnopqrstuvwxyz';
 const decodingAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', '(i/j)', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];
 const ciperArray = [11, 21, 31, 41, 51, 12, 22, 32, 42, 52, 13, 23, 33, 43, 53, 14, 24, 34, 44, 54, 15, 25, 35, 45, 55, 00];
 let square = {1: ['a', 'b', 'c', 'd', 'e'], 2: ['f', 'g', 'h', '(i/j)', 'k'], 3: ['l', 'm', 'n', 'o', 'p'], 4: ['q', 'r', 's', 't', 'u'], 5: ['v', 'w', 'x', 'y', 'z']};

// create encoder helper function for use in polybius function later
  function decoder(input) {
// uses regex to replace spaces with 00 to use our decoding and encoding tools
    let fixedInput = input.replace(/ /g, '00')
// if input has less than two numbers, return false as it does not use the polybius square terminology
    if (fixedInput.length % 2 != 0) return false;
//  uses regex check to see if 
    let inputArray = fixedInput.match(/../g);

    let output = '';
    for (let i = 0; i < inputArray.length; i++) {
      if(inputArray[i] == '00') {
        output += ' ';
      } else {
        let alphabetIndex = ciperArray.indexOf(Number(inputArray[i]))
        output += decodingAlpha[alphabetIndex]
      }
    }
    return output
  };

  function encoder(input) {
// set string to lowercase so we don't have to deal with capital letters
  let fixedInput = input.toLowerCase();
  let output = '';

  for (let i = 0; i < fixedInput.length; i++) {
    if (!alphabet.includes(fixedInput[i])) {
      output += fixedInput[i];
    }
    if (fixedInput[i] == 'i' || fixedInput[i] == 'j') {
      output += '42'
    }
    for (let row in square) {
      if (square[row].includes(fixedInput[i])) {
        output += `${square[row].indexOf(fixedInput[i])+1}` + `${row}`
      }
    }
  }
  for (let j = 0; j < output.length; j++) {
    output = output.replace('-', '')
  }
  return output
};


  function polybius(input, encode = true) {
    // your solution code here
    if (encode) {
      return encoder(input)
    } else {
      return decoder(input)
    }
  };



  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
