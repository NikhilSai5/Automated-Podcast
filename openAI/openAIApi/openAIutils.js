const  OpenAIApi  = require("openai");
const Configuration = require("openai")

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);



async function summarize(text){
    const prompt = ` ''' ${text} '''`
  messages = [{ role: "system", content: prompt }]
  const completion = await openai.chat.completions.create({
    messages: messages,
    model:"gpt-3.5-turbo",
  })

  console.log(completion.choices[0].message.content)
}


module.exports = summarize;
