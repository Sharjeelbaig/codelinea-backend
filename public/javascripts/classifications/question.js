const codeClasssification = require("./code");

const checkCode = async (code) => {
  const response = await cohere.classify({
    model: "embed-english-v2.0",
    inputs: [code],
    examples: codeClasssification,
  });
  return response.body.classifications[0].prediction.toLowerCase();
};



const questionClassification= (code) => {
const questions = [  {
  text: `Explain what is the purpose of console.log() in the following code: ${code}`,
  label: "valid question",
},
{
  text: `what is the use of variable isReal in the following code: ${code}`,
  label: "valid question",
},
{
  text: `Explain what is the purpose of jbeghv in the following code: ${code}`,
  label: "stupid question",
},
{
  text: `how are you, in the following code: ${code}`,
  label: "stupid question",
},
{
  text: `what is aeroplane, in the following code: ${code}`,
  label: "stupid question",
},
{
  text: `Mary had a little lamb, in the following code ${code}`,
  label: "not question",
},
{text: `hello, in the following code: ${code}`,
label: "not question",},
{text: `absadnk, in the following code: ${code}`,
label: "not question",}
]
return questions
}

module.exports = questionClassification