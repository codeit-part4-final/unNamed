'use client';

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  console.error(error);

  return (
    <html>
      <body>
        <main style={{ padding: 24 }}>
          <h2>서비스에 문제가 발생했습니다.</h2>
          <p>페이지를 새로고침하거나 잠시 후 다시 시도해 주세요.</p>
        </main>
      </body>
    </html>
  );
}
