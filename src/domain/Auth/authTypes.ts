import {User, UserApi} from '../User';

export interface AuthCredentials {
  token: string;
  refreshToken: string;
  tokenExpiresAt: string;
  user: User;
}

export interface AuthCredentialsAPI {
  auth: {
    type: string; //'bearer';
    token: string; //'Mg.1r6CMw4HEuDHObm04EE55grs6ijKZCZRuNsENeuM8KMRr8JeUnU8MLuy3XlI';
    refreshToken: string;
    expires_at: string;
  };
  user: UserApi;
}

export interface SignInData {
  username?: string;
  email?: string;
  password: string;
}

export interface SignUpDataAPI {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface SignUpData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface FieldIsAvailableAPI {
  message: string;
  isAvailable: boolean;
}

export interface forgotPasswordParam {
  email: string;
}

export interface EditPasswordParams {
  currentPassword: string;
  newPassword: string;
}
