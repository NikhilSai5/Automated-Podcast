const express = require('express')
const summarize = require('./openAIApi/openAIutils')

const app = express()
const port = 9000

app.get('/', (req, res) => {  
    
    const summarizedOutput = summarize("what is a pokemon")
    res.send("hello ")
    
  })

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });



