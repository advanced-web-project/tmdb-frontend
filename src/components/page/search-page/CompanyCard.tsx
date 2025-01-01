<<<<<<< HEAD
import { Company } from '../../../type/search/company';

const CompanyCard: React.FC<{ company: Company }> = ({ company }) => (
  <div className="p-2 border-b border-gray-200 hover:bg-gray-100">
    <p className="text-md text-gray-800">{company.name}</p>
  </div>
);
export default CompanyCard;
=======
import { Company } from "../../../type/search/company";

const CompanyCard: React.FC<{ company: Company }> = ({ company }) => (
    <div className="p-2 border-b border-gray-200 hover:bg-gray-100">
        <p className="text-md text-gray-800">{company.name}</p>
    </div>
);
export default CompanyCard;
>>>>>>> fba66c51de7e0f05ec220a7960e323ac772bea20
