<<<<<<< HEAD
import { TV } from '../../../type/search/tv';
const IMAGE_MOVIE_POSTER = import.meta.env.VITE_IMAGE_MOVIE_POSTER;
const TvCard: React.FC<{ tv: TV }> = ({ tv }) => {
  const posterUrl = tv.poster_path ? `${IMAGE_MOVIE_POSTER}/${tv.poster_path}` : 'https://via.placeholder.com/500';

  return (
    <div key={tv.id} className="flex mb-[20px] rounded-[10px] shadow-md  rounded-[10px]">
      <img src={posterUrl} alt={tv.name} className="h-[141px] w-[94px] rounded-[4px] bg-[#dbdbdb] object-cover" />
      <div className="flex flex-col ml-3">
        <h2 className="mb-1">
          <a href="#" className="text-[1.2em] font-bold leading-[1.1] text-black no-underline hover:text-[#01b4e4]">
            {tv.name}
          </a>
        </h2>
        <p className="mb-[10px] text-[1em] text-[#999]">{tv.first_air_date}</p>
        <p className="text-[1em] mr-2 leading-[1.4] text-justify text-[#4d4d4d]">
          {tv.overview.length > 200 ? `${tv.overview.substring(0, 200)}...` : tv.overview}
        </p>
      </div>
    </div>
  );
};
export default TvCard;
=======
import { TV } from "../../../type/search/tv";
const IMAGE_MOVIE_POSTER = import.meta.env.VITE_IMAGE_MOVIE_POSTER;
const TvImageCard: React.FC<{ imageUrl: string; alt: string }> = ({ imageUrl, alt }) => (
    <div
        className="w-24 h-24 bg-gray-300 rounded-md mr-4"
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
        aria-label={alt}
    />
);

const TvCard: React.FC<{ tv: TV }> = ({ tv }) => {
    const posterUrl = tv.poster_path
        ? `${IMAGE_MOVIE_POSTER}/${tv.poster_path}`
        : "https://via.placeholder.com/500";

    return (
        <div key={tv.id} className="flex items-start bg-white shadow-md rounded-md p-4 mb-4">
            <TvImageCard imageUrl={posterUrl} alt={tv.name} />
            <div>
                <h3 className="text-lg font-bold">{tv.name}</h3>
                <p className="text-sm text-gray-500">{tv.first_air_date}</p>
                <p className="text-gray-700 mt-2">{tv.overview}</p>
            </div>
        </div>
    );
};
export default TvCard;
>>>>>>> fba66c51de7e0f05ec220a7960e323ac772bea20
