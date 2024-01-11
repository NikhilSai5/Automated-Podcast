const textToSpeech = require("@google-cloud/text-to-speech")
const fs = require("fs")

process.env.GOOGLE_APPLICATION_CREDENTIALS = "ttsGoogleCloudKey.json"
const client = new textToSpeech.TextToSpeechClient();

async function tts(text){
    try{
        const request = {
            input: {text},
            voice: { languageCode: 'en-US', ssmlGender: 'Neural2'},
            audioConfig: {audioEncoding: 'MP3'}
        };
    
    
        const [response] = await client.synthesizeSpeech(request);
        console.log(response)
        // fs.writeFileSync(outputFile,response.audioContent,'binary');
    
        return response;
    }catch(err){
        console.log("Error in TTS function:")
        console.log(err)
        throw err;
    }
}

// (async() => {
//     tts("hello i am nikhil sai and i am using tts", "test.mp3")
// })()

module.exports = tts