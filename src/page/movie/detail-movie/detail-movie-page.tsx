import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastSection } from '../../../components/page/detail-movie-page/CastSection';
import { SocialSection } from '../../../components/page/detail-movie-page/SocialSection';
import { FactsSidebar } from '../../../components/page/detail-movie-page/FactsSidebar';
import { ShowHeader } from '../../../components/page/detail-movie-page/ShowHeader';
import { apiGetMovieById } from '../../../apis/movieApi';
import { showError } from '../../../util/ErrorToastifyRender';
import { Movie } from '../../../type/movie/Movie';
import Spinner from '../../../components/shared/spinner';

const DetailMoviePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [detailMovie, setDetailMovie] = useState<Movie>({} as Movie);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchDetailMovie = async () => {
      if (id) {
        const detailedMovie = await apiGetMovieById(id); // Fetch movie details using the id
        console.log(detailedMovie);
        setDetailMovie(detailedMovie); // Set the movie details in the state
        setLoading(false); // Set loading
      } else {
        showError('Movie ID is undefined');
      }
    };
    fetchDetailMovie(); // Call the fetchDetailMovie function to fetch movie details
  }, [id]);

  if (loading) {
    return <Spinner loading={true} alignStyle="flex justify-center items-center h-screen" />;
  }

  return (
    <>
      <ShowHeader movieDetail={detailMovie} />
      <div className="max-w-[1300px] mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <CastSection cast={detailMovie.credits.cast} />
            <SocialSection reviews={detailMovie.reviews} />
            {/* <Recommendations recommendations={detailMovie.recommendations} /> */}
          </div>
          <FactsSidebar detailMovie={detailMovie} />
        </div>
      </div>
    </>
  );
};

export default DetailMoviePage;
