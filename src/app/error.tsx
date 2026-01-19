'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Error Boundary에서는 에러 로그 반드시 남기기

    console.error(error);
  }, [error]);

  return (
    <main style={{ padding: 24 }}>
      <h2>문제가 발생했습니다.</h2>
      <p>잠시 후 다시 시도해 주세요.</p>

      <button type="button" onClick={() => reset()} style={{ marginTop: 16 }}>
        다시 시도
      </button>
    </main>
  );
}
