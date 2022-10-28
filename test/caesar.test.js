// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");


describe("caesar", () => {
    it("should encode the input by the value of shift in terms of ASCII to create an encoded output", () => {
        const input = "thinkful";
        const shift = 1;

        const expected = "uijolgvm";
        const actual = caesar(input, shift);

        expect(actual).to.equal(expected);
        console.log("result", actual)
    });
    it("should return false if the shift value is 0", () => {
        const input = "thinkful";
        const shift = 0;

        const actual = caesar(input, shift);
        
        expect(actual).to.equal(false);
        console.log("result", actual);
    });
    it("should decode the given input to reveal a hidden message", () => {
        const input = "uijolgvm";
        const shift = 1;

        const expected = "thinkful";
        const actual = caesar(input, shift, false);
        
        expect(actual).to.equal(expected);
        console.log("result", actual);
    });
    it("should ignore spaces, symbols, and not be case sensitive for the input", () => {
        const input = "HaPpY bIrThDaY eUlA";
        const shift = 24;

        const expected = "fynnw zgprfbyw csjy";
        const actual = caesar(input, shift);

        expect(actual).to.equal(expected);
        console.log("result", actual);

    })
})