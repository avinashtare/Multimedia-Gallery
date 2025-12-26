import { useSelector } from "react-redux";
import ImageGrid from "./tabs/image/ImageGrid";
import GifGrid from "./tabs/gif/GifGrid";
import VideoGrid from "./tabs/videos/VideoGrid";
import Loading from "./Loading";

function ResultGrid() {
  const { activeTab, loading } = useSelector((state) => state.search);
  return (
    <div>
      {!loading ? (
        <>
          {activeTab === "photos" && <ImageGrid />}
          {activeTab === "gif" && <GifGrid />}
          {activeTab === "videos" && <VideoGrid />}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ResultGrid;
