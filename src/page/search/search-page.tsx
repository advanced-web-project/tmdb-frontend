import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from '@mui/material';
import { searchMovie } from '../../apis/temp/SearchApi';
import MovieCard from '../../components/page/search-page/MovieCard';
import { MovieResult } from '../../type/temp/search/movie';
import Spinner from '../../components/shared/spinner';
import FilterPanel from '../../components/page/search-page/MovieFilters';
import { SearchBar } from '../../components/page/search-page/SearchBar';

type SearchResults = {
  movie: MovieResult | null;
};

const searchOptions = ['Movie Name', 'Actor Name', 'Natural Query'];

type SearchPageProps = object;

const SearchPage: React.FC<SearchPageProps> = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [results, setResults] = useState<SearchResults>({
    movie: null,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const comboboxRef = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = useState('Movie Name');
  const [naturalQueryValue, setNaturalQueryValue] = useState(50);

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
      const [movie] = await Promise.all([searchMovie(searchValue, 1)]);
      setResults({ movie });
    } catch (error) {
      console.error('Error when searching', error);
    } finally {
      setLoading(false);
    }
  };

  function handlePageChange(page: number) {
    setLoading(true);
    handleSearch(searchTerm);
  }

  const currentResults = results['movie'];

  return (
    <div className="flex flex-col h-auto">
      {/* Search Bar with Combobox */}
      <div className="relative border-b border-[#d7d7d7]" ref={comboboxRef}>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          threshold={naturalQueryValue}
          setThreshold={setNaturalQueryValue}
          onSearch={handleSearch}
          searchOptions={searchOptions}
        />
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
