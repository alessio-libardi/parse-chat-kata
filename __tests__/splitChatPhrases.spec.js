const splitChatPhrases = require("../src/splitChatPhrases");

describe("Split chat phrases function", () => {
    test("it should accept a sentence", () => {
        const input = '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        const output = [{
            date: '14:24:32',
            mention: '14:24:32 Customer : ',
            sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            type: 'customer'
        }]

        expect(splitChatPhrases(input)).toEqual(output)
    });
});