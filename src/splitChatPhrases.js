function splitChatPhrases(sentence) {
    const chat = []

    const regexpPhrase = /(?<date>^\d{2}:\d{2}:\d{2}) (?<type>(.+)) : (?<sentence>(.+))/
    const match = regexpPhrase.exec(sentence)

    const phrase = {
        date: match.groups.date,
        mention: `${match.groups.date} ${match.groups.type} : `,
        sentence: match.groups.sentence,
        type: match.groups.type.toLowerCase()
    }
    chat.push(phrase);

    return chat;
}

module.exports = splitChatPhrases;