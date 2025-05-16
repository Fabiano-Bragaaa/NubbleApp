import {createContext, PropsWithChildren, useEffect, useState} from 'react';

import {api, registerInterceptor} from '@api';
import {AuthCredentials, authService} from '@domain';

import {authApi} from '../../../domain/Auth/authApi';
import {AuthCredentialsService} from '../authCredentialsType';

import {authCredentialsStorage} from './authCredentialsStorage';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  isLoading: true,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
});

export function AuthCredentialsProvider({children}: PropsWithChildren<{}>) {
  const [authCredentials, setAuhCredentials] = useState<AuthCredentials | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interceptor = registerInterceptor({
      authCredentials,
      removeCredentials,
      saveCredentials,
    });

    //remove listener when component unmount
    return interceptor;
  }, [authCredentials]);

  async function startAuthCredentials() {
    try {
      const ac = await authCredentialsStorage.get();
      if (ac) {
        authService.updateToken(ac.token);
        setAuhCredentials(ac);
      }
    } catch (err) {
      //TODO
    } finally {
      setIsLoading(false);
    }
  }

  async function saveCredentials(ac: AuthCredentials): Promise<void> {
    authService.updateToken(ac.token);
    authCredentialsStorage.set(ac);
    setAuhCredentials(ac);
  }

  async function removeCredentials(): Promise<void> {
    authService.removeToken();
    authCredentialsStorage.remove();
    setAuhCredentials(null);
  }

  useEffect(() => {
    startAuthCredentials();
  }, []);

  return (
    <AuthCredentialsContext.Provider
      value={{authCredentials, isLoading, saveCredentials, removeCredentials}}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}
