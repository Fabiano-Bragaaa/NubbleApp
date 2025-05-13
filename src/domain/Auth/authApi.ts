import {api} from '@api';

import {UserApi} from '../User';

import {AuthCredentialsAPI, SignUpDataAPI} from './authTypes';

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

async function signUp(data: SignUpDataAPI): Promise<UserApi> {
  const response = await api.post<UserApi>('register', data);

  return response.data;
}

export const authApi = {
  signIn,
  signOut,
  signUp,
};
