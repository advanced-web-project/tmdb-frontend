import { useState } from 'react';
import { MovieCard } from '../home-page/movie-card';
import { useCategoriesMovies } from '../../../apis/movieApi';
import Spinner from '../../shared/spinner';

export function PopularMovie() {
  const [page] = useState(1);
  const [size] = useState(20);
  const { data: popularMoviesData, isLoading, isError } = useCategoriesMovies('popular', page, size);

  const popularMovies = popularMoviesData?.data.map((movie) => ({
    ...movie,
    poster_path: movie.poster_path
      ? `${import.meta.env.VITE_IMAGE_MOVIE_TRENDING_CARD}${movie.poster_path}`
      : '/placeholder.svg',
    vote_average: movie.vote_average,
  })) || [];

  if (isLoading) {
    return <Spinner alignStyle={'flex justify-center items-center my-12'} loading={true} />;
  }

  if (isError) {
    return <div>Error loading popular movies</div>;
  }

  return (
    <>
      <section className="py-8">
        <div className="container px-4 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-4 mb-6">
            <h2 className="text-[1.5rem] font-semibold">Popular Movies</h2>
          </div>
          <div className="flex overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 scrollbar-rounded pb-6 gap-4 no-scrollbar">
            {popularMovies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}