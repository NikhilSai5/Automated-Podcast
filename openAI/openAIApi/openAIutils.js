const OpenAIApi = require("openai");
const Configuration = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function summarize(text) {
  const prompt = ` write a podcast script making the podcast more exciting and intresting to hear, while explaining the important concepts in great detail in the following text, [NOTE : the script should not be in conversation style, it should be like a paragraph ], the duration of the podcast should minimum of 50sec ''' ${text} '''`;
  messages = [{ role: "system", content: prompt }];
  const completion = await openai.chat.completions.create({
    messages: messages,
    model: "gpt-3.5-turbo",
  });
  const completed_Data = completion.choices[0].message.content;
  console.log(completed_Data);
  return completed_Data;
}

module.exports = summarize;
