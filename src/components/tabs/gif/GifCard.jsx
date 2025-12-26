import React, { useState } from "react";
import { Download, ExternalLink, Play, Pause } from "lucide-react";

// GifCard Component
function GifCard({ gif }) {
  const [isPlaying, setIsPlaying] = useState(true);

  const handleDownload = () => {
    window.open(gif.downloadUrl, "_blank");
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer bg-slate-800">
      <div className="relative overflow-hidden aspect-9/16">
        {/* GIF/Preview Image */}
        <img
          src={isPlaying ? gif.url : gif.preview}
          alt={gif.description}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay with description and tags - visible on hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white text-sm sm:text-base font-medium mb-3 line-clamp-2">
              {gif.description}
            </p>

            {/* Tags */}
            {gif.tags && gif.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-2">
                {gif.tags.slice(0, 4).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 bg-blue-600/80 text-white text-xs rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
                {gif.tags.length > 4 && (
                  <span className="px-2 py-0.5 bg-slate-700/80 text-white text-xs rounded-full">
                    +{gif.tags.length - 4}
                  </span>
                )}
              </div>
            )}

            {/* Duration */}
            <div className="text-slate-300 text-xs">
              Duration: {gif.duration}s
            </div>
          </div>
        </div>

        {/* Action buttons - top right */}
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            onClick={handleDownload}
            className="p-2 bg-black/60 backdrop-blur-sm text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-lg hover:scale-110"
            title="Download"
          >
            <Download size={16} />
          </button>

          <a
            href={gif.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-black/60 backdrop-blur-sm text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-lg hover:scale-110"
            title="View on Tenor"
          >
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Play/Pause button - center (visible on hover) */}
        <button
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-black/60 backdrop-blur-sm text-white rounded-full opacity-0 group-hover:opacity-100 hover:bg-blue-600 focus:outline-none transition-all shadow-lg scale-90 hover:scale-100"
          title={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>

        {/* GIF badge - top left */}
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-lienar-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs font-bold shadow-lg">
          GIF
        </div>
      </div>
    </div>
  );
}

export default GifCard;
