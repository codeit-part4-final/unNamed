'use client';

import type { FormEvent } from 'react';

import Modal from '../Modal';
import { Input } from '@/components/input';
import type { InputProps } from '@/components/input/types/types';
import styles from './ResetPassword.module.css';

const TITLE_ID = 'reset-password-title';
const DESCRIPTION_ID = 'reset-password-description';

export interface ResetPasswordProps {
  isOpen: boolean;
  onClose: () => void;
  onSendLink: () => void;
  emailInputProps?: Omit<InputProps, 'className'>;
}

/**
 * 비밀번호 재설정 링크를 보내기 위한 모달 UI 컴포넌트.
 *
 * @param props.isOpen 모달을 열지 여부
 * @param props.onClose 모달을 닫을 때 호출 (오버레이 클릭/Escape 포함)
 * @param props.onSendLink "링크 보내기" 제출 시 호출되는 콜백
 * @param props.emailInputProps 이메일 Input에 그대로 전달할 props (예: `value`, `onChange`, `isError`, `errorMessage`)
 */
export default function ResetPassword({
  isOpen,
  onClose,
  onSendLink,
  emailInputProps,
}: ResetPasswordProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSendLink();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabelledby={TITLE_ID}
      ariaDescribedby={DESCRIPTION_ID}
      contentClassName={styles.modalContent}
    >
      <article className={styles.container}>
        <header className={styles.header}>
          <h2 id={TITLE_ID} className={styles.title}>
            비밀번호 재설정
          </h2>
          <p id={DESCRIPTION_ID} className={styles.description}>
            비밀번호 재설정 링크를 보내드립니다.
          </p>
        </header>

        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            className={styles.input}
            type="email"
            name="email"
            autoComplete="email"
            placeholder="이메일을 입력하세요"
            {...emailInputProps}
          />

          <footer className={styles.actions}>
            <button type="button" className={styles.closeButton} onClick={onClose}>
              닫기
            </button>
            <button type="submit" className={styles.sendButton}>
              링크 보내기
            </button>
          </footer>
        </form>
      </article>
    </Modal>
  );
}
