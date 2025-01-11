import { Credit } from './MovieCredit';
import { Trailer } from './Trailer';
import { Keyword } from './Keyword';
import { Review } from './Review';

export interface Movie {
  _id: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: object;
  budget: number;
  genres: object;
  homepage: string;
  imdb_id: string;
  origin_country: object;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: object;
  production_countries: object;
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: object;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: Credit;
  trailers: Trailer[];
  keywords: Keyword[];
  reviews: Review[];
}
