interface MoviePreviewProps {
  title: string;
  description: string;
  rating?: number;
  image?: string;
  style?: React.CSSProperties;
}

interface MoviePreviewProps {
  title: string;
  description: string;
  rating?: number;
  image?: string;
  style?: React.CSSProperties;
}

const MOVIE_PREVIEW_URL = import.meta.env.VITE_MOVIE_PREVIEW;

export default function MoviePreview({ title, description, rating, image, style }: MoviePreviewProps) {
  return (
    <div
      className="fixed z-[9999] max-w-[535px] max-h-[170px] bg-[#051829] text-white rounded-[10px] overflow-hidden shadow-xl movie-preview"
      style={style}
    >
      {/* Arrow pointer */}
      <div className="absolute  bottom-0 right-[80px] translate-y-[100%]">
        <div className="w-3 h-3 bg-[#051829] transform rotate-45" />
      </div>

      <div className="flex p-3 gap-4">
        <div className="w-39 h-48 flex-shrink-0">
          <img
            src={MOVIE_PREVIEW_URL + image || '/placeholder.svg?height=192&width=144'}
            alt={title}
            className="w-[94px] h-[141px]  object-cover rounded-[10px]"
          />
        </div>
        <div className="flex-1 ml-3 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold truncate">{title}</h3>
            {rating && (
              <span className="px-2 py-1 bg-[rgb(1,180,228)] text-black rounded-[8px] text-sm text-white font-medium whitespace-nowrap">
                ★ {rating.toFixed(1)}
              </span>
            )}
          </div>
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">{description}</p>
          <div className="flex gap-3">
            <button className="w-10 h-10 flex items-center justify-center rounded-[8px] bg-[rgb(1,180,228)] hover:bg-gray-400/20 transition-colors">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path
                  fill="white"
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  transform="scale(0.8) translate(2.5, 2.5)"
                />
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-[8px] bg-[rgb(1,180,228)] hover:bg-cyan-400/20 transition-colors">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path
                  fill="white"
                  d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                  transform="scale(0.8) translate(2.5, 2.5)"
                />
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-[8px] bg-[rgb(1,180,228)] hover:bg-cyan-400/20 transition-colors">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <polygon
                  fill="white"
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                  transform="scale(0.8) translate(2.5, 2.5)"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
