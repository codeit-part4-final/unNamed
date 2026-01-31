'use client';

import ProfileImage from '@/components/profile-img/ProfileImage';

export default function Home() {
  return (
    <main>
      <ProfileImage variant="profile" radius="r32" size="xl" editable />
      <h1>프로젝트 준비</h1>
    </main>
  );
}
