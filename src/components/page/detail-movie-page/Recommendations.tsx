import React from 'react';
import { Calendar } from 'lucide-react';
import { Movie } from '../../../type/movie/Movie';
import DropdownInteraction from '../home-page/dropdown-interaction';
import { Link } from 'react-router-dom';
import Spinner from '../../shared/spinner';

interface RecommendationsProps {
  recommendations: Movie[];
  onHeaderClick: () => void;
  loading: boolean;
}
const IMAGE_RECOMMENDATION = import.meta.env.VITE_IMAGE_RECOMMENDATION;

export const Recommendations: React.FC<RecommendationsProps> = ({ recommendations, onHeaderClick, loading }) => {
  return (
    <div className="mt-8 max-w-[900px]">
      <h2 className="text-[1.5em] font-semibold mb-4 cursor-pointer hover:text-blue-500" onClick={onHeaderClick}>
        Recommendations
      </h2>
      {loading ? (
        <Spinner loading={true} alignStyle="flex justify-center items-center h-40" />
      ) : (
        <div className="relative">
          <div className="flex gap-[14px] overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 scrollbar-rounded">
            {recommendations.map((item) => (
              <div className="group cursor-pointer" key={item.id}>
                <div className="relative rounded-[10px] overflow-hidden bg-[#032541] h-40 w-72">
                  <img
                    src={`${IMAGE_RECOMMENDATION}/${item.poster_path}`}
                    alt={item.title}
                    className="w-full aspect-[1.78/1] object-cover rounded-[10px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col gap-2">
                      <div className="flex items-center text-white/80 text-[0.9em]">
                        <Calendar className="w-3.5 h-3.5 mr-2" />
                        {item.release_date}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 z-[999]">
                    <DropdownInteraction tmdb_id={item.id} />
                  </div>
                </div>
                <div className="mt-2 flex justify-between items-start">
                  <Link
                    to={`/tmdb-frontend/movie/${item.id}`}
                    className="text-[1em] font-medium leading-tight text-[#000000] hover:text-[#01b4e4] transition-colors"
                  >
                    {item.title}
                  </Link>
                  <span className="text-[1em] text-[#666666]">{Math.round(item.vote_average)}%</span>
                </div>
              </div>
            ))}
          </div>
          <div
            className="absolute right-0 top-0 bottom-4 w-[60px] pointer-events-none
                      bg-gradient-to-l from-white via-white/70 to-transparent"
          />
        </div>
      )}
    </div>
  );
};
