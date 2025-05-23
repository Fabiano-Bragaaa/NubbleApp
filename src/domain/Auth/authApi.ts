import {api} from '@api';
import {AxiosRequestConfig} from 'axios';

import {UserApi} from '../User';

import {
  AuthCredentialsAPI,
  FieldIsAvailableAPI,
  forgotPasswordParam,
  SignUpDataAPI,
} from './authTypes';

const REFRESH_TOKEN_URL = 'auth/refresh-token';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentialsAPI> {
  const {data} = await api.post<AuthCredentialsAPI>('auth/login', {
    email,
    password,
  });

  return data;
}

async function signOut(): Promise<string> {
  const {data} = await api.get<string>('auth/profile/logout');

  return data;
}

async function signUp(data: SignUpDataAPI): Promise<UserApi> {
  const response = await api.post<UserApi>('auth/register', data);

  return response.data;
}

async function isUserNameAvailable(params: {
  username: string;
}): Promise<FieldIsAvailableAPI> {
  const response = await api.get<FieldIsAvailableAPI>(
    'auth/validate-username',
    {
      params,
    },
  );

  return response.data;
}

async function isEmailAvailable(params: {
  email: string;
}): Promise<FieldIsAvailableAPI> {
  const response = await api.get<FieldIsAvailableAPI>('auth/validate-email', {
    params,
  });

  return response.data;
}

async function forgotPassword(
  params: forgotPasswordParam,
): Promise<{message: string}> {
  const response = await api.post<{message: string}>(
    'auth/forgot-password',
    params,
  );

  return response.data;
}

async function refreshToken(token: string): Promise<AuthCredentialsAPI> {
  const response = await api.post<AuthCredentialsAPI>(REFRESH_TOKEN_URL, {
    refreshToken: token,
  });

  return response.data;
}

function isRefreshTokenRequest(request: AxiosRequestConfig): boolean {
  const url = request.url;

  return url === REFRESH_TOKEN_URL;
}

export const authApi = {
  signIn,
  signOut,
  signUp,
  isUserNameAvailable,
  isEmailAvailable,
  forgotPassword,
  refreshToken,
  isRefreshTokenRequest,
};
