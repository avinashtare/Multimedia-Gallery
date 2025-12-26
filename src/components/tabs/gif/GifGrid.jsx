import { useSelector } from "react-redux";
import GifCard from "./GifCard";

// GifGrid Component
function GifGrid() {
  const { data } = useSelector((state) => state.search);

  return (
    <div className="min-h-screen bg-slate-900 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            GIF Gallery
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            {data.length} GIFs found
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {data.map((item) => (
            <GifCard
              key={item.id}
              gif={{
                id: item.id,
                url: item.media_formats.mediumgif.url,
                preview: item.media_formats.gifpreview.url,
                description: item.content_description || "GIF animation",
                duration: item.media_formats.mediumgif.duration,
                tags: item.tags,
                link: item.itemurl,
                downloadUrl: item.url,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GifGrid;
