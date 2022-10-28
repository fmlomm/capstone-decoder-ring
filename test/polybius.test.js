// Write your tests here!

const { expect }  = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("should return both i and j when encoding", () => {
        const testA = polybius('i');
        const testB = polybius('j');
        expect(testA).to.equal(testB);
    })
})