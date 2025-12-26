import React, { useState, useRef } from "react";
import {
  Download,
  ExternalLink,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";

function VideoCard({ video }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const handleDownload = () => {
    // Download the highest quality video
    const highestQuality = video.videoFiles[video.videoFiles.length - 1];
    window.open(highestQuality.link, "_blank");
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer bg-slate-800"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {" "}
      <div className="relative overflow-hidden aspect-9/16">
        {/* Video Element */}
        <video
          ref={videoRef}
          poster={video.thumbnail}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loop
          muted={isMuted}
          playsInline
          preload="none"
        >
          <source src={video.videoFiles[2].link} type="video/mp4" />
        </video>

        {/* Overlay with user info and duration - visible on hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {/* User info */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                {video.userName.charAt(0)}
              </div>
              <span className="text-white text-sm font-medium">
                {video.userName}
              </span>
            </div>

            {/* Video info */}
            <div className="flex items-center gap-3 text-slate-300 text-xs">
              <span>
                {video.width}x{video.height}
              </span>
              <span>•</span>
              <span>{video.duration}s</span>
              <span>•</span>
              <span>{video.fps} FPS</span>
            </div>
          </div>
        </div>

        {/* Action buttons - top right */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={toggleMute}
            className="p-2 bg-black/60 backdrop-blur-sm text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-lg hover:scale-110"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          <button
            onClick={handleDownload}
            className="p-2 bg-black/60 backdrop-blur-sm text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-lg hover:scale-110"
            title="Download"
          >
            <Download size={16} />
          </button>

          <a
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-black/60 backdrop-blur-sm text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-lg hover:scale-110"
            title="View on Pexels"
          >
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Play/Pause button - center */}
        <button
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-black/60 backdrop-blur-sm text-white rounded-full opacity-0 group-hover:opacity-100 hover:bg-blue-600 focus:outline-none transition-all shadow-lg scale-90 hover:scale-100"
          title={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause size={28} />
          ) : (
            <Play size={28} className="ml-1" />
          )}
        </button>

        {/* Video badge - top left */}
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-linear-to-r from-red-600 to-orange-600 text-white rounded-full text-xs font-bold shadow-lg">
          VIDEO
        </div>

        {/* Duration badge - bottom left (always visible) */}
        <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-sm text-white rounded text-xs font-medium">
          {video.duration}s
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
