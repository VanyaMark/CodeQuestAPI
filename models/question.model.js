const { Schema, model } = require('mongoose');
const { QUESTIONS_CATEGORIES } = require('../utils/constants');

const questionSchema = new Schema({
	categories: {
		type: [String],
		enum: QUESTIONS_CATEGORIES,
		required: true,
	},
	question: {
		type: String,
		required: true
	},
	codeExamples: {
		type: [String]
	},
	answerOptions: [
		{
			answer: {
				type: String,
				required: true // Texto de la opción de respuesta 
			},
			isCorrect: {
				type: Boolean,
				required: true // Indicación de si esta opción de respuesta es correcta 
			}
		},
	],
	explanation: {
		type: String,
		maxlength: 4000
	},
	status: {
		type: String,
		enum: ["approved", "pending"],
		default: "approved"
	},
	urlSource: {
		type: String

	},
	status: {
		type: String,
		enum: ["approved", "pending"],
		default: "approved"
	}
});

const Questions = model('question', questionSchema);

module.exports = Questions