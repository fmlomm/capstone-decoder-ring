// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // return false if 
    if (!shift || shift >= 25 || shift <= -25) {
      return false;
    };
    // create holder variable for end output
    let output = "";
    let newalpha = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    // create new var to set input to all lowercase
    let lowerCaseString = input.toLowerCase();
    //  for loop for the new shifted alphabet
    for (let i = 0; i < alphabet.length; i++) {
      let offset = (i + shift) % alphabet.length;
      newalpha += alphabet[offset];
    }
      for (let i = 0; i < lowerCaseString.length; i++) {
        let index = alphabet.indexOf(lowerCaseString[i]);
        if (index === -1 ) {
          output += " ";
        } else {
          output += newalpha[index];
        }
      }
      return output;

  }
  console.log(caesar("happy birthday eula", 5));
  return {
    caesar,
  };
})();




module.exports = { caesar: caesarModule.caesar };
