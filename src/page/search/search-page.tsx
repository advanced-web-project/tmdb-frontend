import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '@mui/material';
import {
  searchCollection,
  searchCompany,
  searchKeyWord,
  searchMovie,
  searchPerson,
  searchTV,
} from '../../api/SearchApi';

import MovieCard from '../../components/page/search-page/MovieCard';
import { MovieResult } from '../../type/temp/search/movie';
import Spinner from '../../components/shared/spinner';
import TVResult from '../../type/temp/search/tv';
import { PersonResult } from '../../type/temp/search/person';
import { CollectionResult } from '../../type/temp/search/collection';
import { CompanyResult } from '../../type/temp/search/company';
import { KeyWordResult } from '../../type/temp/search/keyword';
import { Search, X, ChevronDown } from 'lucide-react';
import FilterPanel from '../../components/page/search-page/MovieFilters';

type SearchResults = {
  movie: MovieResult | null;
  tv: TVResult | null;
  people: PersonResult | null;
  collection: CollectionResult | null;
  company: CompanyResult | null;
  keyword: KeyWordResult | null;
};

const searchOptions = ['Movie Name', 'Actor Name', 'Natural Query'];

type SearchPageProps = object;

const SearchPage: React.FC<SearchPageProps> = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [results, setResults] = useState<SearchResults>({
    movie: null,
    tv: null,
    people: null,
    collection: null,
    company: null,
    keyword: null,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const comboboxRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Movie Name');

  useEffect(() => {
    const queryValue = searchParams.get('query');
    if (queryValue) {
      setSearchTerm(queryValue);
      handleSearch(queryValue);
    }
  }, [searchParams]);

  const handleSearch = async (term: string) => {
    const searchValue = term.trim() || searchTerm.trim();
    setLoading(true);
    try {
      const [movie, tv, people, collection, company, keyword] = await Promise.all([
        searchMovie(searchValue, 1),
        searchTV(searchValue, 1),
        searchPerson(searchValue, 1),
        searchCollection(searchValue, 1),
        searchCompany(searchValue, 1),
        searchKeyWord(searchValue, 1),
      ]);
      setResults({ movie, tv, people, collection, company, keyword });
    } catch (error) {
      console.error('Error when searching', error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(searchTerm);
    }
  };

  function handlePageChange(page: number) {
    // setLoading(true);
    //handleSearch(searchTerm);
  }

  const currentResults = results['movie'];

  return (
    <div className="flex flex-col h-auto">
      {/* Search Bar with Combobox */}
      <div className="relative border-b border-[#d7d7d7]" ref={comboboxRef}>
        <div className="relative flex h-[46px] items-center">
          <Search className="absolute left-[14px] h-[20px] w-[20px] text-[#666666]" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            onKeyDown={handleKeyDown}
            className="h-full w-full border-none bg-white pl-[40px] pr-[120px] text-[16px] text-black placeholder-[#666] outline-none"
            placeholder="Search for a movie, tv show, person..."
          />
          {searchTerm && (
            <button
              className="absolute right-[100px] p-[4px] hover:text-[#01b4e4]"
              onClick={() => {
                setSearchTerm('');
              }}
            >
              <X className="h-[22px] w-[22px] text-[#666666]" />
            </button>
          )}
          <div className="absolute right-[10px]" ref={optionsRef}>
            <button
              className="flex h-[30px] items-center rounded bg-[#01b4e4] px-[10px] text-[14px] font-semibold text-white hover:bg-[#0093c4]"
              onClick={() => setIsOptionsOpen(!isOptionsOpen)}
            >
              {selectedOption}
              <ChevronDown className="ml-[6px] h-[16px] w-[16px]" />
            </button>
            {isOptionsOpen && (
              <div className="absolute right-0 top-[34px] z-50 w-[200px] rounded-[4px] border border-[#e3e3e3] bg-white shadow-lg">
                {searchOptions.map((option) => (
                  <div
                    key={option}
                    className="cursor-pointer px-[20px] py-[10px] text-[14px] text-[#000] hover:bg-[#f7f7f7]"
                    onClick={() => {
                      setSelectedOption(option);
                      setIsOptionsOpen(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row mt-5 px-5">
        {/* Filter */}
        <FilterPanel />

        {/* Search Results */}
        <div className="flex-1 mx-2">
          {loading ? (
            <Spinner loading={true} alignStyle="flex justify-center items-center h-screen" />
          ) : (
            currentResults?.results.map((result: any) => <MovieCard key={result.id} movie={result} />)
          )}

          <div className="flex justify-center my-4 ">
            {currentResults && currentResults!.total_pages > 1 && (
              <Pagination
                count={currentResults!.total_pages}
                page={currentResults!.page}
                variant="outlined"
                onChange={(_, value) => handlePageChange(value)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
