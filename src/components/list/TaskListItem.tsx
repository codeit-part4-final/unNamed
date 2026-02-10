'use client';

import clsx from 'clsx';
import Image from 'next/image';
import type { KeyboardEvent } from 'react';

import CheckBox from '@/components/checkbox/CheckBox';

import styles from './styles/TaskListItem.module.css';
import { TASK_LIST_ITEM_ICONS } from './constants/taskListItemConstants';
import type { TaskListItemProps } from './types/types';

/**
 * 할일 목록 아이템 카드 컴포넌트.
 * 체크박스 + 제목 + 케밥 메뉴가 상단에, 날짜 + 반복 정보가 하단에 표시됩니다.
 * isEditing이 true이면 제목 영역이 인라인 텍스트 입력으로 전환됩니다.
 */
export default function TaskListItem({
  title,
  date,
  checked = false,
  isSelected = false,
  isEditing = false,
  placeholder,
  frequency,
  commentCount,
  onCheckedChange,
  onTitleChange,
  onTitleSubmit,
  onKebabClick,
  onFrequencyClick,
  className,
}: TaskListItemProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onTitleSubmit?.();
    }
  };

  return (
    <div
      className={clsx(
        styles.card,
        isSelected && styles.selected,
        checked && styles.completed,
        className,
      )}
    >
      <div className={styles.topRow}>
        <div className={styles.checkboxLarge}>
          <CheckBox
            checked={checked}
            size="large"
            onCheckedChange={onCheckedChange}
            options={{ ariaLabel: `${title} 완료 체크` }}
          />
        </div>
        <div className={styles.checkboxSmall}>
          <CheckBox
            checked={checked}
            size="small"
            onCheckedChange={onCheckedChange}
            options={{ ariaLabel: `${title} 완료 체크` }}
          />
        </div>
        <div className={styles.titleGroup}>
          {isEditing ? (
            <input
              className={styles.titleInput}
              type="text"
              value={title}
              placeholder={placeholder}
              onChange={(e) => onTitleChange?.(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="할일 제목 입력"
            />
          ) : (
            <span className={clsx(styles.title, checked && styles.titleCompleted)}>{title}</span>
          )}
          {!isEditing && commentCount != null && commentCount > 0 && (
            <span className={styles.commentCount}>
              <Image
                className={styles.metaIcon}
                src={TASK_LIST_ITEM_ICONS.comment}
                alt=""
                width={16}
                height={16}
              />
              {commentCount}
            </span>
          )}
        </div>
        <button type="button" className={styles.kebab} onClick={onKebabClick} aria-label="더보기">
          <Image src={TASK_LIST_ITEM_ICONS.kebab} alt="" width={16} height={16} />
        </button>
      </div>

      <div className={styles.metaRow}>
        <Image
          className={styles.metaIcon}
          src={TASK_LIST_ITEM_ICONS.calender}
          alt=""
          width={12}
          height={12}
        />
        <span>{date}</span>
        {frequency && (
          <>
            <span className={styles.separator}>|</span>
            <button
              type="button"
              className={styles.frequencyButton}
              onClick={onFrequencyClick}
              aria-label="반복 설정"
            >
              <Image
                className={styles.metaIcon}
                src={TASK_LIST_ITEM_ICONS.repeat}
                alt=""
                width={12}
                height={12}
              />
              <span>{frequency}</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
