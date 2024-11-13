const express = require("express");
const { rateLimit } = require("express-rate-limit");
const { connectDB } = require("./utils/db");
const dotenv = require("dotenv");

const indexRouter = require("./routes/index.routes");
const apiRouter = require("./routes/api.routes");
const {
  getRandomQuestionWithoutCodeExamples,
} = require("./services/question.services");
const { shuffleArray } = require("./utils/utils");
const cors = require("cors");

const limiter = rateLimit({
  windowMs: 60 * 1000, // 60 seconds
  limit: 20, // limit each IP to 20 requests per `window` per 60 seconds
});

dotenv.config();

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.options("/api/*", cors({ methods: ["GET"], origin: "*" }));

app.use(
  "/api",
  cors({
    methods: ["GET"],
    origin: "*",
  }),
  limiter,
  apiRouter
);
app.use("/", limiter, indexRouter);

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

app.use("/api/*", (req, res) => {
  res.status(404).json({
    message: "Resource not found",
  });
});

app.use("*", (req, res) => {
  res.status(404).render("404", {
    message: "The page you are looking for does not exist.",
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("500", {
    message: "An error has occurred on the server. Try again later.",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server listening in port ${PORT}`);
});
