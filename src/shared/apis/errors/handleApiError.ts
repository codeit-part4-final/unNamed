import { ApiError } from './errors';

export function handleApiError(error: ApiError) {
  const SERVER_ERROR = 500;

  if (error.status && error.status >= SERVER_ERROR) {
    alert('일시적인 서버 오류가 발생했습니다.\n잠시 후 다시 시도해주세요.');
    return;
  }

  switch (error.status) {
    case 400:
      alert(error.message);
      break;

    case 401:
      alert('로그인이 필요합니다.');
      break;

    case 403:
      alert('접근 권한이 없습니다.');
      break;

    case 404:
      alert(error.message || '요청한 리소스를 찾을 수 없습니다.');
      break;

    default:
      alert(error.message || '요청 처리 중 오류가 발생했습니다.');
  }
}
