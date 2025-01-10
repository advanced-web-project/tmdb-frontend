export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
}

export interface MovieResult {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
}
