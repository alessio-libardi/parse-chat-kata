const sentenceToName = require("../src/sentenceToName");

describe("Sentence to name function", () => {
    test("it should accept a simple name", () => {
        const input = '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        const output = 'Customer'

        expect(sentenceToName(input)).toEqual(output)
    });

    test("it should accept a name with spaces", () => {
        const input = '14:24:32 Alessio Libardi : Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        const output = 'Alessio Libardi'

        expect(sentenceToName(input)).toEqual(output)
    });
});