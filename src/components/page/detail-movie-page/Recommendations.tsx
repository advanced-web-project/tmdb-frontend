import React from 'react';
import { Calendar, Star, Heart, Bookmark } from 'lucide-react';
import MovieRecommendation from '../../../type/temp/movie/movie_recommendation';
import { Link } from 'react-router-dom';

interface RecommendationsProps {
  recommendations: MovieRecommendation['results'];
}

const IMAGE_RECOMMENDATION = import.meta.env.VITE_IMAGE_RECOMMENDATION;

export const Recommendations: React.FC<RecommendationsProps> = ({ recommendations }) => {
  return (
    <div className="mt-8 max-w-[900px]">
      <h2 className="text-[1.5em] font-semibold mb-4">Recommendations</h2>
      <div className="relative">
        <div className="flex gap-[14px] overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 scrollbar-rounded">
          {recommendations.map((item) => (
            <Link to={`/movie/${item.id}`} className="group cursor-pointer">
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
                    <div className="flex gap-3">
                      <button className="w-7 h-7 rounded-full bg-[#032541]/60 hover:bg-[#032541] flex items-center justify-center">
                        <Star className="w-3.5 h-3.5 text-white" />
                      </button>
                      <button className="w-7 h-7 rounded-full bg-[#032541]/60 hover:bg-[#032541] flex items-center justify-center">
                        <Heart className="w-3.5 h-3.5 text-white" />
                      </button>
                      <button className="w-7 h-7 rounded-full bg-[#032541]/60 hover:bg-[#032541] flex items-center justify-center">
                        <Bookmark className="w-3.5 h-3.5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex justify-between items-start">
                <h3 className="text-[1em] font-medium leading-tight text-[#000000] hover:text-[#01b4e4] transition-colors">
                  {item.title}
                </h3>
                <span className="text-[1em] text-[#666666]">{Math.round(item.vote_average)}%</span>
              </div>
            </Link>
          ))}
        </div>
        <div
          className="absolute right-0 top-0 bottom-4 w-[60px] pointer-events-none
                      bg-gradient-to-l from-white via-white/70 to-transparent"
        />
      </div>
    </div>
  );
};
