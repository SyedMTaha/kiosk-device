import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import TestComponent from "../listening/ListeningTestComponent";
import { Play, Pause, Volume2, Settings } from "lucide-react";
import completeNotesAudio from "./audio/complete-notes-audio.mp3";
import mapsAudio from "./audio/maps-audio.mp3";
import matchingBoxAudio from "./audio/matching-box-information-audio.mp3";
import mcqsPart2Audio from "./audio/mcqs-part-2-audio.mp3";
import mcqsPart3Audio from "./audio/mcqs-part-3-audio.mp3";
import summaryCompletionAudio from "./audio/summary-completion-audio.mp3";
import tableCompletionAudio from "./audio/table-completion-audio.mp3";

const ListeningTest = () => {
  const { type } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const formattedType = type ? type.replace(/-/g, " ") : "Sample Questions";
  const [audioSrc, setAudioSrc] = useState(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    switch (type) {
      case "complete-notes":
        setAudioSrc(completeNotesAudio);
        break;
      case "maps":
        setAudioSrc(mapsAudio);
        break;
      case "matching-box's-information":
        setAudioSrc(matchingBoxAudio);
        break;
      case "choose-mcqs-part-3":
        setAudioSrc(mcqsPart3Audio);
        break;
      case "choose-mcqs-part-2":
        setAudioSrc(mcqsPart2Audio);
        break;
      case "summary-completion":
        setAudioSrc(summaryCompletionAudio);
        break;
      case "table-completion":
        setAudioSrc(tableCompletionAudio);
        break;
      default:
        setAudioSrc(null);
        break;
    }
  }, [type]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSpeedChange = () => {
    const newSpeed = playbackSpeed === 2 ? 1 : playbackSpeed + 0.5;
    setPlaybackSpeed(newSpeed);
    audioRef.current.playbackRate = newSpeed;
  };

  const handleVolumeChange = (event) => {
    audioRef.current.volume = event.target.value;
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header Section with Back Button */}
      <div className="bg-[#DB1738] text-white flex items-center justify-between py-4 px-6">
        <button
          onClick={() => navigate(-1)} // Navigate one step back
          className="text-white border-2 border-white rounded-full px-3 py-1 text-sm"
        >
          Back
        </button>
        <h1 className="text-2xl font-bold mx-auto">Listening - {formattedType}</h1>
        <div className="w-12" /> {/* Spacer to balance layout */}
      </div>

      {/* YouTube Video Embed */}
      <div className="flex justify-center items-center p-4">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Audio Player */}
      <div className="flex items-center border-2 border-gray-800 p-4 bg-white text-black rounded-lg space-x-4 w-[90vw] mx-auto">
        <button onClick={togglePlayPause} className="p-2">
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <div className="flex flex-col space-y-1 flex-grow">
          <div className="flex justify-between text-sm">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <input
            type="range"
            className="w-full"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => (audioRef.current.currentTime = e.target.value)}
          />
        </div>
        <button onClick={handleSpeedChange} className="p-2">
          <Settings size={24} />
          <span className="text-xs block">{playbackSpeed}x</span>
        </button>
        <div className="flex items-center space-x-2">
          <Volume2 size={24} />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            onChange={handleVolumeChange}
            className="w-16"
          />
        </div>
      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        src={audioSrc}
        preload="auto"
      />
      
      <div className="h-screen py-6 flex flex-col gap-6 px-5">
        <div>
          <h1 className="text-3xl font-semibold">Questions</h1>
          <TestComponent questions={[]} buttonColor="bg-[#DB1738]" type={type} />
        </div>
      </div>
    </div>
  );
};

export default ListeningTest;
