export interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface SignUpResponse {
  accessToken: string;
  user: Omit<User, 'password'> & {
    createdAt: string;
    id: number;
  };
}

export interface LoginResponse extends SignUpResponse {}

export interface AuthLoginRequest extends Pick<User, 'email' | 'password'> {}
