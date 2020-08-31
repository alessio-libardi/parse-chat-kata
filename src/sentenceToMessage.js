function sentenceToMessage(sentence, actor) {
    const regexp = new RegExp(/(?<date>^\d{2}:\d{2}:\d{2}) (?<name>.+) : (?<sentence>.+\n?)/)
    const match = regexp.exec(sentence)

    const message = {
        date: match.groups.date,
        mention: `${match.groups.date} ${match.groups.name} : `,
        sentence: match.groups.sentence,
        type: actor
    }

    return message;
}

module.exports = sentenceToMessage;