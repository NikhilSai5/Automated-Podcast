const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");
const redis = require("redis");
const bodyParser = require("body-parser");

const scrape_through_link = require("./puppeteer/GetArticles");

const app = express();
const port = 5000;
const DEFAULT_EXPIRATION = 3600;

app.use(cors());
app.use(bodyParser.json());

const redisClient = redis.createClient();

redisClient.on("error", (err) => {
  console.error("Redis Error:", err);
});

let PostedUrl = "";
let PostedHeading = "";
let PostedArticle = "";

app
  .route("/api/scrape")
  .get(async (req, res) => {
    try {
      // Handle GET request logic here, if needed

      // Assuming you want to send a JSON response with the URL
      res.status(200).json({
        url: PostedUrl,
        heading: PostedHeading,
        articles: PostedArticle,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  })
  .post(async (req, res) => {
    try {
      const { url } = req.body;
      if (!url) {
        return res.status(400).json({ error: "URL is required" });
      }

      PostedUrl = url;

      await redisClient.connect();

      const fetchedData = await scrape_through_link(url);

      PostedHeading = fetchedData.heading;
      PostedArticle = fetchedData.articles;

      const responseData = {
        url: url,
        rawScraperData: fetchedData,
      };

      redisClient.setEx(
        "raw_data",
        DEFAULT_EXPIRATION,
        JSON.stringify(fetchedData)
      );

      redisClient.quit();

      res.json(responseData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
