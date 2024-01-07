const express = require('express')
const mongoose = require('mongoose')
const DataModel = require("./Models/DataModel")
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json()); 

const DB = `mongodb+srv://nikhilsaimanam5:La3QhmGj4l4iPAm2@cluster0.b9kuh3f.mongodb.net/request?retryWrites=true&w=majority`;

mongoose.connect(DB, {
  
}).then(() => {
  console.log("connection with mongodb successfull")
}).catch((error) => {
  console.log(`error while connecting to mongoDB: ${error}`)
})


app.get("/server", async (req, res) => {
    res.send("welcome to server connections")
})

app.get("/fetch-and-save", async (req, res) => {
    try{
        console.log("entering server")
        const resUrl = await fetch('http://localhost:5000/api/scrape', {
            method: 'GET',
            headers: {'Content-Type': 'application/json', },
        });
        
        const fetchedURL = await resUrl.json();
        console.log(fetchedURL.url)
        
        

        const resSummarized = await fetch("http://localhost:9000/summarize-text");
        const summarizedData = await resSummarized.json()

        console.log(summarizedData)

        const newData = new DataModel({
            url: fetchedURL.url,
            summarizedText: summarizedData,
        })

        await newData.save()

        console.log('Data fetched and stored successfully')
    }catch(error){
        console.error(`Error fetching and storing data: ${error}`);
        res.status(500).send('Internal Server Error');
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
