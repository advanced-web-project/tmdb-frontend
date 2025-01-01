import TimeWindowButton from './time-window-button';
import {MovieCard} from '../home-page/movie-card';
import ToggleShowMoreButton from './toggle-showmore-button';
import { useState, useEffect } from 'react';
import TrendingMovies from '../../../type/movie/movie_trending.type';
import { fetchTrendingMovies } from '../../../api/MovieApi.tsx';
import { showError } from '../../../utility/ErrorToastifyRender.tsx';
import { useNavigate } from 'react-router-dom';

export function TrendingMovie() {
  const [trendingMovies, setTrendingMovies] = useState<TrendingMovies[]>([]);
  const [timeWindowTrending, setTimeWindowTrending] = useState<'day' | 'week'>('day');
  const [visibleMovies, setVisibleMovies] = useState(6);
  const [initialVisibleMovies] = useState(6);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchTrendingMovie = async () => {
      try {
        const movies = await fetchTrendingMovies(timeWindowTrending);
        const transformedMovies = movies.map((movie) => ({
          id: movie.id,
          title: movie.title,
          release_date: movie.release_date,
          poster_path: movie.poster_path
            ? `${import.meta.env.VITE_IMAGE_MOVIE_TRENDING_CARD}${movie.poster_path}`
            : '/placeholder.svg',
          vote_average: Math.round(movie.vote_average * 10),
        }));
        setTrendingMovies(transformedMovies);
        setVisibleMovies(initialVisibleMovies);
      } catch (error: any) {
        if (error.response) {
          const status = error.response.status;
          if (status === 404) {
            navigate('/not-found');
          } else if (status === 500) {
            navigate('/server-error');
          } else {
            showError('Failed to fetch trending movies: ' + error.message);
          }
        } else {
          showError('Failed to fetch trending movies: ' + error.message);
        }
      }
    };
    fetchTrendingMovie();
  }, [timeWindowTrending]);

  const handleSeeMore = () => {
    setVisibleMovies((prev) => prev + 6);
  };

  const handleSeeLess = () => {
    setVisibleMovies(initialVisibleMovies);
  };


  return (<>
  <section className="py-8">
        <div className="container px-10">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-[1.5rem] font-semibold">Trending</h2>
            <div className="relative inline-flex h-[30px] p-[1.5px] rounded-full bg-[#1ed5a9]">
              <div className="flex w-full h-full rounded-full bg-[#FFFF]">
                <TimeWindowButton label="Today" isActive={timeWindowTrending === 'day'} onClick={() => setTimeWindowTrending('day')} />
                <TimeWindowButton
                  label="This Week"
                  isActive={timeWindowTrending === 'week'}
                  onClick={() => setTimeWindowTrending('week')}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {trendingMovies.slice(0, visibleMovies).map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
          <div className="flex justify-center mt-4 gap-4">
            <ToggleShowMoreButton isVisible={visibleMovies < trendingMovies.length} onClick={handleSeeMore} showMore={true} />
            <ToggleShowMoreButton
              isVisible={visibleMovies >= trendingMovies.length && visibleMovies > initialVisibleMovies}
              onClick={handleSeeLess}
              showMore={false}
            />
          </div>
        </div>
      </section>
  </>)
}
