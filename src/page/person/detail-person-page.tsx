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
  biography: `Lee Jung-jae (이정재) is a South Korean actor. Born on December 15, 1972, he began modelling in 1993 before getting his first acting roles the film The Young Man (1994) and the TV series Feelings (1994) and Sandglass (1995), which is one of the highest rated Korean dramas of all time with a peak rating of 64.5%. But his real breakthrough was with leading roles in award-winning films The Affair (1998) and City of the Rising Sun (1999). The latter of which earned him the Best Actor award at the prestigious Blue Dragon film awards.

This was followed by a series of critical hits like Il Mare (2000) and commercial successes including Last Present (2001), The Last Witness (2001), Oh Brothers (2003), and the blockbuster Typhoon (2005). After a brief career slump of flop movies and tv shows, he returned with the critical and commercial hit The Housemaid (2010), which is a remake of the 1960 film of the same name. Since then, he went on to cement himself as one of Korea's biggest movie stars with a string of some of the biggest blockbusters in Korean history including The Thieves (2012), New World (2013), The Face Reader (2013), Assassination (2015), Operation Chromite (2016), and the Along with the Gods films (2017-2018). Most of these films did north of 12 million admissions at the domestic box-office, with The Thieves (2012) and Along with the Gods (2017) becoming the #2 biggest Korean hit in history at their respective time of release. He received a number of awards and nominations for these works including a Popularity Award at the prestigious Grand Bell awards.

His most recent blockbuster is Deliver Us From Evil (2020) in which he reunited with his New World (2013) co-star Hwang Jung-min. It crossed 4 million admissions domestically and was the second biggest hit of the year in Korea.`,
};

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
