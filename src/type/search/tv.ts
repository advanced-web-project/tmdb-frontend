export interface TV {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  first_air_date: string;
}
export default interface TVResult {
  page: number;
  total_pages: number;
  total_results: number;
  results: TV[];
}
