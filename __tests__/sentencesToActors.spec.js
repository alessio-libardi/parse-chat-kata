const sentencesToActors = require("../src/sentencesToActors");

describe("Sentences to actors function", () => {
    test("it should accept one sentence from a customer", () => {
        const input = ["14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
        const output = {
            "Customer": "customer"
        }

        expect(sentencesToActors(input)).toEqual(output)
    });

    test("it should accept one sentence from a customer and one from an agent", () => {
        const input = ["14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus."]
        const output = {
            "Customer": "customer",
            "Agent": "agent"
        }

        expect(sentencesToActors(input)).toEqual(output)
    });

    test("it should accept two sentences from a customer and one from an agent", () => {
        const input = ["14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "14:27:00 Customer : Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.", "14:27:47 Agent : Vestibulum tempor diam eu leo molestie eleifend."]
        const output = {
            "Customer": "customer",
            "Agent": "agent"
        }

        expect(sentencesToActors(input)).toEqual(output)
    });
});