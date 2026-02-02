'use client';

import { useId } from 'react';
import clsx from 'clsx';
import { InputProps } from './types/types';
import styles from './styles/Input.module.css';

/**
 * 공통 Input 컴포넌트.
 * @param className 추가 CSS 클래스
 * @param props 네이티브 input의 모든 속성(placeholder, type, onChange 등)
 */
export default function Input({ className, errorMessage, isError, ...props }: InputProps) {
  const hasError = isError || !!errorMessage;
  const errorId = useId();

  return (
    <>
      <input
        aria-invalid={hasError || undefined}
        aria-describedby={errorMessage ? errorId : undefined}
        {...props}
        className={clsx(styles.input, hasError && styles.error, className)}
      />
      {errorMessage && (
        <p id={errorId} role="alert" className={styles.errorMessage}>
          {errorMessage}
        </p>
      )}
    </>
  );
}
