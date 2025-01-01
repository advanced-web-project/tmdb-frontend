<<<<<<< HEAD
import { Movie } from '../../../type/search/movie';
import { Link } from 'react-router-dom';
const IMAGE_MOVIE_POSTER = import.meta.env.VITE_IMAGE_MOVIE_POSTER;
const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `${IMAGE_MOVIE_POSTER}/${movie.poster_path}`
    : 'https://via.placeholder.com/500';

  return (
    <div className="flex flex-col sm:flex-row mb-[20px] rounded-[10px] shadow-md overflow-hidden bg-white">
      <div className="w-full sm:w-[94px] h-[141px] sm:h-auto flex-shrink-0">
        <img src={posterUrl} alt={movie.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col p-4 sm:p-3 flex-grow">
        <h2 className="mb-1">
          <Link
            to={`/movie/${movie.id}`}
            className="text-[1.1em] sm:text-[1.2em] font-bold leading-[1.1] text-black no-underline hover:text-[#01b4e4]"
          >
            {movie.title}
          </Link>
        </h2>
        <p className="mb-[10px] text-[0.9em] sm:text-[1em] text-[#999]">{movie.release_date}</p>
        <p className="text-[0.9em] sm:text-[1em] leading-[1.4] text-justify text-[#4d4d4d]">
          {movie.overview.length > 200 ? `${movie.overview.substring(0, 200)}...` : movie.overview}
        </p>
      </div>
    </div>
  );
};
export default MovieCard;
=======
import { Movie } from "../../../type/search/movie";
const IMAGE_MOVIE_POSTER = import.meta.env.VITE_IMAGE_MOVIE_POSTER;
const ImageCard: React.FC<{ imageUrl: string; alt: string }> = ({ imageUrl, alt }) => (
    <div
        className="w-24 h-24 bg-gray-300 rounded-md mr-4"
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
        aria-label={alt}
    />
);
const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
    const posterUrl = movie.poster_path
        ? `${IMAGE_MOVIE_POSTER}/${movie.poster_path}`
        : "https://via.placeholder.com/500";

    return (
        <div key={movie.id} className="flex items-start bg-white shadow-md rounded-md p-4 mb-4">
            <ImageCard imageUrl={posterUrl} alt={movie.title} />
            <div>
                <h3 className="text-lg font-bold">{movie.title}</h3>
                <p className="text-sm text-gray-500">{movie.release_date}</p>
                <p className="text-gray-700 mt-2">{movie.overview}</p>
            </div>
        </div>
    );
};
export default MovieCard;
>>>>>>> fba66c51de7e0f05ec220a7960e323ac772bea20
