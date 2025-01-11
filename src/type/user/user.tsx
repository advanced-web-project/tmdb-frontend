export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  profile: string;
  isActive: boolean;
  createdAt: Date;
  passwordChangedAt: Date;
}
