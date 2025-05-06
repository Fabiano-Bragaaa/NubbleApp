import {userAdapter} from '../User/userAdapter';

import {AuthCredentials, AuthCredentialsAPI} from './authTypes';

function toAuth(authAPI: AuthCredentialsAPI): AuthCredentials {
  return {
    token: authAPI.auth.token,
    user: userAdapter.toUser(authAPI.user),
  };
}

export const authAdapter = {
  toAuth,
};
