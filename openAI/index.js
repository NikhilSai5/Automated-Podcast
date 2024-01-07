const express = require('express');
const axios = require('axios'); 
const Redis = require('redis');
const summarize = require('./openAIApi/openAIutils');
const cors = require('cors');


const app = express();
const port = 9000;

const redisClient = Redis.createClient()

redisClient.on('error', (err) => {
  console.error('Redis Error:', err);
});

app.use(cors());

app.get('/summarize-text', async (req, res) => {  
  await redisClient.connect();

  const fetched_data =  await redisClient.get("raw_data")
  if (fetched_data) {
    const summarizedData = await summarize(fetched_data);
    console.log(summarizedData);
    res.json(summarizedData);
  } else {
    console.log('Data not found in Redis');
    res.status(404).json({ error: 'Data not found in Redis' });
  }

  redisClient.quit()
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
