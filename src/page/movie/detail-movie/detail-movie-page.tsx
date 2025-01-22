import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastSection } from '../../../components/page/detail-movie-page/CastSection';
import { SocialSection } from '../../../components/page/detail-movie-page/SocialSection';
import { FactsSidebar } from '../../../components/page/detail-movie-page/FactsSidebar';
import { ShowHeader } from '../../../components/page/detail-movie-page/ShowHeader';
import { useMovieByTmdbId, useHistoryMovies, useSimilarMovies } from '../../../apis/movieApi';
import Spinner from '../../../components/shared/spinner';
import { Recommendations } from '../../../components/page/detail-movie-page/Recommendations';
import { HistoryMovies } from '../../../components/page/detail-movie-page/HistoryMovie';

const DetailMoviePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recommendationsLoading, setRecommendationsLoading] = useState(false);

  const { data: detailMovie, isLoading: isDetailLoading } = useMovieByTmdbId(id!);
  const { data: historyMovies, isLoading: isHistoryLoading} = useHistoryMovies();
  const { data: similarMovies, refetch: refetchSimilarMovies } = useSimilarMovies(parseInt(id!, 10));

  const handleRecommendationClick = async () => {
    setRecommendationsLoading(true);
    try {
      await refetchSimilarMovies();
    } catch (error) {
      console.error('Failed to fetch similar movies:', error);
    } finally {
      setRecommendationsLoading(false);
    }
  };

  if (isDetailLoading || isHistoryLoading) {
    return <Spinner loading={true} alignStyle="flex justify-center items-center h-screen" />;
  }

  return (
    <>
      {detailMovie && <ShowHeader movieDetail={detailMovie} />}
      <div className="max-w-[1300px] mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {detailMovie && <CastSection cast={detailMovie.credits.cast} />}
            {detailMovie && <SocialSection reviews={detailMovie.reviews} />}
            <Recommendations
              loading={recommendationsLoading}
              recommendations={similarMovies || []}
              onHeaderClick={handleRecommendationClick}
            />
            <HistoryMovies historyMovies={historyMovies || []} />
          </div>
          {detailMovie && <FactsSidebar detailMovie={detailMovie} />}
        </div>
      </div>
    </>
  );
};

export default DetailMoviePage;