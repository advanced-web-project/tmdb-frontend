import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastSection } from '../../../components/page/detail-movie-page/CastSection';
import { SocialSection } from '../../../components/page/detail-movie-page/SocialSection';
import { Recommendations } from '../../../components/page/detail-movie-page/Recommendations';
import { FactsSidebar } from '../../../components/page/detail-movie-page/FactsSidebar';
import { ShowHeader } from '../../../components/page/detail-movie-page/ShowHeader';
import { fetchMovieDetails, movieRecommendationPerMovie, movieKeywords, movieReviews } from '../../../api/MovieApi';
import { listCastPerMovie } from '../../../api/CastApi';
import { showError } from '../../../utility/ErrorToastifyRender';
import MovieDetails from '../../../type/temp/movie/movie_detail.type';
import MovieCredits from '../../../type/temp/cast/cast.type';
import MovieRecommendation from '../../../type/temp/movie/movie_recommendation';
import { MovieKeywords } from '../../../type/temp/movie/keyword.type';
import { MovieReviews } from '../../../type/temp/movie/review.type';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../components/shared/spinner';

const DetailMoviePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [detailMovie, setDetailMovie] = useState<MovieDetails>({} as MovieDetails);
  const [movieCredits, setMovieCredits] = useState<MovieCredits>({} as MovieCredits);
  const [recommendations, setRecommendations] = useState<MovieRecommendation>({} as MovieRecommendation);
  const [movieKey, setMovieKeywords] = useState<MovieKeywords>({} as MovieKeywords);
  const [reviews, setReviews] = useState<MovieReviews>({} as MovieReviews);

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchDetailMovie = async () => {
      try {
        if (id) {
          const detailedMovie = await fetchMovieDetails(id); // Fetch movie details using the id
          const movieCredits = await listCastPerMovie(id); // Fetch movie credits using the id
          const movieRecommendations = await movieRecommendationPerMovie(id); // Fetch movie recommendations using the id
          const movieKeyword = await movieKeywords(id); // Fetch movie keywords using the id
          const movieReview = await movieReviews(id); // Fetch movie reviews using the id

          setDetailMovie(detailedMovie); // Set the movie details in the state
          setMovieCredits(movieCredits); // Set the movie credits in the state
          setRecommendations(movieRecommendations); // Set the movie recommendations in the
          setMovieKeywords(movieKeyword); // Set the movie keywords in the state
          setReviews(movieReview); // Set the movie reviews in the state

          setLoading(false); // Set loading
        } else {
          showError('Movie ID is undefined');
        }
      } catch (error: any) {
        if (error.response) {
          const status = error.response.status;
          if (status === 404) {
            navigate('/not-found');
          } else if (status === 500) {
            navigate('/server-error');
          } else {
            showError('Failed to fetch movie details: ' + error.message);
          }
        } else {
          showError('Failed to fetch movie details: ' + error.message);
        }
      }
    };
    fetchDetailMovie(); // Call the fetchPhoto function to fetch photo details
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
            <CastSection cast={movieCredits.cast} />
            <SocialSection reviews={reviews.results} />
            <Recommendations recommendations={recommendations.results} />
          </div>
          <FactsSidebar detailMovie={detailMovie} keywords={movieKey.keywords} />
        </div>
      </div>
    </>
  );
};

export default DetailMoviePage;
