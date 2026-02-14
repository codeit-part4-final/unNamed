'use client';

import { useState } from 'react';
import { BaseButton } from '@/components/Button/base';
import { Input } from '@/components/input';
import { ProfileImage } from '@/components/profile-img';
import { MobileHeader, Sidebar } from '@/components/sidebar';
import { useCreateTeam } from './_hooks/useCreateTeam';
import styles from './page.module.css';

const TEAM_CREATED_MESSAGE = '팀이 생성되었습니다.';
const EMPTY_TEAM_NAME_ERROR = '팀 이름을 입력해주세요.';
const DUPLICATED_TEAM_NAME_ERROR = '중복된 팀 이름입니다.';
const DEFAULT_CREATE_TEAM_ERROR = '팀 생성에 실패했어요. 잠시 후 다시 시도해주세요.';

type Feedback = {
  type: 'success' | 'error';
  message: string;
};

function getCreateTeamFailureMessage(error: unknown) {
  if (!(error instanceof Error)) {
    return DEFAULT_CREATE_TEAM_ERROR;
  }

  if (error.message === EMPTY_TEAM_NAME_ERROR) {
    return EMPTY_TEAM_NAME_ERROR;
  }

  if (error.message === DUPLICATED_TEAM_NAME_ERROR || error.message.includes('status: 409')) {
    return '이미 존재하는 팀 이름이라 생성에 실패했어요.';
  }

  if (error.message.includes('status: 400')) {
    return '요청 값이 올바르지 않아 팀 생성에 실패했어요.';
  }

  if (error.message.includes('status: 401') || error.message.includes('status: 403')) {
    return '팀을 생성할 권한이 없어 실패했어요.';
  }

  return DEFAULT_CREATE_TEAM_ERROR;
}

export default function AddTeamPage() {
  const [teamName, setTeamName] = useState('');
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const { createTeam, isPending } = useCreateTeam();

  const isSubmitDisabled = !teamName.trim() || isPending;

  const handleSubmit = async () => {
    if (isSubmitDisabled) return;

    try {
      await createTeam(teamName);
      setTeamName('');
      setFeedback({ type: 'success', message: TEAM_CREATED_MESSAGE });
    } catch (error) {
      setFeedback({ type: 'error', message: getCreateTeamFailureMessage(error) });
    }
  };

  return (
    <main className={styles.page}>
      <Sidebar />
      <div className={styles.mobileGnb}>
        <MobileHeader />
      </div>
      <section className={styles.mainContents}>
        <div className={styles.card}>
          <h2 className={styles.title}>팀 생성하기</h2>

          <div className={styles.profileSection}>
            <ProfileImage variant="team" size="xl" editable />
          </div>

          <div className={styles.inputSection}>
            <label htmlFor="team-name" className={styles.label}>
              팀 이름
            </label>
            <Input
              id="team-name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="팀 이름을 입력해주세요"
              className={styles.teamNameInput}
            />
          </div>

          <BaseButton
            className={styles.submitButton}
            disabled={isSubmitDisabled}
            onClick={() => void handleSubmit()}
          >
            생성하기
          </BaseButton>

          {feedback?.type === 'error' ? (
            <p role="alert" className={styles.errorText}>
              {feedback.message}
            </p>
          ) : feedback?.type === 'success' ? (
            <p className={styles.successText}>{feedback.message}</p>
          ) : (
            <p className={styles.helperText}>
              팀 이름은 회사명이나 모임 이름 등으로 설정하면 좋아요.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
