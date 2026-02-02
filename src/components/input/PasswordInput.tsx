'use client';

import { useId, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Input from './Input';
import { PasswordInputProps } from './types/types';
import visibilityTrue from '@/assets/icons/visibility/visibillityTrue.svg';
import visibilityFalse from '@/assets/icons/visibility/visibillityFalse.svg';
import styles from './styles/PasswordInput.module.css';

/**
 * 비밀번호 Input 컴포넌트.
 * @param className 추가 CSS 클래스
 * @param props 네이티브 input의 모든 속성(type 제외)
 */
export default function PasswordInput({ className, errorMessage, ...props }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const errorId = useId();

  return (
    <>
      <div className={styles.wrapper} role="group" aria-label="비밀번호 입력">
        <Input
          type={showPassword ? 'text' : 'password'}
          className={clsx(styles.input, className)}
          isError={!!errorMessage}
          onCopy={(e) => e.preventDefault()}
          aria-describedby={errorMessage ? errorId : undefined}
          {...props}
        />
        <button
          type="button"
          className={styles.toggleButton}
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
        >
          <Image
            src={showPassword ? visibilityTrue : visibilityFalse}
            alt=""
            width={24}
            height={24}
          />
        </button>
      </div>
      {errorMessage && (
        <p id={errorId} role="alert" className={styles.errorMessage}>
          {errorMessage}
        </p>
      )}
    </>
  );
}
