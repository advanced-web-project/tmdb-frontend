export interface KeyWord {
  id: number;
  name: string;
}

export interface KeyWordResult {
  page: number;
  total_pages: number;
  total_results: number;
  results: KeyWord[];
}
