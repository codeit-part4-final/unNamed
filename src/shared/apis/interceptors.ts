import type { AxiosInstance } from 'axios';
import { normalizeAxiosError } from './errors';

export function setupInterceptors(instance: AxiosInstance) {
  instance.interceptors.request.use(
    (config) => {
      // 예: 토큰 추가 (추후 확장)
      // const token = getToken();
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`;
      // }

      return config;
    },
    (error) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(normalizeAxiosError(error)),
  );
}
