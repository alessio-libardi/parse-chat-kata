const conversationToChat = require("../src/conversationToChat");

describe("Split chat phrases function", () => {
    test("it should accept a single sentence", () => {
        const input = '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        const output = [{
            date: '14:24:32',
            mention: '14:24:32 Customer : ',
            sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            type: 'customer'
        }]

        expect(conversationToChat(input)).toEqual(output)
    });

    test("it should accept two sentences", () => {
        const input = `14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus.`
        const output = [{
            date: '14:24:32',
            mention: '14:24:32 Customer : ',
            sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n',
            type: 'customer'
        }, {
            date: '14:26:15',
            mention: '14:26:15 Agent : ',
            sentence: 'Aliquam non cursus erat, ut blandit lectus.',
            type: 'agent'
        }]

          
        expect(conversationToChat(input)).toEqual(output)
    });
});