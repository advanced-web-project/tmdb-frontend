import RatingOverview from './rating-overview';
import GenreChart from './genre-chart';

const StaticSection: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Stats</h2>
      <div className="grid grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg mb-4">Total Favorite</h3>
          <div className="text-5xl font-bold text-pink-500">0</div>
        </div>
        <div>
          <h3 className="text-lg mb-4">Total Ratings</h3>
          <div className="text-5xl font-bold text-pink-500">0</div>
        </div>
        <div>
          <h3 className="text-lg mb-4">Total Watchlist</h3>
          <div className="text-5xl font-bold text-pink-500">0</div>
        </div>
        <RatingOverview />
        <GenreChart />
      </div>
    </div>
  );
};
export default StaticSection;
