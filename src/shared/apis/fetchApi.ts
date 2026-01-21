const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

export function fetchApi(path: string, options: RequestInit = {}) {
  return fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
}
