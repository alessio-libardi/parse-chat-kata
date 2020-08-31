const sentenceToName = require("./sentenceToName");

function sentencesToActors(sentences) {
    const actors = sentences
        .map(sentence => sentenceToName(sentence))
        .reduce((acc, cur, idx) => {
            if (idx === 0) {
                acc[cur] = 'customer'
            }

            if (!acc[cur]) {
                acc[cur] = 'agent'
            }

            return acc;
        }, {})

    return actors;
}

module.exports = sentencesToActors;