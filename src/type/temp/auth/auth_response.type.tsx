import user from './user.type';
export default interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: user;
}
