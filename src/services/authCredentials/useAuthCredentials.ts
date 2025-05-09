import {useContext} from 'react';

import {AuthCredentialsService} from './authCredentialsType';
import {AuthCredentialsContext} from './providers/authCredentialsProvider';

export function useAuthCredentials(): AuthCredentialsService {
  const context = useContext(AuthCredentialsContext);
  if (!context) {
    throw new Error(
      'AuthCredentials should be used within a AuthCredentialsProvider',
    );
  }

  return context;
}
