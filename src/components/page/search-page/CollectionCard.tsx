<<<<<<< HEAD
import { Collection } from '../../../type/search/collection';
const IMAGE_MOVIE_BACKDROP = import.meta.env.VITE_IMAGE_MOVIE_BACKDROP;

const CollectionCard: React.FC<{ collection: Collection }> = ({ collection }) => {
  const backdropUrl = collection.backdrop_path
    ? `${IMAGE_MOVIE_BACKDROP}/${collection.backdrop_path}`
    : 'https://via.placeholder.com/500';

  return (
    <div key={collection.id} className="flex mb-[20px] rounded-[10px] shadow-md  rounded-[10px]">
      <img
        src={backdropUrl}
        alt={collection.name}
        className="h-[141px] w-[94px] rounded-[4px] bg-[#dbdbdb] object-cover"
      />
      <div className="flex flex-col ml-3">
        <h2 className="mb-1">
          <a href="#" className="text-[1.2em] font-bold leading-[1.1] text-black no-underline hover:text-[#01b4e4]">
            {collection.name}
          </a>
        </h2>
        <p className="mb-[10px] text-[1em] text-[#999]">{collection.original_name}</p>
        <p className="text-[1em] leading-[1.4] mr-2 text-justify text-[#4d4d4d]">
          {collection.overview.length > 200 ? `${collection.overview.substring(0, 200)}...` : collection.overview}
        </p>
      </div>
    </div>
  );
};
export default CollectionCard;
=======
import { Collection } from "../../../type/search/collection";
const IMAGE_MOVIE_BACKDROP = import.meta.env.VITE_IMAGE_MOVIE_BACKDROP;
const ImageCard: React.FC<{ imageUrl: string; alt: string }> = ({ imageUrl, alt }) => (
    <div className="w-32 h-48 rounded-lg mr-6">
        <img
            src={imageUrl}
            alt={alt}
            className="w-full h-full object-cover rounded-lg"
        />
    </div>
);

const ContentCard: React.FC<{ title: string; subtitle: string; overview: string }> = ({ title, subtitle, overview }) => (
    <div className="flex flex-col justify-between">
        <div>
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        </div>
        <p className="text-gray-600 mt-3">{overview}</p>
    </div>
);

const CollectionCard: React.FC<{ collection: Collection }> = ({ collection }) => {
    const backdropUrl = collection.backdrop_path
        ? `${IMAGE_MOVIE_BACKDROP}/${collection.backdrop_path}`
        : "https://via.placeholder.com/500";

    return (
        <div key={collection.id} className="flex items-start bg-white shadow-lg rounded-lg border p-4 mb-6 hover:shadow-2xl transition-shadow">
            <ImageCard imageUrl={backdropUrl} alt={collection.original_name} />
            <ContentCard
                title={collection.name}
                subtitle={collection.original_name}
                overview={collection.overview}
            />
        </div>
    );
};
export default CollectionCard;
>>>>>>> fba66c51de7e0f05ec220a7960e323ac772bea20
