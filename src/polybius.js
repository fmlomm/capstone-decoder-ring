// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

//  create polybius chart that sets letter to a number for use later, could set as object within array for cleaner organization
  let polybiusChart = [];
// create encoder helper function for use in polybius function later
  function encoder(input) {
// set input to a lowercase string so we don't have to code for capital letters
    let fixedInput = input.toLowerCase();
//  for loop to access each letter in fixedInput
    for (let i = 0; i < fixedInput.length; i++) {
      let firstLetter = fixedInput[i];
// first thoughts: maybe use replace for each firstLetter and replace with number that matches in polybiusChart
    }
  };

  function decoder(input) {
  // no need to use .toLowerCase() here since we are working with numbers
  }
}

  function polybius(input, encode = true) {
    // your solution code here
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
