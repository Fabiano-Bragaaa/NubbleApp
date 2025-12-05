import {User} from '@domain';

import {AuthCredentials} from '../../domain/Auth/authTypes';

export interface AuthCredentialsService {
  authCredentials: AuthCredentials | null;
  userId: number | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  updatedUser: (user: User) => void;
  removeCredentials: () => Promise<void>;
  isLoading: boolean;
}
