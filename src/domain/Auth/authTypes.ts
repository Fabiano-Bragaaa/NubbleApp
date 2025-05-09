import {User, UserApi} from '../User';

export interface AuthCredentials {
  token: string;
  user: User;
}

export interface AuthCredentialsAPI {
  auth: {
    type: string; //'bearer';
    token: string; //'Mg.1r6CMw4HEuDHObm04EE55grs6ijKZCZRuNsENeuM8KMRr8JeUnU8MLuy3XlI';
  };
  user: UserApi;
}

export interface SignInData {
  username?: string;
  email?: string;
  password: string;
}
