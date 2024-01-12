const express = require('express')
const mongoose = require('mongoose')
const tts = require("./googleTTSapi/ttsApi")
const uploadFile = require("./googleTTSapi/googleStorage")
const getURL = require('./googleTTSapi/getGoogleStorageURL')
const Redis = require('redis')

const cors = require('cors')
const fs = require("fs")


const app = express()
const port = 7000

const redisClient = Redis.createClient()

redisClient.on('error', (err) => {
  console.error('Redis Error:', err);
});

app.use(cors());

app.get('/api/summarize-tts', async (req, res) => {
    try{
        await redisClient.connect();

        const resUrl = await fetch('http://localhost:5000/api/scrape', {
            method: 'GET',
            headers: {'Content-Type': 'application/json', },
        });
        
        const fetchedURL = await resUrl.json();
        console.log(fetchedURL)
        console.log(fetchedURL.url)
        


        const resSummarized = await fetch("http://localhost:9000/summarize-text");
        const summarizedData = await resSummarized.json()
        
        // const filepath = `../client/src/storagetemp/${fetchedURL.heading}.mp3`

        const summarizedAudio = await tts(summarizedData)


        const cacheKey = `TTSCacheKey:${fetchedURL.heading}`

        const TTSCachedData = await redisClient.get(cacheKey)

        if(TTSCachedData){
            console.log(`data aleady in cache: ${TTSCachedData}`)
            res.send(TTSCachedData)
        }
        else{
           
        // fs.writeFileSync(filepath, summarizedAudio.audioContent);

        // const uploadResult = await uploadFile(process.env.BUCKET_NAME, filepath , `${fetchedURL.heading}.mp3`)

        const uploadResult = await uploadFile(process.env.BUCKET_NAME, summarizedAudio.audioContent, `${fetchedURL.heading}.mp3`);
        console.log(`Audio uploaded to Google Cloud Storage: ${uploadResult.name}`);
        console.log(summarizedAudio)

        const mp3URL = await getURL(process.env.BUCKET_NAME,  `${fetchedURL.heading}.mp3`)
        console.log(`google storage url is : ${mp3URL}`)
        redisClient.setEx(cacheKey, 172800, mp3URL)
        res.send(mp3URL)
        }

        redisClient.quit()

    }catch(error){
        console.log(`error while converting to mp3: ${error}`)
    }
    
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})


