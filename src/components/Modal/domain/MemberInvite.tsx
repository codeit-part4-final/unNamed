'use client';

import Image from 'next/image';
import Modal from '../Modal';
import styles from './MemberInvite.module.css';
import xMarkBig from '@/assets/icons/xMark/xMarkBig.svg';

export type MemberInviteProps = {
  isOpen: boolean;
  onClose: () => void;
  inviteLink: string;
  onCopy?: (link: string) => void;
};

export default function MemberInvite({ isOpen, onClose, inviteLink, onCopy }: MemberInviteProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
    } finally {
      onCopy?.(inviteLink);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabelledby="member-invite-title"
      ariaDescribedby="member-invite-desc"
      contentClassName={styles.modalContent}
    >
      <div className={styles.container}>
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label="close">
          <Image src={xMarkBig} alt="" width={24} height={24} />
        </button>
        <h2 id="member-invite-title" className={styles.title}>
          멤버 초대
        </h2>
        <p id="member-invite-desc" className={styles.description}>
          그룹에 참여할 수 있는 링크를 복사합니다.
        </p>
        <button type="button" className={styles.copyButton} onClick={handleCopy}>
          링크 복사하기
        </button>
      </div>
    </Modal>
  );
}
