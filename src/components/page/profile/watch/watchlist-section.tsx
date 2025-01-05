import HeaderList from '../header-list';
import MovieCardList from '../movie-card-list';

const movies = [
  {
    title: 'A Nonsense Christmas with Sabrina Carpenter',
    date: 'December 5, 2024',
    description:
      'Pop icon Sabrina Carpenter jingles all the bells in her first-ever variety music special full of holiday hits, unexpected duets and comedic cameos.',
    rating: 66,
    image: 'https://media.themoviedb.org/t/p/w440_and_h660_face/41MrZENGRsQXJdnnxg0KeiKcW0N.jpg',
  },
  {
    title: 'Mufasa: The Lion King',
    date: 'December 20, 2024',
    description:
      'Told in flashbacks, Mufasa is an orphaned cub, lost and alone until he meets a sympathetic lion named Taka—the heir to a royal bloodline. The chance meeting sets in motion a journey of misfits searching for their destiny and working together to evade a threatening and deadly foe.',
    rating: 73,
    image: 'https://media.themoviedb.org/t/p/w440_and_h660_face/4hSnGq014MGdxCOMWBwyvKoDjrF.jpg',
  },
];

export default function WatchListSection() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl py-4 mx-4">
        <HeaderList title={"My Watchlist"} totalMovie={2} />
        <div className="space-y-8">
          {movies.map((movie) => (
            <MovieCardList key={movie.title} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
