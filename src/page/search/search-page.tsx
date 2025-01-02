import React, { useEffect, useState } from 'react';
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
import Sidebar from '../../components/page/search-page/SideBar';
import MovieCard from '../../components/page/search-page/MovieCard';
import { MovieResult } from '../../type/search/movie';
import TVResult from '../../type/search/tv';
import { PersonResult } from '../../type/search/person';
import { CollectionResult } from '../../type/search/collection';
import { CompanyResult } from '../../type/search/company';
import { KeyWordResult } from '../../type/search/keyword';

type SearchResults = {
  movie: MovieResult | null;
  tv: TVResult | null;
  people: PersonResult | null;
  collection: CollectionResult | null;
  company: CompanyResult | null;
  keyword: KeyWordResult | null;
};

type Category = 'movie' | 'tv' | 'people' | 'collection' | 'company' | 'keyword';

type SearchPageProps = {};

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
  const [category, setCategory] = useState<Category>('tv'); // Default category
  const [searchParams] = useSearchParams();

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

  const handleCategoryChange = (newCategory: Category) => {
    setCategory(newCategory);
  };
  const currentResults = results[category];

  const handlePageChange = async (value: number) => {
    setLoading(true);
    try {
      const searchFnMap: Record<Category, Function> = {
        movie: searchMovie,
        tv: searchTV,
        people: searchPerson,
        collection: searchCollection,
        company: searchCompany,
        keyword: searchKeyWord,
      };
      const updatedResults = await searchFnMap[category](searchTerm, value);
      setResults((prev) => ({ ...prev, [category]: updatedResults }));
    } catch (error) {
      console.error('Error when changing page', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-auto">
      {/* Search Bar */}
      <div className="flex items-center bg-white shadow-md px-4 py-3">
        <input
          type="text"
          placeholder="Enter your search query..."
          className="flex-1 border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Updates the input
          onKeyDown={handleKeyDown} // Listen for the Enter key press
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar category={category} setCategory={handleCategoryChange} results={results} />

        {/* Content */}
        <div className="flex-1 p-4 overflow-y-auto">
          {loading ? (
            <p className="text-center text-blue-500">Loading...</p>
          ) : (
            currentResults?.results.map(
              (result: any) => category === 'movie' && <MovieCard key={result.id} movie={result} />,
            )
          )}
          {/* Pagination */}
          <div className="flex justify-center mt-4">
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
