import type { AxiosError } from 'axios';

export interface ApiErrorResponse {
  message: string;
  code?: string;
  status?: number;
}

/**
 * 공통 API 에러 클래스
 * - 모든 axios 에러는 ApiError로 변환되어 전달된다.
 */
export class ApiError extends Error {
  status?: number;
  code?: string;

  constructor(message: string, status?: number, code?: string) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
  }
}

/**
 * axios 에러를 공통 ApiError 형태로 변환한다.
 */
export function normalizeAxiosError(error: unknown): ApiError {
  if (isAxiosError(error)) {
    const status = error.response?.status;
    const data = error.response?.data as ApiErrorResponse | undefined;

    return new ApiError(data?.message ?? '서버 요청 중 오류가 발생했습니다.', status, data?.code);
  }

  return new ApiError('알 수 없는 오류가 발생했습니다.');
}

/**
 * axios 에러 타입 가드
 */
function isAxiosError(error: unknown): error is AxiosError {
  return Boolean((error as AxiosError)?.isAxiosError);
}
