import {createContext, PropsWithChildren, useState} from 'react';

import {AuthCredentials} from '@domain';

import {AuthCredentialsService} from '../authCredentialsType';

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

  async function saveCredentials(ac: AuthCredentials): Promise<void> {
    setAuhCredentials(ac);
  }

  async function removeCredentials(): Promise<void> {
    setAuhCredentials(null);
  }

  return (
    <AuthCredentialsContext.Provider
      value={{authCredentials, isLoading, saveCredentials, removeCredentials}}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}
