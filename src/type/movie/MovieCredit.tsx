import { MovieCast } from './MovieCast';
import { MovieCrew } from './MovieCrew';

export interface Credit {
  cast: MovieCast[];
  crew: MovieCrew[];
}
