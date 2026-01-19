import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ padding: 24 }}>
      <h2>페이지를 찾을 수 없습니다.</h2>
      <p>요청하신 페이지가 존재하지 않습니다.</p>

      <Link href="/" style={{ marginTop: 16, display: 'inline-block' }}>
        홈으로 이동
      </Link>
    </main>
  );
}
