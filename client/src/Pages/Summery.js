import React from "react";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "../Components/Navbar";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Summery = () => {
  const [summaryText, setSummaryText] = useState("");
  const [heading, setHeading] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [url, setUrl] = useState("");
  const [audioURL, setAudioURL] = useState("");
  const [headingLoading, setHeadLoading] = useState("");
  const [loading, setLoading] = useState("");

  const handleUrlSUbmit = async () => {
    try {
      setHeadLoading(true);
      setLoading(true);
      // fetch url, heading, raw_data
      const response = await fetch("http://localhost:5000/api/scrape", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: inputUrl }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.url);
        setUrl(data.url);
        setHeading(data.rawScraperData.heading || "no heading found");
        setHeadLoading(false);
      } else {
        console.error("Failed to fetch data from the server");
      }

      // fetch summarized data
      const summarizedResponse = await fetch(
        "http://localhost:9000/summarize-text"
      );

      if (summarizedResponse.ok) {
        const summa_data = await summarizedResponse.json();

        setSummaryText(summa_data);
        setLoading(false);
      } else {
        console.error("Failed to fetch summarized data from the server");
      }

      const textToSpeech = await fetch(
        "http://localhost:7000/api/summarize-tts",
        {
          method: "GET",
        }
      );

      const mp3URL = await textToSpeech.text();
      setAudioURL(mp3URL);

      if (textToSpeech.ok) {
        const saveResponse = await fetch(
          "http://localhost:8080/fetch-and-save",
          {
            method: "GET",
          }
        );

        if (saveResponse.ok) {
          console.log("Data saved to the database successfully");
        } else {
          console.error("Failed to save data to the database");
        }
      } else {
        console.log("failed to convert to audio file ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-bl from-blue-700 via-gray-800 to-black inset-0 h-full">
        <div className="">
          <div className="">
            <Navbar />
            <div className="app-page-container flex flex-col h-full">
              <div className="app-top text-white p-5 flex flex-col justify-center items-center gap-10 py-32 pb-[60px]">
                <h1 className="app-heading-txt">
                  Listen <span className="app-like-heading">Like</span> Podcast{" "}
                </h1>

                <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="link-input rounded-2xl w-2/3 px-2 text-black h-9"
                  placeholder="Paste your {URL}"
                />
                <button className="summarize-button" onClick={handleUrlSUbmit}>
                  <span className="app-btn-txt">Listen</span>
                </button>
              </div>

              <div className="px-9">
                {audioURL && (
                  <AudioPlayer
                    autoPlay
                    src={audioURL}
                    onPlay={(e) => console.log("onPlay")}
                    className="rounded-xl"
                  />
                )}
              </div>

              <div className="app-bottom p-9 text-white flex-1">
                <div className="display-fetched p-5 flex flex-col gap-4">
                  <div className="loading-ani">
                    <SkeletonTheme baseColor="#454f5e" highlightColor="#475569">
                      {headingLoading ? (
                        <div className="flex justify-center items-center pb-6">
                          <h1>
                            <Skeleton height={50} width={800} />
                          </h1>
                        </div>
                      ) : (
                        <a href={url}>
                          <h1 className="summary-txt-heading text-center mt-3  ">
                            {heading}
                          </h1>
                        </a>
                      )}

                      {loading ? (
                        <p className="p-10">
                          <Skeleton width={1550} />
                          <Skeleton width={1500} />
                          <Skeleton width={1550} />
                          <Skeleton width={1400} />
                          <Skeleton width={1350} />
                          <Skeleton width={1550} />
                          <Skeleton width={500} />
                        </p>
                      ) : (
                        <div className="p-10 text-slate-200">
                          <ReactMarkdown>{summaryText}</ReactMarkdown>
                        </div>
                      )}
                    </SkeletonTheme>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summery;
