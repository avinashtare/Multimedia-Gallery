import { Download, ExternalLink, Heart } from "lucide-react";
function ImageCard({ image }) {
  const handleDownload = () => {
    window.open(image.downloadUrl, "_blank");
  };

  const formatTitle = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer bg-slate-800">
      <div className="relative overflow-hidden aspect-3/4">
        <img
          src={image.url}
          alt={image.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay with title and description - visible on hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 line-clamp-2">
              {formatTitle(image.title)}
            </h3>
            {image.description && (
              <p className="text-slate-300 text-xs sm:text-sm line-clamp-2 mb-3">
                {image.description}
              </p>
            )}

            {/* User info */}
            <div className="flex items-center gap-2 mt-2">
              <img
                src={image.userImage}
                alt={image.userName}
                className="w-6 h-6 rounded-full border border-white/20"
              />
              <span className="text-white text-xs font-medium">
                {image.userName}
              </span>
            </div>
          </div>
        </div>

        {/* Action buttons - top right */}
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            onClick={handleDownload}
            className="p-2 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-lg hover:scale-110"
            title="Download"
          >
            <Download size={16} />
          </button>

          <a
            href={image.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-lg hover:scale-110"
            title="View on Unsplash"
          >
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Likes badge - top left */}
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full flex items-center gap-1.5 text-xs font-medium">
          <Heart size={12} className="fill-red-500 text-red-500" />
          {image.likes.toLocaleString()}
        </div>
      </div>
    </div>
  );
}
export default ImageCard;
