const { QUESTIONS_CATEGORIES } = require("./constants");

const createPrompt = (topic) => {
    let category = topic;
    console.log('Category:', category)
    if(!QUESTIONS_CATEGORIES.includes(topic)){
        category = 'other';
    }
    console.log('Category 2 :', category)
    return `
    You are an expert programming instructor specialized in fullstack development. Generate a random multiple choice question in english suitable for junior fullstack developers. Focus on practical, real-world scenarios covering: ${topic}. 
    Add a code examples ONLY if the question would be clearer or more engaging(for example, to illustrate code behavior or provide more context), include a short, relevant code example.

    Return ONLY valid JSON like this example and RESPECT the category setup and please use my wording exactly as I provided it in the category field:
    {
        "categories": "${category}",
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
    Ensure that there are no additional characters outside the JSON structure. Only return the JSON output.`;
};

module.exports = {
    createPrompt
}