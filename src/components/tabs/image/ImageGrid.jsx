import { useSelector } from "react-redux";
import ImageCard from "./ImageCard";

function ImageGrid() {
  const { data } = useSelector((state) => state.search);

  return (
    <div className="min-h-screen bg-slate-900 p-4 sm:p-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Image Gallery
        </h1>
        <p className="text-slate-400 text-sm sm:text-base">
          {data.length} images found
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((item) => (
          <ImageCard
            key={item.id}
            image={{
              id: item.id,
              url: item.urls.small,
              title: item.slug,
              description: item.description || item.alt_description,
              alt: item.alt_description,
              likes: item.likes,
              userName: item.user.name,
              userImage: item.user.profile_image.small,
              link: item.links.html,
              downloadUrl: item.links.download,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
