export interface Company {
  id: number;
  name: string;
}

export interface CompanyResult {
  page: number;
  total_pages: number;
  total_results: number;
  results: Company[];
}
