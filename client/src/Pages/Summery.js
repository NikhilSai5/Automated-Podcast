import React from 'react'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown';
import Navbar from '../Components/Navbar';
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';





const Summery = () => {
  const [summaryText, setSummaryText] = useState('');
  const [heading, setHeading] = useState('');
  const [inputUrl, setInputUrl] = useState('')
  const [url, setUrl] = useState('')
  const [audioURL, setAudioURL] = useState('')
  

  const handleUrlSUbmit = async () => {
    try {
      // fetch url, heading, raw_data
      const response = await fetch('http://localhost:5000/api/scrape', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: inputUrl }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.url)
        setUrl(data.url)
        setHeading(data.rawScraperData.heading || 'no heading found');        
      } else {
        console.error('Failed to fetch data from the server');
      }

      // fetch summarized data
      const summarizedResponse = await fetch('http://localhost:9000/summarize-text');
    if (summarizedResponse.ok) {
      const summa_data = await summarizedResponse.json();
      
      setSummaryText(summa_data);
            
    } else {
      console.error('Failed to fetch summarized data from the server');
    }

   
      const textToSpeech = await fetch('http://localhost:7000/api/summarize-tts', {
        method: 'GET', 
      })

      const mp3URL = await textToSpeech.text()
      setAudioURL(mp3URL);
      
      
      if (textToSpeech.ok){
          const saveResponse = await fetch('http://localhost:8080/fetch-and-save', {
            method: 'GET', 
          });

        if (saveResponse.ok) {
          console.log('Data saved to the database successfully');
          
        } else {
          console.error('Failed to save data to the database');
        }
      }else{
        console.log("failed to convert to audio file ")
      }

    } catch (error) {
      console.log(error);
    }


  };


  return (
    <>
        <div className="relative">
        
        <div className='relative con-h'>
          <Navbar />
          <div className='app-page-container flex flex-col '>
            <div className='app-top text-white p-5 flex flex-col justify-center items-center gap-10 py-32 pb-[60px]'>
              <h1 className='app-heading-txt'>Listen <span className='app-like-heading'>Like</span> Podcast </h1>
              
              <input type='text' value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} className='link-input rounded-2xl w-2/3 px-2 text-black h-9' placeholder='Paste your {URL}'/>
              <button className='summarize-button' onClick={handleUrlSUbmit}><span className='app-btn-txt'>Listen</span></button>
            </div>          

            <div className='px-9'>
              {audioURL && 
                    <AudioPlayer
                    autoPlay
                    src={audioURL}
                    onPlay={e => console.log("onPlay")}
                    className='rounded-xl'
                    />
              }
            </div>
            

            <div className='app-bottom p-9 text-white flex-1'>
              
                <div className='display-fetched p-5 flex flex-col gap-4'>
                  <a href={url}><h1 className='summary-txt-heading text-center mt-3'>{heading}</h1></a>
                  <div className='p-10 text-slate-200'><ReactMarkdown>{summaryText}</ReactMarkdown></div>
                </div>
              
            </div>
          </div>
        </div>
        </div>
        

    </>
  )
}

export default Summery