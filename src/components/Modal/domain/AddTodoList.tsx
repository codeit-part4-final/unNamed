'use client';

import Image from 'next/image';
import type { FormEvent } from 'react';
import { Input } from '@/components/input';
import Modal from '../Modal';
import styles from './AddTodoList.module.css';
import xMarkBig from '@/assets/icons/xMark/xMarkBig.svg';

const TITLE_ID = 'add-todo-list-title';

export interface AddTodoListProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: () => void;
}

export default function AddTodoList({ isOpen, onClose, onCreate }: AddTodoListProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabelledby={TITLE_ID}
      contentClassName={styles.modalContent}
    >
      <article className={styles.container}>
        <header className={styles.header}>
          <h2 id={TITLE_ID} className={styles.title}>
            할 일 목록
          </h2>
          <button type="button" className={styles.closeButton} aria-label="close" onClick={onClose}>
            <Image src={xMarkBig} alt="" width={24} height={24} />
          </button>
        </header>

        <form className={styles.form} onSubmit={handleSubmit}>
          <Input className={styles.input} placeholder="할 일을 입력하세요" />
          <footer className={styles.footer}>
            <button type="submit" className={styles.button}>
              만들기
            </button>
          </footer>
        </form>
      </article>
    </Modal>
  );
}
