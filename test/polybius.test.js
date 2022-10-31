// Write your tests here!

const { expect }  = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("should return both i and j when encoding", () => {
        const testA = polybius('i');
        const testB = polybius('j');

        expect(testA).to.equal(testB);
    })
    it ("should return (i/j) when decoding 42", () => {
        const actual = polybius("42", false);
        const expected = "(i/j)";

        expect(actual).to.equal(expected);
    })
    it ("should ignore capital letters", () => {
        const actual = polybius("A");
        const expected = polybius("a");

        expect(actual).to.equal(expected);
    })
    it ("should maintain spaces when encoding", () => {
        const actual = polybius("happy birthday eula");
        const expected = "3211535345 2142244432411145 51541311";

        expect(actual).to.equal(expected);
    })
    it ("should maintain spaced when decoding", () => {
        const actual = polybius("3211535345 2142244432411145 51541311", false);
        const expected = "happy b(i/j)rthday eula";

        expect(actual).to.equal(expected);

    })
})
