import React from 'react';
import { useParams } from 'react-router-dom';
import { ProfileInfo } from '../../components/page/detail-person/ProfileInfo';
import { MovieGrid } from '../../components/page/detail-person/MovieGrid';
import { Filmography } from '../../components/page/detail-person/Filmography';
import { Biography } from '../../components/page/detail-person/Biography';
import { usePersonById } from '../../apis/personApi';
import Spinner from '../../components/shared/spinner';
import { showError } from '../../util/ErrorToastifyRender';

const DetailPersonPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: personDetail, isLoading, isError } = usePersonById(id!);

  if (isLoading) {
    return <Spinner loading={true} alignStyle="flex justify-center items-center h-screen" />;
  }

  if (isError) {
    showError('Failed to load person details');
    return <div>Error loading person details</div>;
  }

  if (!personDetail) {
    return <div>No person details found.</div>;
  }

  const personalInfo = {
    profilePath: personDetail.profile_path,
    stageName: personDetail.name,
    knownFor: personDetail.known_for_department,
    gender: personDetail.gender === 1 ? 'Female' : 'Male',
    birthday: personDetail.birthday,
    placeOfBirth: personDetail.place_of_birth,
    alsoKnownAs: personDetail.also_known_as,
  };

  const knownForMovies = personDetail.movie_credits
    ? personDetail.movie_credits.cast.map((movie) => ({
        id: movie.id,
        title: movie.title,
        posterPath: movie.poster_path,
        year: movie.release_date.split('-')[0],
        role: movie.character || 'Unknown',
      }))
    : [];

  const biography = {
    name: personDetail.name,
    biography: personDetail.biography,
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8">
        <ProfileInfo personalInfo={personalInfo} />
        <div>
          <Biography name={biography.name} biography={biography.biography} />
          <MovieGrid movies={knownForMovies} />
          <Filmography movieCast={personDetail.movie_credits ? personDetail.movie_credits.cast : []} />
        </div>
      </div>
    </main>
  );
};

export default DetailPersonPage;