interface MovieCardProps {
  title: string;
  date: string;
  description: string;
  rating: number;
  image: string;
}

import RatingProgressBar from '../../shared/rating-progress-bar';

export default function MovieCardList({ title, date, description, rating, image }: MovieCardProps) {
  return (
    <div className="flex gap-6 pr-6 mx-2 bg-white rounded-[10px] shadow-md animate-fadeIn">
      <img src={image} alt={title} className="w-40 h-56 object-cover rounded-[10px]" />
      <div className="flex-1 space-y-4 py-4">
        <div className="flex items-start gap-3">
          <div className="relative w-[38px] h-[38px] mt-2">
            <div className="absolute inset-0 rounded-[8px]" />
            <RatingProgressBar rating={rating} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-500">{date}</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">{description}</p>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 rounded-full hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            Rate it!
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-pink-500 rounded-full hover:bg-pink-50 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            Favorite
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 rounded-full hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Add to list
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 rounded-full hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
