const express = require("express");
const limit = require("express-limit").limit;
const { connectDB } = require("./utils/db");
const dotenv = require("dotenv");
const helmet = require("helmet"); // add helmet
const indexRouter = require("./routes/index.routes");
const apiRouter = require("./routes/api.routes");
const {
  getRandomQuestion,
  getRandomQuestionWithoutCodeExamples,
} = require("./services/question.services");
const { shuffleArray } = require("./utils/utils");

dotenv.config();

const app = express();
app.use(helmet()); //use helmet to all routes
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(
  "/",
  limit({
    max: 2, // 5 requests
    period: 60 * 1000, // per minute (60 seconds)
  }),
  indexRouter
);
app.use(
  "/api",
  limit({
    max: 2, // 5 requests
    period: 15 * 1000, // per minute (60 seconds)
  }),
  apiRouter
);
app.use(express.static("public"));

app.get(
  "/daily-question",

  async (req, res) => {
    // Obtener la pregunta correspondiente al día
    const questions = await getRandomQuestionWithoutCodeExamples();
    const questionsWithShuffledAnswers = questions.map((question) => {
      return {
        ...question,
        answerOptions: shuffleArray(question.answerOptions),
      };
    });
    // Renderizar la página con la pregunta y las opciones
    res.render("home", { questionsWithShuffledAnswers });
  }
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server listening in port ${PORT}`);
});
