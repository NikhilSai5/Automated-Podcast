const express = require("express");
const axios = require("axios");
const Redis = require("redis");
const summarize = require("./openAIApi/openAIutils");
const cors = require("cors");

const app = express();
const port = 9000;

const redisClient = Redis.createClient();

redisClient.on("error", (err) => {
  console.error("Redis Error:", err);
});

app.use(cors());

app.get("/summarize-text", async (req, res) => {
  await redisClient.connect();

  const resUrl = await fetch("http://localhost:5000/api/scrape", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const fetchedURL = await resUrl.json();
  console.log(fetchedURL.userDetails);
  console.log(fetchedURL.url);
  console.log(fetchedURL.articles);

  const cacheKey = `key:${fetchedURL.url}`;

  const fetched_data = fetchedURL.articles;
  if (fetched_data) {
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      res.send(cachedData);
      console.log("hello");
    } else {
      const summarizedData = await summarize(fetched_data);
      console.log(summarizedData);

      // save the summarized data in redis
      redisClient.setEx(cacheKey, 3600, JSON.stringify(summarizedData));
      res.json(summarizedData);
    }
  } else {
    console.log("Data not found in Redis");
    res.status(404).json({ error: "Data not found in Redis" });
  }

  redisClient.quit();
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
