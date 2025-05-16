import {AuthCredentials, authService} from '@domain';
import {useAuthCredentials} from '@services';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.86.12:3333/',
});

interface InterceptorProps {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
}

export function registerInterceptor({
  authCredentials,
  removeCredentials,
  saveCredentials,
}: InterceptorProps) {
  const interceptor = api.interceptors.response.use(
    response => response,
    async responseReject => {
      const failedRequest = responseReject.config;
      const hasNotRefreshToken = !authCredentials?.refreshToken;
      const isRefreshTokenRequest =
        authService.isRefreshTokenRequest(failedRequest);

      if (responseReject.response.status === 401) {
        if (hasNotRefreshToken || isRefreshTokenRequest || failedRequest.sent) {
          removeCredentials();
          return Promise.reject(responseReject);
        }

        failedRequest.sent = true;

        const newAuthCredentials = await authService.authenticateByRefreshToken(
          authCredentials?.refreshToken,
        );
        saveCredentials(newAuthCredentials);

        console.log('refresh token success', newAuthCredentials);

        failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;

        return api(failedRequest);
      }

      return Promise.reject(responseReject);
    },
  );

  // remove listener when component unmount
  return () => api.interceptors.response.eject(interceptor);
}
