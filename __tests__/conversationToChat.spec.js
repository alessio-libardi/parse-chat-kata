const conversationToChat = require("../src/conversationToChat");

describe("Conversation to chat function", () => {
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

    test("it should accept a full chat", () => {
        const input = `14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus.
14:27:00 Customer : Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.
14:27:47 Agent : Vestibulum tempor diam eu leo molestie eleifend.`
        const output = [{
            date: '14:24:32',
            mention: '14:24:32 Customer : ',
            sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n',
            type: 'customer'
          }, {
            date: '14:26:15',
            mention: '14:26:15 Agent : ',
            sentence: 'Aliquam non cursus erat, ut blandit lectus.\n',
            type: 'agent'
          }, {
            date: '14:27:00',
            mention: '14:27:00 Customer : ',
            sentence: 'Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.\n',
            type: 'customer'
          }, {
            date: '14:27:47',
            mention: '14:27:47 Agent : ',
            sentence: 'Vestibulum tempor diam eu leo molestie eleifend.',
            type: 'agent'
          }]

          expect(conversationToChat(input)).toEqual(output)
    })

    test("it should accept two customer mentions as start", () => {
        const input = `14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
14:27:00 Customer : Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.
14:27:47 Agent : Vestibulum tempor diam eu leo molestie eleifend.`
        const output = [{
            date: '14:24:32',
            mention: '14:24:32 Customer : ',
            sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n',
            type: 'customer'
          }, {
            date: '14:27:00',
            mention: '14:27:00 Customer : ',
            sentence: 'Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.\n',
            type: 'customer'
          }, {
            date: '14:27:47',
            mention: '14:27:47 Agent : ',
            sentence: 'Vestibulum tempor diam eu leo molestie eleifend.',
            type: 'agent'
          }]

        expect(conversationToChat(input)).toEqual(output)
    })

    test("it should accept unsplitted sentences", () => {
        const input = `14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus.`
        const output = [{
            date: '14:24:32',
            mention: '14:24:32 Customer : ',
            sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            type: 'customer'
          }, {
            date: '14:26:15',
            mention: '14:26:15 Agent : ',
            sentence: 'Aliquam non cursus erat, ut blandit lectus.',
            type: 'agent'
          }]
          
        expect(conversationToChat(input)).toEqual(output)
    })
});