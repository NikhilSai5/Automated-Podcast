const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors')

const scrape_through_link = require('./puppeteer/GetArticles');

const app = express();
const port = 5000;

app.use(cors());

app.get('/api/articles', async (req, res) => {
  try{
    const fetchedArticles = await scrape_through_link();
    res.json(fetchedArticles)
  }catch(err) {
    console.log(err)
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
