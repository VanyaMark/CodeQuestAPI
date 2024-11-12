const express = require("express");
const limit = require("express-limit").limit;
const router = express.Router();
const apiControllers = require("../controllers/api.controllers");

router.get("/v1/questions/random", apiControllers.getRandomQuestions);

router.get(
  "/v1/questions/ai",
  limit({
    max: 10, // 10 requests
    period: 60 * 1000, // per minute (60 seconds)
    onLimitReached: (req, res) => {
      // Custom response for when the limit is reached
      res.status(429).json({
        error: "Too Many Requests",
        message:
          "You have reached the maximum number of requests. Please try again later.",
      });
    },
  }),
  apiControllers.getAiQuestions
);

module.exports = router;
