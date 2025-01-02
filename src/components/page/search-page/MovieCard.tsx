import { Movie } from '../../../type/search/movie';
const IMAGE_MOVIE_POSTER = import.meta.env.VITE_IMAGE_MOVIE_POSTER;
const ImageCard: React.FC<{ imageUrl: string; alt: string }> = ({ imageUrl, alt }) => (
  <div
    className="w-24 h-24 bg-gray-300 rounded-md mr-4"
    style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}
    aria-label={alt}
  />
);
const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `${IMAGE_MOVIE_POSTER}/${movie.poster_path}`
    : 'https://via.placeholder.com/500';

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
