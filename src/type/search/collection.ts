export interface Collection {
  id: number;
  name: string;
  overview: string;
  backdrop_path: string | null;
  original_name: string;
}

export interface CollectionResult {
  page: number;
  total_pages: number;
  total_results: number;
  results: Collection[];
}
