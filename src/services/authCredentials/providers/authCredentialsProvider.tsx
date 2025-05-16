import {createContext, PropsWithChildren, useEffect, useState} from 'react';

import {api} from '@api';
import {AuthCredentials, authService} from '@domain';

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
    const interceptor = api.interceptors.response.use(
      response => response,
      async responseReject => {
        if (responseReject.response.status === 401) {
          if (!authCredentials?.refreshToken) {
            removeCredentials();
            return Promise.reject(responseReject);
          }

          const failedRequest = responseReject.config;

          const newAuthCredentials =
            await authService.authenticateByRefreshToken(
              authCredentials?.refreshToken,
            );

          saveCredentials(newAuthCredentials);
          failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;

          return api(failedRequest);
        }
      },
    );

    //remove listener when component unmount
    return () => api.interceptors.response.eject(interceptor);
  }, [authCredentials?.refreshToken]);

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
