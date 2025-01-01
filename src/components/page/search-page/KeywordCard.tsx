<<<<<<< HEAD
import { KeyWord } from '../../../type/search/keyword';

const KeyWordCard: React.FC<{ keyword: KeyWord }> = ({ keyword }) => (
  <div className="p-2 border-b border-gray-200 hover:bg-gray-100">
    <p className="text-md text-gray-800">{keyword.name}</p>
  </div>
=======
import { KeyWord } from "../../../type/search/keyword";

const KeyWordCard: React.FC<{ keyword: KeyWord }> = ({ keyword }) => (
    <div className="p-2 border-b border-gray-200 hover:bg-gray-100">
        <p className="text-md text-gray-800">{keyword.name}</p>
    </div>
>>>>>>> fba66c51de7e0f05ec220a7960e323ac772bea20
);

export default KeyWordCard;
