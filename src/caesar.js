// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const caesarModule = (function () {
  // you can add any code you want within this function scope

  function encoder (input, shift) {
    // create holder variable for end output
    let output = "";
    // create fixedInput so all input is lowercase for simplicity
    let fixedInput = input.toLowerCase();
    // for loop to access fixedInput[i]
    for (let i = 0; i < fixedInput.length; i++) {
    // set variable to hold value of final shifted letter 
      let finalInput = "";
    // set variable to access i in fixedInput
      let firstLetter = fixedInput[i];
    // checks to see if i in fixedInput is a letter, so symbols and spaces won't be affected by shift
        if (firstLetter.match(/[a-z]/i)) {
    // sets variable to grab ascii value of letter at i
          let letterCode = firstLetter.charCodeAt(0);
    // conditional on if letterCode is between the ascii values of lowercase alphabet
            if (letterCode >= 97 && letterCode <= 122) {
              finalInput = String.fromCharCode(((letterCode - 97 + shift) % 26) + 97);
    // conditional to reset back to z if shift goes past a
             if (finalInput.charCodeAt(0) < 97) {
              finalInput = String.fromCharCode(((letterCode - 122 + shift) % 26) + 122);
          }
        }
      } else {
        finalInput = firstLetter;
      }
      output += finalInput;
    }
    return output;
  };

  function decoder (input, shift) {
    // pretty much the same thing as encoder, but switching the if statement 
    let output = "";
    let fixedInput = input.toLowerCase();
      for (let i = 0; i < fixedInput.length; i++) {
        let finalInput = "";
        let firstLetter = fixedInput[i];
        if (firstLetter.match(/[a-z]/i)) {
          let letterCode = firstLetter.charCodeAt(0);
            if (letterCode >= 97 && letterCode <= 122) {
              finalInput = String.fromCharCode(((letterCode - 97 - shift) % 26) + 97);
              if (finalInput.charCodeAt(0) < 97) {
                finalInput = String.fromCharCode(((letterCode - 122 - shift) % 26) + 122);
              }
            }
        } else {
          finalInput = firstLetter;
        }
        output += finalInput;
      }
      return output;
  }

  function caesar(input, shift, encode = true) {
    // return false if shift goes beyond length of alphabet
    if (!shift || shift >= 25 || shift <= -25) return false;
    if (encode) {
      return encoder(input, shift)
    } else {
      return decoder(input, shift)
    }
  }



  return {
    caesar,
  };
})();




module.exports = { caesar: caesarModule.caesar };
