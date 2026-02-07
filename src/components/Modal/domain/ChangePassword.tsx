'use client';

import type { FormEvent } from 'react';
import { useId } from 'react';

import Modal from '../Modal';
import { Input } from '@/components/input';
import type { InputProps } from '@/components/input/types/types';
import styles from './ChangePassword.module.css';

const TITLE_ID = 'change-password-title';
const NEW_PASSWORD_NAME = 'newPassword';
const CONFIRM_PASSWORD_NAME = 'confirmPassword';
const NEW_PASSWORD_PLACEHOLDER = '새 비밀번호를 입력해주세요.';
const CONFIRM_PASSWORD_PLACEHOLDER = '새 비밀번호를 다시 한 번 입력해주세요.';

type PasswordInputFieldProps = Omit<
  InputProps,
  'className' | 'type' | 'name' | 'autoComplete' | 'placeholder'
>;

export interface ChangePasswordProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  newPasswordInputProps?: PasswordInputFieldProps;
  confirmPasswordInputProps?: PasswordInputFieldProps;
}

export default function ChangePassword({
  isOpen,
  onClose,
  onSubmit,
  newPasswordInputProps,
  confirmPasswordInputProps,
}: ChangePasswordProps) {
  const generatedNewPasswordId = useId();
  const generatedConfirmPasswordId = useId();
  const newPasswordId = newPasswordInputProps?.id ?? generatedNewPasswordId;
  const confirmPasswordId = confirmPasswordInputProps?.id ?? generatedConfirmPasswordId;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabelledby={TITLE_ID}
      contentClassName={styles.modalContent}
    >
      <article className={styles.container}>
        <h2 id={TITLE_ID} className={styles.title}>
          비밀번호 변경하기
        </h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor={newPasswordId} className={styles.label}>
              새 비밀번호
            </label>
            <Input
              {...newPasswordInputProps}
              id={newPasswordId}
              className={styles.input}
              type="password"
              name={NEW_PASSWORD_NAME}
              autoComplete="new-password"
              placeholder={NEW_PASSWORD_PLACEHOLDER}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor={confirmPasswordId} className={styles.label}>
              새 비밀번호 확인
            </label>
            <Input
              {...confirmPasswordInputProps}
              id={confirmPasswordId}
              className={styles.input}
              type="password"
              name={CONFIRM_PASSWORD_NAME}
              autoComplete="new-password"
              placeholder={CONFIRM_PASSWORD_PLACEHOLDER}
            />
          </div>

          <footer className={styles.actions}>
            <button type="button" className={styles.closeButton} onClick={onClose}>
              닫기
            </button>
            <button type="submit" className={styles.submitButton}>
              변경하기
            </button>
          </footer>
        </form>
      </article>
    </Modal>
  );
}
