// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");
const caesarModule = require("../src/caesar");

describe("caesar", () => {
    it("should shift the message's letters by the value given to create a new message", () => {
        const input = "thinkful";
        const shift = 1;

        const expected = "uijolgvm";
        const actual = caesar(input, shift);

        expect(actual).to.equal(expected);
    });
    it ("should return false if the given value is 0", () => {
        const input = "thinkful";
        const shift = 0;

        const actual = caesar(input, shift);
        console.log("result", actual);
        
        expect(actual).to.equal(false);
    })
})