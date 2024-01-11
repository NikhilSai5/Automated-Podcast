const express = require('express')
const mongoose = require('mongoose')
const tts = require("./googleTTSapi/ttsApi")
const uploadFile = require("./googleTTSapi/googleStorage")

const cors = require('cors')
const fs = require("fs")


const app = express()
const port = 7000

app.use(cors());

app.get('/api/summarize-tts', async (req, res) => {
    try{
        const resUrl = await fetch('http://localhost:5000/api/scrape', {
            method: 'GET',
            headers: {'Content-Type': 'application/json', },
        });
        
        const fetchedURL = await resUrl.json();
        console.log(fetchedURL)
        console.log(fetchedURL.url)
        


        const resSummarized = await fetch("http://localhost:9000/summarize-text");
        const summarizedData = await resSummarized.json()
        
        const filepath = `../client/src/storagetemp/${fetchedURL.heading}.mp3`

        const summarizedAudio = await tts(summarizedData)

        fs.writeFileSync(filepath, summarizedAudio.audioContent);

        const uploadResult = await uploadFile(process.env.BUCKET_NAME, filepath , `${fetchedURL.heading}.mp3`)

        console.log(`Audio uploaded to Google Cloud Storage: ${uploadResult.name}`);

        console.log(summarizedAudio)
        res.send(summarizedAudio)
        

    }catch(error){
        console.log(`error while converting to mp3: ${error}`)
    }
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})


