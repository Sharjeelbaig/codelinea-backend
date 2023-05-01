const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cohere = require("cohere-ai");
const origins = require("../public/javascripts/origins");
const codeClasssification = require("../public/javascripts/classifications/code");
var router = express.Router();

router.use(bodyParser.json());
cohere.init(process.env.API);
router.get("/", function (req, res, next) {
  res.send("at ask route");
});
const checkIfStringContainsCode = async (str) => {
    const response = await cohere.classify({
      model: "embed-english-v2.0",
      inputs: [str],
      examples: codeClasssification,
    });
  
    const isCode = response.body.classifications[0].prediction.toLowerCase() !== "not code";
  
    return isCode ? "valid" : "invalid";
  };
  
const generateAnswer = async (question, code) => {
  const response = await cohere.generate({
    model: "command-nightly",
    prompt: `Explain what is the purpose of/what is the use of:${question}, in the following code ${code}\n`,
    max_tokens: 300,
    temperature: 0.9,
    k: 0,
    p: 0.75,
    stop_sequences: [],
    return_likelihoods: "NONE",
  });
  return response.body.generations[0].text
    
};
const corsOptions = {
  origin: function (origin, callback) {
    if (origins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
router.post("/", cors(corsOptions), async (req, res) => {
  const { question, code } = req.body;
  try {
    const validity = await checkIfStringContainsCode(question);
    if (validity === "valid") {
      const answer = await generateAnswer(question, code)
      res.json({
        answer: answer,
      });
    } else {
      res.json({
        answer:
          "Sorry, but you asked a stupid question that is not related to the code, What should I answer in this :\\",
      });
    }
  } catch (error) {
    console.error(error);
    console.error(error.stack);

    res.status(500).json({
      error: "An error occurred while generating response.",
    });
  }
});

module.exports = router;
