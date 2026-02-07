'use client';

import Modal from '../../../Modal';
import BaseButton from '@/components/Button/base/BaseButton';
import styles from './LogoutModal.module.css';
import type { BaseDomainModalProps } from '../../types/types';

const TITLE_ID = 'logout-modal-title';
const DEFAULT_TITLE = '로그아웃 하시겠어요?';
const DEFAULT_CLOSE_LABEL = '닫기';
const DEFAULT_CONFIRM_LABEL = '로그아웃';

interface LogoutModalTextOptions {
  title?: string;
  closeLabel?: string;
  confirmLabel?: string;
}

export interface LogoutModalProps extends BaseDomainModalProps {
  onConfirm: () => void;
  text?: LogoutModalTextOptions;
}

/**
 * @param props.isOpen 모달 표시 여부를 boolean으로 전달합니다.
 * @param props.onClose 모달을 닫을 때 실행할 함수를 전달합니다.
 * @param props.onConfirm 로그아웃 버튼 클릭 시 실행할 함수를 전달합니다.
 * @param props.text 모달 제목과 버튼 문구 같은 텍스트 옵션을 객체로 전달합니다.
 * @param props.closeOptions 오버레이 클릭과 Escape 닫힘 옵션을 객체로 전달합니다.
 */
export default function LogoutModal({
  isOpen,
  onClose,
  onConfirm,
  text,
  closeOptions,
}: LogoutModalProps) {
  const title = text?.title ?? DEFAULT_TITLE;
  const closeLabel = text?.closeLabel ?? DEFAULT_CLOSE_LABEL;
  const confirmLabel = text?.confirmLabel ?? DEFAULT_CONFIRM_LABEL;
  const closeOnOverlayClick = closeOptions?.overlayClick ?? true;
  const closeOnEscape = closeOptions?.escape ?? true;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabelledby={TITLE_ID}
      contentClassName={styles.modalContent}
      closeOnOverlayClick={closeOnOverlayClick}
      closeOnEscape={closeOnEscape}
    >
      <article className={styles.container}>
        <h2 id={TITLE_ID} className={styles.title}>
          {title}
        </h2>

        <footer className={styles.actions}>
          <BaseButton
            type="button"
            variant="outline"
            className={styles.closeButton}
            onClick={onClose}
          >
            {closeLabel}
          </BaseButton>
          <BaseButton
            type="button"
            variant="danger"
            className={styles.confirmButton}
            onClick={onConfirm}
          >
            {confirmLabel}
          </BaseButton>
        </footer>
      </article>
    </Modal>
  );
}
