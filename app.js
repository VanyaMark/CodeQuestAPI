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
const cors = require("cors");
const rateLimit = limit({
  max: 2, // Maximum 2 requests
  period: 20 * 1000, // Every 20 seconds
  onLimitReached: (req, res) => {
    // Custom response for when the limit is reached
    res.status(429).json({
      error: "Too Many Requests",
      message:
        "You have reached the maximum number of requests. Please try again later.",
    });
  },
});

dotenv.config();

const app = express();

/* app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
}); */

app.use(helmet()); //use helmet to all routes
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(cors());

app.options("/api/*", cors({ methods: ["GET"], origin: "*" }));
app.use("/", rateLimit, indexRouter);
app.use(
  "/api",
  cors({
    methods: ["GET"],
    origin: "*",
  }),
  rateLimit,
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
