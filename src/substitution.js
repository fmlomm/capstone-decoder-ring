// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function encoder(input, alphabet) {
    return input
  }

  function decoder (input, alphabet) {
    return input
  }

  

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let output = "";

    let letters = new Set ([]);
    // alphabet param should exactly be 26 characters, which could include special characters
    if (alphabet.length == 26) {
      for (let i = 0; i < input.length; i++) {
        let firstLetter = input[i];
         // check to make sure all characters in alphabet are unique, else return false 
        if (letters.has(firstLetter)) {
          return false;
        }
        // ignore capital letters
        if (firstLetter.toLowerCase() === firstLetter) {
          // edge cases : spaces should be ignored
          if (firstLetter != " ") {

          } 
        }






      }
    
  } else {
    return false;
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

// how to implement (encoder) : check string , and input[i] replace with given substitution alphabet
// how to implement (decoder) : set string to lowercase, check string, and replace string[i] with regular alphabet


