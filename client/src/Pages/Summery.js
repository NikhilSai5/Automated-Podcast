import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar';

const Summery = () => {
  const [summaryText, setSummaryText] = useState('');
  const [heading, setHeading] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/articles')
      .then(Response => Response.json())
      .then(data => {
        const articles = data.articles || [];
        const fetchedHeading = data.heading || 'no heading found'
        setSummaryText(articles.join('\n\n'));
        setHeading(fetchedHeading)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <>
        <div className="relative">
        
        <div className='relative con-h'>
          <Navbar />
          <div className='app-page-container flex flex-col '>
            <div className='app-top text-white p-5 flex flex-col justify-center items-center gap-10 py-32'>
              <h1 className='app-heading-txt'>Listen <span className='app-like-heading'>Like</span> Podcast</h1>
              <input type='text' className='link-input rounded-2xl w-2/3 px-2 text-black h-9' placeholder='Paste your {URL}'/>
              <button className='summarize-button'><span className='app-btn-txt'>Listen</span></button>
            </div>
            <div className='app-bottom p-9 text-white flex-1'>
              
                <div className='display-fetched p-5 flex flex-col gap-4'>
                  <h1 className='summary-txt-heading text-center'>{heading}</h1>
                  <p>{summaryText}</p>
                </div>
              
            </div>
          </div>
        </div>
        </div>
        

    </>
  )
}

export default Summery