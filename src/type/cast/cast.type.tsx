interface CastMember {
  adult: boolean;
  gender: number; // 1 for female, 2 for male, etc.
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null; // Can be null if no profile path
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

interface CrewMember {
  adult: boolean;
  gender: number; // 1 for female, 2 for male, etc.
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null; // Can be null if no profile path
  credit_id: string;
  department: string;
  job: string;
}

export default interface MovieCredits {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
}
