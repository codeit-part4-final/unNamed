export type TaskListItemProps = {
  /** 할일 제목 텍스트 */
  title: string;
  /** 날짜 텍스트 (예: "2024년 7월 29일") */
  date: string;
  /** 체크(완료) 여부 */
  checked?: boolean;
  /** 선택 상태 (파란 테두리 표시) */
  isSelected?: boolean;
  /** 인라인 편집 모드 활성화 여부 */
  isEditing?: boolean;
  /** 편집 모드에서 빈 입력 시 표시할 안내 텍스트 */
  placeholder?: string;
  /** 반복 정보 텍스트 (예: "매일 반복"). 없으면 숨김 */
  frequency?: string;
  /** 댓글 수. 0이거나 없으면 숨김 */
  commentCount?: number;
  /** 체크 상태 변경 시 호출되는 콜백 */
  onCheckedChange?: (checked: boolean) => void;
  /** 편집 모드에서 제목 텍스트 변경 시 호출되는 콜백 */
  onTitleChange?: (value: string) => void;
  /** 편집 모드에서 Enter 입력 시 호출되는 콜백 */
  onTitleSubmit?: () => void;
  /** 케밥(⋮) 버튼 클릭 시 호출되는 콜백 */
  onKebabClick?: () => void;
  /** 반복 아이콘 클릭 시 호출되는 콜백 */
  onFrequencyClick?: () => void;
  /** 추가 CSS 클래스 */
  className?: string;
};
