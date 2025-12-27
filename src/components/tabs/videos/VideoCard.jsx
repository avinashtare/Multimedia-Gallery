import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { X } from "lucide-react";
import VideoCard from "./VideoCard";

function VideoGrid() {
  const { data } = useSelector((state) => state.search);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenVideo, setFullscreenVideo] = useState(null);
  const [isMuted] = useState(true);
  const fullscreenVideoRef = useRef(null);

  const openFullscreen = (video) => {
    setFullscreenVideo(video);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    if (fullscreenVideoRef.current) {
      fullscreenVideoRef.current.pause();
    }
    setFullscreenVideo(null);
  };

  return (
    <>
      <div className="min-h-screen bg-slate-900 p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Video Gallery
            </h1>
            <p className="text-slate-400 text-sm sm:text-base">
              {data.length} videos found
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {data.map((item) => (
              <VideoCard
                key={item.id}
                video={{
                  id: item.id,
                  thumbnail: item.image,
                  videoFiles: item.video_files,
                  userName: item.user.name,
                  width: item.width,
                  height: item.height,
                  duration: item.duration,
                  fps: item.video_files[0]?.fps || 30,
                  link: item.url,
                }}
                onOpenFullscreen={openFullscreen}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && fullscreenVideo && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 p-3 bg-black/60 backdrop-blur-sm text-white rounded-full hover:bg-red-600 focus:outline-none transition-all shadow-lg z-10"
            title="Close"
          >
            <X size={24} />
          </button>

          <video
            ref={fullscreenVideoRef}
            className="max-w-full max-h-full"
            controls
            autoPlay
            loop
            muted={isMuted}
          >
            <source
              src={
                fullscreenVideo.videoFiles[
                  fullscreenVideo.videoFiles.length - 1
                ].link
              }
              type="video/mp4"
            />
          </video>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="text-white text-sm font-medium">
              {fullscreenVideo.userName}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoGrid;
