function sentenceToName(sentence) {
    const regexp = new RegExp(/(?<date>^\d{2}:\d{2}:\d{2}) (?<name>.+) :/)
    const match = regexp.exec(sentence)

    const name = match.groups.name;

    return name;
}

module.exports = sentenceToName;