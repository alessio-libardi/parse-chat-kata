const sentenceToMessage = require("../src/sentenceToMessage");

describe("Split chat phrases function", () => {
    test("it should accept a single sentence", () => {
        const input = '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        const output = {
            date: '14:24:32',
            mention: '14:24:32 Customer : ',
            sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            type: 'customer'
        }

        expect(sentenceToMessage(input)).toEqual(output)
    });

    test("it should accept a single sentence with an ending new line", () => {
        const input = '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n'
        const output = {
            date: '14:24:32',
            mention: '14:24:32 Customer : ',
            sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n',
            type: 'customer'
        }

        expect(sentenceToMessage(input)).toEqual(output)
    });
});