import { User } from '../user/user';

export interface SignInResponseDto {
  accessToken: string;
  refreshToken: string;
  user: User;
}
