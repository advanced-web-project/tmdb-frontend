interface MovieResult {
  backdrop_path: string | null; // Can be null if no backdrop image
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null; // Can be null if no poster image
  media_type: string; // e.g., "movie" or "tv"
  adult: boolean;
  original_language: string; // ISO 639-1 language code, e.g., "en"
  genre_ids: number[]; // Array of genre IDs
  popularity: number;
  release_date: string; // ISO 8601 date format, e.g., "2024-10-17"
  video: boolean; // Indicates if this is a video
  vote_average: number;
  vote_count: number;
}

export default interface MovieRecommendation {
  page: number;
  results: MovieResult[];
}
