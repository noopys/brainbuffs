function parseQuestion(text) {
    const parts = text.split(/\\text{[A-D]\)/);
    const [question, a, b, c, d] = parts.map(part => part.trim());

    return {
        question,
        A: `\\text{${a}}`,
        B: `\\text{${b}}`,
        C: `\\text{${c}}`,
        D: `\\text{${d}}`
    };
}

export default parseQuestion;
