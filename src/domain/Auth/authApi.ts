import {api} from '@api';

import {AuthCredentialsAPI} from './authTypes';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentialsAPI> {
  const {data} = await api.post<AuthCredentialsAPI>('login', {
    email,
    password,
  });

  return data;
}

async function signOut(): Promise<string> {
  const {data} = await api.get<string>('profile/logout');

  return data;
}

export const authApi = {
  signIn,
  signOut,
};
