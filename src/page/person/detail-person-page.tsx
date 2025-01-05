import { ProfileInfo } from '../../components/page/detail-person/ProfileInfo';
import { MovieGrid } from '../../components/page/detail-person/MovieGrid';
import { Filmography } from '../../components/page/detail-person/Filmography';
import { Biography } from '../../components/page/detail-person/Biography';

const personalInfo = {
  stageName: '정윤하',
  knownFor: 'Acting',
  credits: 25,
  gender: 'Female',
  birthday: 'March 4, 1986 (38 years old)',
  placeOfBirth: 'Seoul, South Korea',
  alsoKnownAs: ['정윤하', 'Yunha Jung', 'Jung Yun-ha'],
};

const knownForMovies = [
  {
    id: 1,
    title: 'Ashfall',
    posterPath: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9FRw2qOU74GLSWbDkX6wWp6mgQD.jpg',
    year: '2024',
  },
  {
    id: 2,
    title: 'Exhuma',
    posterPath: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9FRw2qOU74GLSWbDkX6wWp6mgQD.jpg',
    year: '2024',
  },
  {
    id: 3,
    title: 'The Dude in Me',
    posterPath: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9FRw2qOU74GLSWbDkX6wWp6mgQD.jpg',
    year: '2023',
  },
  {
    id: 4,
    title: 'The Suspect',
    posterPath: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9FRw2qOU74GLSWbDkX6wWp6mgQD.jpg',
    year: '2022',
  },
  {
    id: 5,
    title: 'Metamorphosis',
    posterPath: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9FRw2qOU74GLSWbDkX6wWp6mgQD.jpg',
    year: '2021',
  },
  {
    id: 6,
    title: 'Sinkhole',
    posterPath: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9FRw2qOU74GLSWbDkX6wWp6mgQD.jpg',
    year: '2021',
  },
  {
    id: 7,
    title: 'Sinkhole',
    posterPath: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9FRw2qOU74GLSWbDkX6wWp6mgQD.jpg',
    year: '2021',
  },
  {
    id: 8,
    title: 'Sinkhole',
    posterPath: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9FRw2qOU74GLSWbDkX6wWp6mgQD.jpg',
    year: '2021',
  },
];

const biography = {
  name: '정윤하',
  biography: `Jung Yoon-ha (born March 4, 1986) is a South Korean actress. She is best known for her roles in the films The Suspect (2013) and The Dude in Me (2019).`,
}

export default function App() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
        <ProfileInfo personalInfo={personalInfo} />
        <div>
          <Biography name={biography.name} biography={biography.biography} />
          <MovieGrid movies={knownForMovies} />
          <Filmography />
        </div>
      </div>
    </main>
  );
}
