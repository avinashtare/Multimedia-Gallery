import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";

// VideoGrid Component
function VideoGrid() {
  const { data } = useSelector((state) => state.search);

  return (
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoGrid;
