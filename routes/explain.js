var express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var router = express.Router();
const cohere = require("cohere-ai");
const data = require("../public/javascripts/training");
router.use(cors());
router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers,token"
  );
  next();
});
router.use(bodyParser.json());
cohere.init(process.env.API);
router.get("/", function (req, res, next) {
  res.send("at explain route");
});

const explainCode = async (input) => {
  const response = await cohere.generate({
    model: "command-xlarge-nightly",
    prompt: `Explain the code line by line, do not add any other line in the code:${input} \n`,
    max_tokens: 300,
    temperature: 0.9,
    k: 0,
    p: 0.75,
    stop_sequences: [],
    return_likelihoods: "NONE",
  });
  return response.body.generations[0].text;
};

const generateSample = async (input, language, explanation) => {
  const response = await cohere.generate({
    model: "command-xlarge-nightly",
    prompt: `For the code: ${input} in ${language} language, it can be explained as: ${explanation}, generate an alternative sample code snippet similar to it\n`,
    max_tokens: 300,
    temperature: 0.9,
    k: 0,
    p: 0.75,
    stop_sequences: [],
    return_likelihoods: "NONE",
  });
  return response.body.generations[0].text;
};

const explainSample = async (code, language) => {
  const response = await cohere.generate({
    model: "command-xlarge-nightly",
    prompt: `generate informal explanation of line by line explanation of the following code: ${code} in ${language}\n`,
    max_tokens: 300,
    temperature: 0.9,
    k: 0,
    p: 0.75,
    stop_sequences: [],
    return_likelihoods: "NONE",
  });
  return response.body.generations[0].text;
};

const explainInDepth = async (input, language, explanation) => {
  const response = await cohere.generate({
    model: "command-xlarge-nightly",
    prompt: `In ${language} language, give an indepth explanation of the code:${input}, by the writing an essay or article on ${explanation} \n`,
    max_tokens: 300,
    temperature: 0.9,
    k: 0,
    p: 0.75,
    stop_sequences: [],
    return_likelihoods: "NONE",
  });
  return response.body.generations[0].text;
};


const whitelist = ['https://codelinea.web.app'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
router.post("/",cors(corsOptions),async (req, res) => {
  const { code } = req.body;

  try {
    const response = await cohere.classify({
      model: "large",
      inputs: [code],
      examples: data,
    });

    const language = response.body.classifications[0].prediction.toLowerCase();

    const supportedLanguages = [
      "c++",
      "python",
      "c#",
      "javascript",
      "ruby",
      "go",
      "swift",
      "css",
    ];

    if (supportedLanguages.includes(language)) {
      console.log("it is", language);
      
      const explanation = await explainCode(code);
      const depthExplanation = await explainInDepth(code, language, explanation);
      const sample = await generateSample(code, language, explanation);
      const sampleExplanation = await explainSample(sample, language);
      res.json({
        explanation,
        language,
        depthExplanation,
        sample:sample,
        sampleExplanation:sampleExplanation
      });
    } else {
      res.json({
        explanation: "It is not a code!",
        language: "unrecognized",
        depthExplanation: "Input a valid code",
        sample:'console.log(`We cannot recognize your code!`)',
        sampleExplanation:'It is possible that the code you provided, is not a code, or having syntex errors or it can even possible that we don\'t support the language',
      });
    }
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "An error occurred while generating response.",
    });
  }
});

module.exports = router;
