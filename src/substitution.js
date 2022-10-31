// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const substitutionModule = (function () {
  // variable to store trueAlphabet for use in encoder and decoder
  let trueAlphabet = "abcdefghijklmnopqrstuvwxyz";

  // checks to see that all letters / symbols of given alphabet are unique
  function alphabetCheck(alphabet) {
    return new Set(alphabet).size == alphabet.length;
  } 

  function encoder(input, alphabet) {
    let output = "";
  // checks if alphabet is missing, and return false 
    if (!alphabet) return false;
  // allows function to ignore uppercase letters
    input = input.toLowerCase();
    // if alphabet is empty, return false
    let alphabetTest = alphabetCheck(alphabet);
    // if alphabetTest fails, return false
    if (!alphabetTest) return false;
    // if alphabet is not 26 items long, return false
    if (alphabet.length != 26) return false;

    // alphabet param should exactly be 26 characters, if it is, iterate, if not return false
      for (let i = 0; i < input.length; i++) {
        let firstLetter = input[i];
        // ignore capital letters
          // edge cases : spaces should be ignored, and added to output
          if (firstLetter == " ") {
              output += " "
          // add given alphabet to output at location of trueAlphabet
          } else {
            let index = trueAlphabet.indexOf(firstLetter);
            output += alphabet[index]
        }
      }
      return output;
    }
    

  function decoder (input, alphabet) {
    let output = "";
   // if alphabet is empty, return false
    if (!alphabet) return false;
    input = input.toLowerCase();
    
    let alphabetTest = alphabetCheck(alphabet);
  // if alphabetTest fails, return false
    if (!alphabetTest) return false;
  // return false if alphabet is not 26 items long
    if (alphabet.length != 26) return false;

      for (let i = 0; i < input.length; i++) {
        let firstLetter = input[i];
          if (firstLetter == " ") {
            output += " "
          } else {
            let index = alphabet.indexOf(firstLetter);
            output += trueAlphabet[index];
          }
      }
    return output;
  }

  

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (encode) {
      return encoder(input, alphabet)
    } else {
      return decoder(input, alphabet)
    }
  }


  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };



