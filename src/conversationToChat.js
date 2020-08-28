const sentenceToMessage = require("./sentenceToMessage")

function conversationToChat(conversation) {
    let chat = []

    const regexp = new RegExp(/^(?<sentence>.*\n?)/, 'gm')
    const match = conversation.match(regexp)

    chat = match.map(sentence => sentenceToMessage(sentence))

    return chat;
}

module.exports = conversationToChat;