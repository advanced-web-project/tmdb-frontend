interface AuthorDetails {
  name: string; // Author's display name
  username: string; // Author's username
  avatar_path: string | null; // Path to author's avatar image (nullable)
  rating?: number; // Rating given by the author (optional)
}

interface Review {
  author: string; // Name of the author
  author_details: AuthorDetails; // Details about the author
  content: string; // Content of the review
  created_at: string; // Date and time the review was created
  id: string; // Unique ID of the review
  updated_at: string; // Date and time the review was last updated
  url: string; // URL to the review
}

export interface MovieReviews {
  id: number; // ID of the movie
  results: Review[]; // Array of reviews
}
