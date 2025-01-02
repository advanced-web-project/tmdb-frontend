'use client';

import Image from '../../shared/image';
import DropdownInteraction from './dropdown-interaction';
import { useNavigate } from 'react-router-dom';
import RatingProgressBar from '../../shared/rating-progress-bar';

interface MovieCardProps {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
}

export function MovieCard({
  id = 402413,
  title = 'Moana 2',
  release_date = 'Nov 27, 2024',
  poster_path = '/placeholder.svg',
  vote_average = 71,
}: MovieCardProps) {
  const navigate = useNavigate();

  const handleNavigateToDetail = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="relative rounded-[8px] shadow-lg flex-shrink-0 w-full max-w-[175px]">
      <div className="relative rounded-[8px]">
        {/* Movie Poster */}
        <div className="relative rounded-[8px]  overflow-hidden">
          <div onClick={handleNavigateToDetail} className="cursor-pointer">
            <Image
              z-0
              src={poster_path}
              alt={title}
              width={150}
              height={225}
              className="w-full  h-[225px] object-cover"
            />
          </div>
          <div className="absolute top-2 right-2 z-[999]">
            <DropdownInteraction />
          </div>
        </div>

        {/* Circular Progress Container */}
        <div className="absolute -bottom-5 left-2 z-20">
          <div className="relative w-[38px] h-[38px]">
            <div className="absolute inset-0 rounded-[8px]" />
            <RatingProgressBar rating={vote_average} />
          </div>
        </div>
      </div>
      <div className="my-6 px-1">
        <h3 className="font-bold text-base leading-4 mb-1 hover:text-[#01b4e4] cursor-pointer">{title}</h3>
        <p className="text-[#666666] text-sm">{release_date}</p>
      </div>
    </div>
  );
}
