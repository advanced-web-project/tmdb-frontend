export interface Person {
  id: number;
  known_for_department: string;
  original_name: string;
  profile_path: string | null;
  release_date: string;
  know_for: Relevant[];
}

export interface Relevant {
  id: number;
  title: string;
  original_title: string;
}

export interface PersonResult {
  page: number;
  total_pages: number;
  total_results: number;
  results: Person[];
}
