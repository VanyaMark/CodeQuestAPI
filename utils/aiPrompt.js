const { QUESTIONS_CATEGORIES } = require("./constants");

const createPrompt = (topic) => {
    let categories = topic;
    console.log('Category:', categories);
    if (!QUESTIONS_CATEGORIES.includes(topic)) {
        categories = 'other';
    }
    console.log('Category 2:', categories);

    return `
    You are an expert programming instructor specialized in fullstack development. Generate a random multiple choice question in English suitable for junior fullstack developers. Focus on practical, real-world scenarios covering: ${topic}. 
    Add a code example ONLY if the question would be clearer or more engaging (for example, to illustrate code behavior or provide more context). Include a short, relevant code example.

    Return ONLY valid JSON in this exact format, strictly using the value provided for "categories":
    {
        "categories": "${categories}",
        "question": "Question text here",
        "codeExamples": "Add a code snippet if needed, if not leave it empty",
        "answerOptions": [
            {"answer": "Option 1", "isCorrect": boolean},
            {"answer": "Option 2", "isCorrect": boolean},
            {"answer": "Option 3", "isCorrect": boolean},
            {"answer": "Option 4", "isCorrect": boolean}
        ],
        "explanation": "Explanation here"
    }
    Ensure that there are no additional characters outside the JSON structure, and strictly use "category" as written here without substitutions. Only return the JSON output.`;
};


module.exports = {
    createPrompt
}