function sentenceToMessage(sentence) {
    let message = {}

    const regexp = new RegExp(/(?<date>^\d{2}:\d{2}:\d{2}) (?<type>.+) : (?<sentence>.+\n?)/)
    const match = regexp.exec(sentence)

    message = {
        date: match.groups.date,
        mention: `${match.groups.date} ${match.groups.type} : `,
        sentence: match.groups.sentence,
        type: match.groups.type.toLowerCase()
    }

    return message;
}

module.exports = sentenceToMessage;