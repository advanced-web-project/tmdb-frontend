<<<<<<< HEAD
import { Person } from '../../../type/search/person';
const AVATAR_CAST_BASE_URL = import.meta.env.VITE_AVATAR_CAST_URL;

const PersonCard: React.FC<{ person: Person }> = ({ person }) => {
  const profileUrl = person.profile_path
    ? `${AVATAR_CAST_BASE_URL}/${person.profile_path}`
    : 'https://via.placeholder.com/500';

  return (
    <div key={person.id} className="flex mb-[20px] rounded-[10px]">
      <img
        src={profileUrl}
        alt={person.original_name}
        className="h-[70px] w-[70px] rounded-[10px] bg-[#dbdbdb] object-cover"
      />
      <div className="flex flex-col ml-4">
        <h2 className="mb-1">
          <a href="#" className="text-[1.2em] font-bold leading-[1.1] text-black no-underline hover:text-[#01b4e4]">
            {person.original_name}
          </a>
        </h2>
        <p className="mb-[10px] text-[1em] text-[#999]">{person.known_for_department}</p>
      </div>
    </div>
  );
};
export default PersonCard;
=======
import { Person } from "../../../type/search/person";
const AVATAR_CAST_BASE_URL = import.meta.env.VITE_AVATAR_CAST_URL;

const PersonImageCard: React.FC<{ imageUrl: string; alt: string }> = ({ imageUrl, alt }) => (
    <div className="w-32 h-48 rounded-lg mr-6">
        <img
            src={imageUrl}
            alt={alt}
            className="w-full h-full object-cover rounded-lg"
        />
    </div>
);
const PersonCard: React.FC<{ person: Person }> = ({ person }) => {
    const profileUrl = person.profile_path
        ? `${AVATAR_CAST_BASE_URL}/${person.profile_path}`
        : "https://via.placeholder.com/500";

    return (
        <div key={person.id} className="flex items-start bg-white shadow-lg rounded-lg border p-4 mb-6 hover:shadow-2xl transition-shadow">
            <PersonImageCard imageUrl={profileUrl} alt={person.original_name} />
            <div className="flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">{person.original_name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{person.release_date}</p>
                </div>
                <p className="text-gray-600 mt-3">{person.known_for_department}</p>
            </div>
        </div>
    );
};
export default PersonCard;
>>>>>>> fba66c51de7e0f05ec220a7960e323ac772bea20
