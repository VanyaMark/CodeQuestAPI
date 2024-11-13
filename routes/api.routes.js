const express = require('express');
const questions = require('../models/question.model')
const router = express.Router();
const apiControllers = require('../controllers/api.controllers');

/**
 * @swagger
 * components:
 *   schemas:
 *     Question:
 *       type: object
 *       properties:
 *         question:
 *           type: string
 *           description: Texto de la pregunta.
 *           example: "What is a closure in JavaScript?"
 *         codeExamples:
 *           type: array
 *           items:
 *             type: string
 *           description: Ejemplos de código relacionados con la pregunta.
 *           example: ["const example = 'Ejemplo de código';"]
 *         answerOptions:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               answer:
 *                 type: string
 *                 description: Texto de la opción de respuesta.
 *                 example: "París"
 *               isCorrect:
 *                 type: boolean
 *                 description: Indica si la opción de respuesta es correcta.
 *                 example: true
 *         explanation:
 *           type: string
 *           description: Explicación detallada de la respuesta.
 *           example: "París es la capital de Francia y una de las ciudades más conocidas del mundo."
 *         status:
 *           type: string
 *           enum: ["approved", "pending"]
 *           description: Estado de la pregunta.
 *           example: "approved"
 *         urlSource:
 *           type: string
 *           description: URL de la fuente de información de la pregunta.
 *           example: "https://es.wikipedia.org/wiki/París"
 */

/**
 * @swagger
 * /v1/questions/random:
 *   get:
 *     tags:
 *       - Questions
 *     summary: Get random questions
 *     description: Return a sample of random questions from the database
 *     responses:
 *       200:
 *         description: Random questions list.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Question'
 *       500:
 *         description: Error del servidor
 */
router.get('/v1/questions/random', apiControllers.getRandomQuestions);


/** 
 * @swagger 
 * /v1/questions/random:


*/
router.get('/v1/questions/ai', apiControllers.getAiQuestions) 

router.get('/v1/test-swagger', apiControllers.getTestSwaggerOption)

module.exports = router;

