const sentencesToActors = require("./sentencesToActors")
const sentenceToMessage = require("./sentenceToMessage")
const sentenceToName = require("./sentenceToName")

function conversationToChat(conversation) {
    const regexp = new RegExp(/(?<message>(?<date>\d{2}:\d{2}:\d{2}) (?<name>.+?(?= : )) : (?<sentence>.+?\.\n?))/, 'gm')
    const match = conversation.match(regexp)

    const actors = sentencesToActors(match)
    const chat = match.map(sentence => sentenceToMessage(sentence, actors[sentenceToName(sentence)]))

    return chat;
}

module.exports = conversationToChat;