const express = require('express');

const router = express.Router();
const indexControllers = require('../controllers/index.controllers');

router.get('/', indexControllers.getHome);
router.get('/about-us', indexControllers.getAboutUs);
router.get('/docs', indexControllers.getDocs)
router.get('/template-form', indexControllers.getFormTemplate);

router.get('/export-questions', indexControllers.getTemplateQuestions);

router.get('/random-question', indexControllers.getDailyQuestion)



module.exports = router;

